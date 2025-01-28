import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View, Text } from "react-native";

const Frame2 = ({ style }) => {
  return (
    <View style={[styles.instanceChildLayout, style]}>
      <View style={[styles.instanceChild, styles.textPosition]} />
      <Text style={[styles.text, styles.textPosition]}>팔로잉</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  instanceChild: {
    marginTop: -21.5,
    marginLeft: -39.5,
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    height: 43,
    width: 79,
  },
  text: {
    marginTop: -18.5,
    marginLeft: -21.5,
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 38,
    fontWeight: "500",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "center",
  },
  instanceChildLayout: {
    height: 43,
    width: 79,
  },
});

export default Frame2;
