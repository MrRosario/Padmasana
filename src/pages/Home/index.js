import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Timer from '../../components/Timer';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

const Home = () => {
    return(
        <Layout>
            <Header />

            <View style={styles.body}>
                <Text style={styles.bigTitile}>
                    Vamos Meditar!
                </Text>

                <View style={styles.container}>
                    <Timer
                        type='Duration' 
                        label='Duração'
                        time ='10:00'
                    />
                    <Timer
                        type='Ready' 
                        label='Preparar-se'
                        time ='00:10'
                    />
                    
                    <View style={{ height: 30, width: '100%' }} />

                    <CustomButton 
                        type='Medium' 
                        label='INICIAR'
                    />
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    body: {
        paddingVertical: 20,
        paddingHorizontal: 16
    },
    bigTitile: {
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