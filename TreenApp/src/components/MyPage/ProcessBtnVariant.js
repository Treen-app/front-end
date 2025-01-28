import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ProcessBtnVariant = ({
  prop,
  processBtnVariant3Position,
  processBtnVariant3Top,
  processBtnVariant3Left,
}) => {
  const processBtnVariant3Style = useMemo(() => {
    return {
      ...getStyleValue("position", processBtnVariant3Position),
      ...getStyleValue("top", processBtnVariant3Top),
      ...getStyleValue("left", processBtnVariant3Left),
    };
  }, [
    processBtnVariant3Position,
    processBtnVariant3Top,
    processBtnVariant3Left,
  ]);

  return (
    <View
      style={[
        styles.processBtnvariant3,
        styles.processLayout,
        processBtnVariant3Style,
      ]}
    >
      <View style={[styles.processBtnvariant3Child, styles.textPosition]} />
      <Text style={[styles.text, styles.textPosition]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  processLayout: {
    height: 50,
    width: 337,
  },
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  processBtnvariant3Child: {
    marginTop: -25,
    marginLeft: -168.5,
    top: "50%",
    borderRadius: 10,
    backgroundColor: "#04ad45",
    height: 50,
    width: 337,
  },
  text: {
    marginLeft: -130.5,
    top: 15,
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#fff",
    textAlign: "center",
    width: 260,
  },
  processBtnvariant3: {
    top: 335,
    left: 28,
    position: "absolute",
    height: 50,
    width: 337,
  },
});

export default ProcessBtnVariant;
