import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomModal from '../../components/CustomModal'
import CustomButton from '../../components/CustomButton';
import TimerEditor from '../../components/TimerEditor';
import Timer from '../../components/Timer';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedModal, setSelectedModal] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const [durMin, setDurMin] = useState('');
    const [durSec, setDurSec] = useState('');
    const [readyMin, setReadyMin] = useState('');
    const [readySec, setReadySec] = useState('');

    useEffect(() => {
        handleLocalData();
    },[]);

    const handleLocalData = async() => {
        try {
            const durationData = await AsyncStorage.getItem('duration_input');
            const readyData = await AsyncStorage.getItem('ready_input');

            if(durationData === null && readyData === null) {
                setDurMin('10');
                setDurSec('00');

               await AsyncStorage.setItem('duration_input', JSON.stringify({
                    min: '10', 
                    sec: '00'
                }));

                setReadyMin('00');
                setReadySec('07');

                await AsyncStorage.setItem('ready_input', JSON.stringify({
                    min: '00', 
                    sec: '07' 
                }));

            } else {
                storeData(durationData, readyData);
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    const storeData = (durationData, readyData) => {
        setDurMin(JSON.parse(durationData).min);
        setDurSec(JSON.parse(durationData).sec);

        setReadyMin(JSON.parse(readyData).min);
        setReadySec(JSON.parse(readyData).sec);
    }

    const handleModal = async (type, title, minVal, minSec) => {

        if(type === 'CONFIRM'){
            if(title === 'DURAÇÃO'){
                AsyncStorage.setItem('duration_input', JSON.stringify({
                    min: minVal || durMin, 
                    sec: minSec || durSec
                })).then(()=> {
                    setShowModal(false);
                });
            }
            else {
                AsyncStorage.setItem('ready_input', JSON.stringify({
                    min: minVal || readyMin, 
                    sec: minSec || readySec
                })).then(() => {
                    setShowModal(false);
                });
            }
        }
        else{
            setShowModal(false)
        }
    }

    const handleEditTime = (type) => {
        setShowModal(true);
        setSelectedModal(type)
    }

    return(
        <Layout>
            <Header />

            <View style={styles.body}>
                <Text style={styles.bigTitle}>
                    Vamos Meditar!
                </Text>

                <View style={styles.container}>
                    <Timer
                        type='Duration'
                        label='Duração'
                        min={durMin}
                        sec={durSec}
                        callback={handleEditTime}
                    />
                    <Timer
                        type='Ready'
                        label='Preparar-se'
                        min={readyMin}
                        sec={readySec}
                        callback={handleEditTime}
                    />

                    <View style={{ height: 30, width: '100%' }} />

                    <CustomButton
                        size='Medium'
                        label='INICIAR'
                        setModalVisible={setModalVisible}
                    />
                </View>

                {
                    showModal && selectedModal === 'Duration' && (
                        <TimerEditor
                            title='DURAÇÃO'
                            setDurMin={setDurMin}
                            setDurSec={setDurSec}
                            min={durMin}
                            sec={durSec}
                            callback={handleModal}
                        />
                    )
                }
                {
                    showModal && selectedModal === 'Ready' && (
                        <TimerEditor
                            title='PREPARAR-SE'
                            setReadyMin={setReadyMin}
                            setReadySec={setReadySec}
                            min={readyMin}
                            sec={readySec}
                            callback={handleModal}
                        />
                    )
                }
            </View>

            {   modalVisible &&
                <CustomModal 
                    modalVisible={modalVisible} 
                    setModalVisible={setModalVisible}
                />
            }
        </Layout>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    bigTitle: {
        fontWeight: '600',
        fontSize: 26,
        color: '#000000',
        textAlign: 'center',
        marginTop: 30
    },
    container: {
        marginTop: 30,
        flexDirection: 'column'
    }
});

export default Home;