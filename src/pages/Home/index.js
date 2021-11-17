import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import TimerEditor from '../../components/TimerEditor';
import Timer from '../../components/Timer';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

const Home = () => {

    const [showModal, setShowModal] = useState(false);

    const handleModal = (type) => {
        
        if(type === 'CONFIM'){
            setShowModal(true);
        }
        else{
            setShowModal(false)
        }

        console.log("type: ", type);
    }
    
    const handleEditTime = () => {
        setShowModal(true)
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
                        time ='10:00'
                        callback={handleEditTime}
                    />
                    <Timer
                        type='Ready' 
                        label='Preparar-se'
                        time ='00:10'
                        callback={handleEditTime}
                    />
                    
                    <View style={{ height: 30, width: '100%' }} />

                    <CustomButton 
                        size='Medium' 
                        label='INICIAR'
                    />
                </View>

                {
                    showModal 
                    ?   <TimerEditor 
                            title='DURAÇÃO' 
                            callback={handleModal}
                        /> 
                    : null
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