import React from 'react';
import { StyleSheet, View, SafeAreaView, Platform, StatusBar } from 'react-native';

const Layout = (props) => {
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {props.children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: Platform.OS === 'android' 
        ? StatusBar.currentHeight 
        : 0,
    }
});
  
export default Layout;