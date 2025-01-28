import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Section = ({ prop, textFontWeight }) => {
  const text4Style = useMemo(() => {
    return {
      ...getStyleValue("fontWeight", textFontWeight),
    };
  }, [textFontWeight]);

  return (
    <View style={styles.section}>
      <View style={styles.sectionChild} />
      <Text style={[styles.text, text4Style]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#f0f0f0",
    position: "absolute",
  },
  text: {
    height: "67.39%",
    width: "28.24%",
    top: "17.39%",
    left: "6.62%",
    fontSize: 16,
    lineHeight: 38,
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  section: {
    alignSelf: "stretch",
    height: 46,
  },
});

export default Section;
