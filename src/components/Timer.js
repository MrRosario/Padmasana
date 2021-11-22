import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { Entypo, MaterialCommunityIcons } from '@expo/vector-icons';

const Timer = ({ type, label, min, sec, callback }) => {
    
    console.log(`TYPE: ${type}, MIN-${min}: SEC-${sec}`);

    return(
        <TouchableOpacity 
            style={styles.container} 
            onPress={()=> callback(type)}
        >
            {
                type === 'Duration' 
                ? <MaterialCommunityIcons name="timer-outline" size={24} color="#B2B2B2" />
                : <MaterialCommunityIcons name="timer-sand-empty" size={24} color="#B2B2B2" />
            }
            <View style={styles.timeContainer}>
                <Text style={styles.timeTitle}>
                    {label}
                </Text>
                <Text style={styles.time}>
                    {`${min}:${sec}`}
                </Text>
            </View>
            <Entypo name="chevron-right" size={24} color="black" />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E9E9E9',
        borderWidth: 2,
        borderColor: '#B3B3B3',
        borderRadius: 6,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        paddingHorizontal: 10,
        marginBottom: 15,
        width: '100%',
        maxWidth: 360,
        height: 60
    },
    timeContainer: {
        flexDirection: 'column',
        position: 'absolute',
        left: 54
    },
    timeTitle: {
        fontWeight: '500',
        fontSize: 15,
        color: '#000000'
    },
    time: {
        fontWeight: 'bold',
        fontSize: 15,
        color: '#FF5E13'
    }
});

export default Timer;