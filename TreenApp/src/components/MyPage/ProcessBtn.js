import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProcessBtn = ({
  property1 = "Default",
  prop,
  processBtnPosition,
  processBtnMarginLeft,
  processBtnTop,
  processBtnLeft,
}) => {
  const processBtnStyle = useMemo(() => {
    return {
      ...getStyleValue("position", processBtnPosition),
      ...getStyleValue("marginLeft", processBtnMarginLeft),
      ...getStyleValue("top", processBtnTop),
      ...getStyleValue("left", processBtnLeft),
    };
  }, [processBtnPosition, processBtnMarginLeft, processBtnTop, processBtnLeft]);

  return (
    <View style={[styles.processLayout, processBtnStyle]}>
      <View style={[styles.processBtnChild, styles.textPosition]} />
      <Text style={[styles.text, styles.textPosition]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  processBtnChild: {
    marginTop: -25,
    marginLeft: -168.5,
    top: "50%",
    borderRadius: 10,
    backgroundColor: "#8d8d8d",
    height: 50,
    width: 337,
  },
  text: {
    marginLeft: -128.5,
    top: 15,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#fff",
    textAlign: "center",
    width: 256,
  },
  processLayout: {
    height: 50,
    width: 337,
  },
});

export default ProcessBtn;
