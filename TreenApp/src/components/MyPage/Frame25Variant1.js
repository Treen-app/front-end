import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Line39 from "../../img/Mypage/line-39.svg";
import Line40 from "../../img/Mypage/line-40.svg";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Frame25Variant1 = ({
  frame25Variant3Top,
  frame25Variant3Left,
  prop,
  textLeft,
  textFontWeight,
  textColor,
  prop1,
  textLeft1,
  textFontWeight1,
  textColor1,
  lineIconMarginLeft,
}) => {
  const frame25Variant3Style = useMemo(() => {
    return {
      ...getStyleValue("top", frame25Variant3Top),
      ...getStyleValue("left", frame25Variant3Left),
    };
  }, [frame25Variant3Top, frame25Variant3Left]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("left", textLeft),
      ...getStyleValue("fontWeight", textFontWeight),
      ...getStyleValue("color", textColor),
    };
  }, [textLeft, textFontWeight, textColor]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("left", textLeft1),
      ...getStyleValue("fontWeight", textFontWeight1),
      ...getStyleValue("color", textColor1),
    };
  }, [textLeft1, textFontWeight1, textColor1]);

  const lineIconStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", lineIconMarginLeft),
    };
  }, [lineIconMarginLeft]);

  return (
    <View style={[styles.frame25variant3, frame25Variant3Style]}>
      <Line39
        style={[styles.frame25variant3Child, styles.frame25variant3Layout]}
        width={350}
      />
      <Text style={[styles.text, styles.textTypo, textStyle]}>{prop}</Text>
      <Text style={[styles.text1, styles.textTypo, text1Style]}>{prop1}</Text>
      <Line40
        style={[
          styles.frame25variant3Item,
          styles.frame25variant3Layout,
          lineIconStyle,
        ]}
        width={83}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frame25variant3Layout: {
    maxHeight: "100%",
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: "Pretendard Variable",
    fontSize: 16,
    position: "absolute",
  },
  frame25variant3Child: {
    top: 36,
    left: 0,
  },
  text: {
    top: 0,
    left: 68,
    letterSpacing: 0.1,
    fontWeight: "500",
    color: "#000",
  },
  text1: {
    top: 2,
    left: 239,
    fontWeight: "600",
    color: "#04ad45",
  },
  frame25variant3Item: {
    marginLeft: 43,
    top: 28,
    left: "50%",
  },
  frame25variant3: {
    top: 105,
    left: 22,
    height: 36,
    width: 350,
    position: "absolute",
  },
});

export default Frame25Variant1;
