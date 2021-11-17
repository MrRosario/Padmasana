import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const CustomButton = ({ type, label }) => {
    
    const btnSize = type === 'large'
        ? styles.btnLarge
        : styles.btnMedium;

    const handleClick = () => {
        console.log("BTN iniciar:")
    }

    return(
        <TouchableOpacity style={[styles.button, btnSize]} onPress={handleClick}>
            <Text style={styles.btnText}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        maxWidth: 360,
        height: 45,
        backgroundColor: '#FF5E13',
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FFFFFF'
    },
    btnLarge: {
        width: '100%'
    },
    btnMedium: {
        width: 235
    }
});

export default CustomButton;