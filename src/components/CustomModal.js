import React, { useState } from "react";
import {
  Modal,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
  View,
  Platform,
  StatusBar,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useCountdown } from "../hooks/useCountdown";

const CustomModal = (props) => {
  const {
    modalVisible,
    setModalVisible,
    selectedModal,
    durMin,
    durSec,
    readyMin,
    readySec,
  } = props;

  const [isPlaying, setIsPlaying] = useState(false);
  const [screenOn, setScreenOn] = useState(false);
  const [enableClose, setEnableClose] = useState(false);
  const [isTimerOn, setIsTimerOn] = useState(true);

  // console.log(`Preparar-se - Min: ${readyMin}, Sec: ${readySec}`);
  // console.log(`Duração - Min: ${durMin}, Sec: ${durSec}`);

  const getReadyCountDown = () => {};

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
            <Pressable
              disabled={enableClose}
              onPress={() => setModalVisible(false)}
            >
              <AntDesign name="close" size={30} color="#ffffff" />
            </Pressable>
          </View>

          <View style={styles.body}>
            <Text style={styles.topTitle}>MEDITAÇÃO</Text>
            <Text style={styles.subTitle}>Sua meditação começa em:</Text>

            <View style={styles.timerContainer}>
              <Timmer
                durMin={parseInt(durMin)}
                durSec={parseInt(durSec)}
                readyMin={parseInt(readyMin)}
                readySec={parseInt(readySec)}
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setEnableClose={setEnableClose}
              />
              <PlayPauseButton
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                setEnableClose={setEnableClose}
                enableClose={enableClose}
              />

              <Pressable
                style={[styles.activateScreen]}
                onPress={() => setScreenOn(!screenOn)}
              >
                <Text style={styles.activateScreenText}>
                  Manter a tela ligada
                </Text>
                <View
                  style={[
                    styles.screenOnBtn,
                    screenOn && styles.screenOnBtnActivated,
                  ]}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

function Timmer({
  durMin,
  durSec,
  readyMin,
  readySec,
  isPlaying,
  setIsPlaying,
  setEnableClose,
}) {
  const { minutes, seconds } = useCountdown({
    isPlaying,
    readyMin,
    readySec,
    durMin,
    durSec,
    setIsPlaying,
    setEnableClose,
  });

  console.log(`Timer: ${minutes}:${seconds}`);

  const CURRENT_MIN = minutes < 10 ? `0${minutes}` : minutes;
  const CURRENT_SEC = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <View style={styles.timer}>
      <Text style={styles.timeText}>
        {CURRENT_MIN}:{CURRENT_SEC}
      </Text>
    </View>
  );
}

function PlayPauseButton({
  isPlaying,
  setIsPlaying,
  setEnableClose,
  enableClose,
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        setIsPlaying(!isPlaying);
        setEnableClose(!enableClose);
      }}
      style={styles.playButton}
    >
      {isPlaying ? (
        <AntDesign name="pausecircleo" size={70} color="#ffffff" />
      ) : (
        <AntDesign name="playcircleo" size={70} color="#ffffff" />
      )}
    </TouchableOpacity>
  );
}

const PRIMARY_COLOR = "#FFFFFF";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    paddingHorizontal: 12,
    backgroundColor: "#FF5E13",
    height: "100%",
    width: "100%",
    paddingTop:
      Platform.OS === "ios"
        ? StatusBar.currentHeight + 36
        : StatusBar.currentHeight + 10,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  body: {
    justifyContent: "center",
    alignItems: "center",
  },
  topTitle: {
    color: PRIMARY_COLOR,
    marginTop: 50,
    marginBottom: 10,
    fontWeight: "bold",
    fontSize: 28,
  },
  subTitle: {
    color: PRIMARY_COLOR,
    fontWeight: "400",
    fontSize: 16,
  },
  timer: {
    marginTop: 15,
    marginBottom: 50,
  },
  timeText: {
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    fontSize: 100,
  },
  playButton: {
    height: 75,
    width: 75,
    alignSelf: "center",
  },
  activateScreen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  activateScreenText: {
    color: PRIMARY_COLOR,
    fontWeight: "400",
    fontSize: 16,
  },
  screenOnBtn: {
    height: 16,
    width: 16,
    borderColor: PRIMARY_COLOR,
    borderWidth: 2,
    borderRadius: 50,
    marginLeft: 10,
  },
  screenOnBtnActivated: {
    backgroundColor: "#000",
  },
});

export default CustomModal;
