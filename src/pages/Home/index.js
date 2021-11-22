import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import TimerEditor from '../../components/TimerEditor';
import Timer from '../../components/Timer';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

const Home = () => {

    const [showModal, setShowModal] = useState(false);
    const [selectedModal, setSelectedModal] = useState('');

    const [durMin, setDurMin] = useState('10');
    const [durSec, setDurSec] = useState('00');
    const [readyMin, setReadyMin] = useState('00');
    const [readySec, setReadySec] = useState('10');
    
    // console.log("durMin: ", durMin);    
    // console.log("durSec: ", durSec);
    console.log("readyMin: ", readyMin);
    console.log("readySec: ", readySec);

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