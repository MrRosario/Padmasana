import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TimerEditor = ({ title, callback }) => {

    return(
        <View style={styles.editorContainer}>
            <View style={styles.header}>
                <Text style={styles.topTitle}>
                    {title}
                </Text>
            </View>

            <View style={styles.pickerContainer}> 
            </View>
            
            <View style={styles.btnContainer}>
                <Button 
                    callback={callback}
                    type="CANCEL"
                    label={`CANCELAR`} 
                />
                <View 
                    style={{
                        height: 50,
                        borderWidth: 0.5,
                        borderColor: '#000000'
                    }} 
                />
                <Button 
                    callback={callback}
                    type="CONFIRM"
                    label={`OK`} 
                />
            </View>

        </View>
    )
}

function Button({ label, type, callback }){
    return(
        <TouchableOpacity 
            style={styles.button} 
            onPress={()=> callback(type)}
        >
            <Text style={styles.btnLabel}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    header: {
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    topTitle: {
        fontWeight: '600',
        fontSize: 16,
        color: '#000000',
    },
    editorContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 0,
        width: 280,
        height: 210,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#000000',
        shadowColor: "#000", 
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 6,
    },
    pickerContainer: {
        height: 115,
        backgroundColor: '#E9E9E9',
        borderWidth: 0.5,
        borderColor: '#000000'
    },
    btnContainer: {
        flexDirection: 'row',
        height: 50
    },
    button: {
        width: '50%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnLabel: {
        fontWeight: '300',
        fontSize: 18,
        // align-items: center,
        // text-align: center,
        color: '#000000',
    }
});

export default TimerEditor;