import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent = ({
  frameViewAlignSelf,
  frameViewPosition,
  frameViewMarginLeft,
  frameViewTop,
  frameViewLeft,
  frameViewWidth,
  groupViewWidth,
  textMarginLeft,
  textColor,
  showText,
}) => {
  const frameViewStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", frameViewAlignSelf),
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("marginLeft", frameViewMarginLeft),
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
      ...getStyleValue("width", frameViewWidth),
    };
  }, [
    frameViewAlignSelf,
    frameViewPosition,
    frameViewMarginLeft,
    frameViewTop,
    frameViewLeft,
    frameViewWidth,
  ]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("width", groupViewWidth),
    };
  }, [groupViewWidth]);

  const text3Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", textMarginLeft),
      ...getStyleValue("color", textColor),
    };
  }, [textMarginLeft, textColor]);

  return (
    <View style={[styles.groupParent, frameViewStyle]}>
      <View style={styles.groupPosition}>
        <View style={styles.groupPosition}>
          <View style={[styles.groupChild, styles.groupPosition]} />
        </View>
      </View>
      <View style={[styles.wrapper, groupViewStyle]}>
        <Text style={[styles.text, styles.textTypo, text3Style]}>
          <Text style={styles.text1}>{`다희다희 `}</Text>
          <Text style={styles.text2}>님이 당신의 게시물을 좋아합니다</Text>
        </Text>
      </View>
      {showText && (
        <Text style={[styles.text3, styles.textTypo]}>2025. 01. 12</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  groupPosition: {
    width: 361,
    top: "50%",
    marginLeft: -180.5,
    marginTop: -23,
    left: "50%",
    position: "absolute",
    height: 46,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    lineHeight: 18,
    fontSize: 14,
    left: "50%",
    position: "absolute",
  },
  groupChild: {
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  text1: {
    color: "#04ad45",
  },
  text2: {
    color: "#000",
  },
  text: {
    marginLeft: -116,
    top: 0,
  },
  wrapper: {
    marginLeft: -158.5,
    width: 232,
    height: 18,
    top: 15,
    left: "50%",
    position: "absolute",
  },
  text3: {
    marginLeft: 81.5,
    color: "#afafaf",
    display: "none",
    top: 15,
  },
  groupParent: {
    alignSelf: "stretch",
    height: 46,
  },
});

export default FrameComponent;
