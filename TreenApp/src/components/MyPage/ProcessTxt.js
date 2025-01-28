import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProcessTxt = ({
  prop,
  prop1,
  processTxtMarginRight,
  processTxtMarginLeft,
}) => {
  const processTxtStyle = useMemo(() => {
    return {
      ...getStyleValue("marginRight", processTxtMarginRight),
      ...getStyleValue("marginLeft", processTxtMarginLeft),
    };
  }, [processTxtMarginRight, processTxtMarginLeft]);

  return (
    <View style={[styles.processTxt, processTxtStyle]}>
      <Text style={styles.text}>{prop}</Text>
      <Text style={styles.text1}>{prop1}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: 29,
    left: 0,
    fontSize: 22,
    letterSpacing: 1,
    lineHeight: 20,
    fontWeight: "700",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
  },
  text1: {
    position: "absolute",
    bottom: 29,
    left: 2,
    fontSize: 14,
    lineHeight: 20,
    fontFamily: "Pretendard Variable",
    color: "#8d8d8d",
    textAlign: "left",
  },
  processTxt: {
    width: 279,
    height: 49,
    marginRight: 44,
  },
});

export default ProcessTxt;
