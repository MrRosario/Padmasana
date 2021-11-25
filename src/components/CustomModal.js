import React, { useState } from "react";
import { Modal, StyleSheet, TouchableOpacity, Text, View, Platform, StatusBar } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Timer from "./Timer";

const CustomModal = ({ modalVisible, setModalVisible }) => {

    
  console.log("StatusBar: ", StatusBar.currentHeight);

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        presentationStyle="fullscreen"
        statusBarTranslucent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.content}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign 
                name="close" 
                size={30} 
                color="#ffffff" 
              />
            </TouchableOpacity>
          </View>

          <View style={styles.body}> 
              <Text style={styles.topTitle}>
                MEDITAÇÃO
              </Text>
              <Text style={styles.subTitle}>
                Começa em:
              </Text>

              <View style={styles.timerContainer}>
                <Timmer />
                <PlayPauseButton />
              </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

function Timmer(){
  return(
    <View style={styles.timer}>
      <Text style={styles.timeText}>
        00:10
      </Text>
    </View>
  )
}

function PlayPauseButton(){
  return(
    <TouchableOpacity style={styles.playButton}>
      <AntDesign 
        name="playcircleo" 
        size={70} 
        color="#ffffff" 
      />
      <AntDesign 
        name="pausecircleo" 
        size={70} 
        color="#ffffff"
      />
    </TouchableOpacity>
  )  
}

const PRIMARY_COLOR = '#FFFFFF';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    paddingHorizontal: 12,
    backgroundColor: "#FF5E13",
    height: '100%',
    width: '100%',
    paddingTop: Platform.OS === 'ios' 
      ? StatusBar.currentHeight + 36
      : StatusBar.currentHeight + 10
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  body: {
    justifyContent: "center",
    alignItems: "center"
  },
  topTitle: {
    color: PRIMARY_COLOR,
    marginTop: 50,
    marginBottom: 60,
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTitle: {
    color: PRIMARY_COLOR,
    fontWeight: '400',
    fontSize: 18
  },
  timer: {
    marginTop: 15,
    marginBottom: 50
  },
  timeText: {
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
    fontSize: 80
  },
  playButton: {
    height: 75,
    width: 75,
    borderWidth: 1,
    borderColor: '#000'
  }
});

export default CustomModal;