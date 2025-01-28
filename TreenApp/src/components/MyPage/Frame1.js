import * as React from "react";
import { StyleSheet, View } from "react-native";

const Frame1 = () => {
  return <View style={styles.frameView} />;
};

const styles = StyleSheet.create({
  frameView: {
    width: 2,
    height: 1,
    overflow: "hidden",
  },
});

export default Frame1;
