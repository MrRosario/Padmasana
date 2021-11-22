import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from '../../components/CustomButton';
import TimerEditor from '../../components/TimerEditor';
import Timer from '../../components/Timer';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedModal, setSelectedModal] = useState('');

    const [durMin, setDurMin] = useState('');
    const [durSec, setDurSec] = useState('');
    const [readyMin, setReadyMin] = useState('');
    const [readySec, setReadySec] = useState('');

    useEffect(() => {
        storeData();
        getStoredData();
    },[]);

    const storeData = async() => {
        try {
            const strgDuration = await AsyncStorage.getItem('duration_input');
            const strgReady = await AsyncStorage.getItem('ready_input');

            //When there's no data stored localy
            if(strgDuration === null && strgReady === null) {
                await AsyncStorage.setItem('duration_input', JSON.stringify({min: '20', sec: '00'}) );
                await AsyncStorage.setItem('ready_input', JSON.stringify({min: '00', sec: '20' }) );
            } else {

            }
        } catch (e) {
          // saving error
        }
    }

    const getStoredData = async () => {
        try {
          const durationData = await AsyncStorage.getItem('duration_input');
          const readyData = await AsyncStorage.getItem('ready_input');

          setDurMin(JSON.parse(durationData).min || '10');
          setDurSec(JSON.parse(durationData).sec || '00');

          setReadyMin(JSON.parse(readyData).min || '00');
          setReadySec(JSON.parse(readyData).sec || '10');
        } catch(e) {
          // error reading value
        }
    }
    const handleModal = (type) => {

        if(type === 'CONFIM'){
            setShowModal(true);
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