import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const TimerEditor = ({ title }) => {

    return(
        <View style={styles.editorContainer}>
            <Text style={styles.topTitle}>
                {title}
            </Text>

            <View style={styles.pickerContainer}> </View>
            
            <RenderButton label={`CANCELAR`} />
            <RenderButton label={`OK`} />

        </View>
    )
}

function RenderButton({ label }){
    return(
        <TouchableOpacity style={styles.buttons}>
            <Text>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    editorContainer: {
        width: 280,
        height: 210,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#000000',
        shadowColor: "#000",
        
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,

        borderRadius: 6,
    },
    topTitle: {},
    pickerContainer: {},
    buttons: {}
});

export default TimerEditor;