import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const InfoBox = ({ prop, textMarginLeft }) => {
  const text5Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", textMarginLeft),
    };
  }, [textMarginLeft]);

  return (
    <View style={[styles.infobox, styles.infoboxLayout]}>
      <View style={[styles.infoboxChild, styles.textPosition]} />
      <Text style={[styles.text, styles.textPosition, text5Style]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  infoboxLayout: {
    height: 46,
    width: 361,
  },
  textPosition: {
    left: "50%",
    position: "absolute",
  },
  infoboxChild: {
    marginTop: -23,
    marginLeft: -180.5,
    top: "50%",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    height: 46,
    width: 361,
  },
  text: {
    marginLeft: -22.5,
    top: 14,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: "Pretendard Variable",
    color: "#04ad45",
    textAlign: "center",
  },
  infobox: {
    top: 23,
    left: 0,
    position: "absolute",
    height: 46,
    width: 361,
  },
});

export default InfoBox;
