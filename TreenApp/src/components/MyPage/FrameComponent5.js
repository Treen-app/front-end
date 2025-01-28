import React, { useMemo } from "react";
import { StyleSheet, View, Text } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FrameComponent5 = ({
  showFrameView,
  frameViewPosition,
  frameViewTop,
  frameViewLeft,
}) => {
  const frameView1Style = useMemo(() => {
    return {
      ...getStyleValue("position", frameViewPosition),
      ...getStyleValue("top", frameViewTop),
      ...getStyleValue("left", frameViewLeft),
    };
  }, [frameViewPosition, frameViewTop, frameViewLeft]);

  return (
    showFrameView && (
      <View style={[styles.rectangleParent, frameView1Style]}>
        <View style={styles.instanceChild} />
        <Text style={[styles.text, styles.textTypo]}>4:38</Text>
        <Text style={[styles.text1, styles.textTypo]}>
          인증번호 6자리를 입력해주세요
        </Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  textTypo: {
    color: "#a0a0a0",
    fontFamily: "Pretendard Variable",
    fontWeight: "500",
    lineHeight: 20,
    fontSize: 14,
    top: 11,
    position: "absolute",
  },
  instanceChild: {
    marginTop: -21,
    marginLeft: -168.5,
    top: "50%",
    left: "50%",
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    position: "absolute",
    height: 42,
    width: 337,
  },
  text: {
    left: 286,
    textAlign: "center",
  },
  text1: {
    left: 22,
    textAlign: "left",
  },
  rectangleParent: {
    height: 42,
    width: 337,
  },
});

export default FrameComponent5;
