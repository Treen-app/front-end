import * as React from "react";
import { StyleProp, ViewStyle, Text, StyleSheet } from "react-native";

const Name1 = ({ style }) => {
  return <Text style={[styles.name, style]}>다희다희</Text>;
};

const styles = StyleSheet.create({
  name: {
    fontSize: 18,
    letterSpacing: 1,
    lineHeight: 38,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
  },
});

export default Name1;
