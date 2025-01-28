import * as React from "react";
import { Text, StyleSheet } from "react-native";

const Component10 = () => {
  return <Text style={styles.text}>전달하기</Text>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#fff",
    textAlign: "center",
  },
});

export default Component10;
