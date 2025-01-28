import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Frame75 from "../../img/Mypage/frame-75.svg";

const FrameComponent4 = ({ prop, prop1 }) => {
  return (
    <View style={styles.parent}>
      <Text style={[styles.text, styles.textPosition]}>{prop}</Text>
      <Text style={[styles.text1, styles.textPosition]}>{prop1}</Text>
      <Frame75 style={styles.instanceChild} width={207} height={14} />
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    height: 18,
    width: 26,
    color: "#a0a0a0",
    fontFamily: "Pretendard Variable",
    fontWeight: "500",
    fontSize: 12,
    left: "50%",
    top: "50%",
    marginTop: -1,
    position: "absolute",
  },
  text: {
    marginLeft: -100.5,
    textAlign: "left",
  },
  text1: {
    marginLeft: 78.5,
    textAlign: "right",
  },
  instanceChild: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  parent: {
    width: 209,
    height: 34,
  },
});

export default FrameComponent4;
