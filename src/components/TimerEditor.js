import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

const TimerEditor = ({ title, callback }) => {

    const onChangeNumber = (type, value) => {
        console.log(`Type: ${type}, Value: ${value} `);
    }

    return(
        <View style={styles.editorContainer}>
            <View style={styles.header}>
                <Text style={styles.topTitle}>
                    {title}
                </Text>
            </View>

            <View style={styles.pickerContainer}> 
                <Input 
                    type='min'
                    label='minutos'
                    isFocused={true}
                    defaultValue='10'
                    callback={onChangeNumber}
                />
                <Text style={styles.timeDots}>:</Text>
                <Input 
                    type='sec'
                    label='segundos'
                    isFocused={false}
                    callback={onChangeNumber}
                    defaultValue='0'
                />
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

function Input({ type, label, callback, isFocused, defaultValue }){
    const [number, setNumber] = React.useState(defaultValue);

    return(
        <View>
            <TextInput
                style={styles.input}
                onChangeText={ val => {
                    setNumber(val);
                    callback(type, val);
                }}
                defaultValue='10'
                value={number}
                maxLength={2}
                keyboardType="numeric"
                autoFocus={isFocused}
                blurOnSubmit={true}
            />
            <Text style={styles.inputLabel}>
                {label}
            </Text>
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
    editorContainer: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: 50,
        width: 280,
        height: 210,
        backgroundColor: '#FFFFFF',
        borderWidth: 1,
        borderColor: '#000000',
        shadowColor: "#000", 
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        borderRadius: 6,
    },
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
    timeDots: {
        marginHorizontal: 15,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#000000',
        position: 'relative',
        top: -5
    },
    pickerContainer: {
        height: 115,
        backgroundColor: '#E9E9E9',
        borderWidth: 0.5,
        borderColor: '#000000',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        height: 55,
        width: 55,
        backgroundColor: '#ffffff',
        borderColor: '#000000',
        borderWidth: 1,
        textAlign: 'center',
        marginBottom: 5
    },
    inputLabel: {
        fontWeight: '400',
        fontSize: 12,
        textAlign: 'center',
        color: '#000000'
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