import * as React from "react";
import { StyleProp, ViewStyle, StyleSheet, View } from "react-native";

const Rectangle = ({ style }) => {
  return <View style={[styles.rectangleView, style]} />;
};

const styles = StyleSheet.create({
  rectangleView: {
    backgroundColor: "#fff",
    width: 393,
    height: 77,
  },
});

export default Rectangle;
