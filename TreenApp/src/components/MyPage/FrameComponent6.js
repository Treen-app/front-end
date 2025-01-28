import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import InfoBox from "./InfoBox";

const FrameComponent6 = ({ prop }) => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>{prop}</Text>
      <InfoBox prop="10,000" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    marginLeft: -172.5,
    top: 0,
    left: "50%",
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
  },
  parent: {
    alignSelf: "stretch",
    height: 69,
  },
});

export default FrameComponent6;
