import * as React from "react";
import { StyleSheet, View } from "react-native";

const Frame25Variant = () => {
  return (
    <View style={styles.frame25variant4}>
      <View style={styles.frame25variant4Child} />
      <View style={styles.frame25variant4Item} />
    </View>
  );
};

const styles = StyleSheet.create({
  frame25variant4Child: {
    display: "none",
    width: 350,
  },
  frame25variant4Item: {
    width: 287,
    display: "none",
  },
  frame25variant4: {
    position: "absolute",
    marginLeft: -174.5,
    top: 335,
    left: "50%",
    height: 36,
    width: 350,
  },
});

export default Frame25Variant;
