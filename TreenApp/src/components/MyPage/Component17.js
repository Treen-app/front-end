import * as React from "react";
import { StyleSheet, View, Text } from "react-native";

const Component17 = () => {
  return (
    <View style={styles.component2}>
      <View style={[styles.greenbtn, styles.greenbtnPosition]}>
        <View style={[styles.greenbtnChild, styles.childPosition]} />
        <Text style={[styles.text, styles.textTypo]}>문자 전송</Text>
      </View>
      <View style={[styles.inputbox, styles.greenbtnPosition]}>
        <View style={[styles.inputboxChild, styles.childPosition]} />
        <Text style={[styles.text1, styles.textTypo]}>
          전화번호를 입력해주세요
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  greenbtnPosition: {
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  childPosition: {
    borderRadius: 10,
    left: "50%",
    top: "50%",
    marginTop: -21,
    position: "absolute",
    height: 42,
  },
  textTypo: {
    fontFamily: "Pretendard Variable",
    lineHeight: 20,
    fontSize: 14,
    position: "absolute",
  },
  greenbtnChild: {
    marginLeft: -36.5,
    backgroundColor: "#04ad45",
    width: 73,
  },
  text: {
    top: 10,
    left: 11,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
  },
  greenbtn: {
    width: "21.66%",
    right: "0%",
    left: "78.34%",
  },
  inputboxChild: {
    marginLeft: -127,
    backgroundColor: "#f0f0f0",
    width: 254,
  },
  text1: {
    top: 11,
    left: 20,
    fontWeight: "500",
    color: "#a0a0a0",
    textAlign: "left",
  },
  inputbox: {
    width: "75.37%",
    right: "24.63%",
    left: "0%",
  },
  component2: {
    width: 337,
    height: 42,
  },
});

export default Component17;
