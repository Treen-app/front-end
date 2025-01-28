import * as React from "react";
import { Text, StyleSheet } from "react-native";

const SmallTitle = ({ prop }) => {
  return <Text style={styles.text}>{prop}</Text>;
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 0,
    left: 0,
    fontSize: 16,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
  },
});

export default SmallTitle;
