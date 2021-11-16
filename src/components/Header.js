import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={Logo} 
      />
      <Ionicons 
        name="ios-menu" 
        size={35} 
        color="#ffffff" 
      />
    </View>
  );
};

const styles =  StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: '#FF5E13',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  logo: {
    width: 50,
    height: 50,
  }
});

export default Header;