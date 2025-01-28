import React, { useMemo } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageSourcePropType,
} from "react-native";
import Group187 from "../../img/Mypage/group-187.svg";
import Arrow22 from "../../img/Mypage/arrow-22.svg";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UpBar = ({
  upBarMarginLeft,
  arrow2,
  showArrowIcon,
  arrowIconHeight,
  arrowIconMaxHeight,
  prop,
  textMarginLeft,
  upBarPosition,
  upBarTop,
  upBarLeft,
  group187,
  showGroupIcon,
}) => {
  const upBarStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", upBarMarginLeft),
      ...getStyleValue("position", upBarPosition),
      ...getStyleValue("top", upBarTop),
      ...getStyleValue("left", upBarLeft),
    };
  }, [upBarMarginLeft, upBarPosition, upBarTop, upBarLeft]);

  const arrowIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", arrowIconHeight),
      ...getStyleValue("maxHeight", arrowIconMaxHeight),
    };
  }, [arrowIconHeight, arrowIconMaxHeight]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", textMarginLeft),
    };
  }, [textMarginLeft]);

  return (
    <View style={[styles.upBar, upBarStyle]}>
      <View style={[styles.upBarChild, styles.textPosition]} />
      {showGroupIcon && (
        <Group187 style={styles.upBarItem} width={14} height={14} />
      )}
      {showArrowIcon && (
        <Arrow22 style={[styles.upBarInner, arrowIconStyle]} width={16} />
      )}
      <Text style={[styles.text, styles.textPosition, text2Style]}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  upBarChild: {
    marginTop: -25,
    marginLeft: -196.5,
    backgroundColor: "#fff",
    width: 393,
    height: 50,
  },
  upBarItem: {
    top: 12,
    left: 309,
    position: "absolute",
  },
  upBarInner: {
    top: 18,
    left: 0,
    height: 0,
    display: "none",
    position: "absolute",
  },
  text: {
    marginTop: -19,
    marginLeft: -17.5,
    fontSize: 18,
    letterSpacing: 1,
    lineHeight: 38,
    fontWeight: "500",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "center",
  },
  upBar: {
    marginLeft: -160.5,
    top: 54,
    width: 323,
    height: 38,
    left: "50%",
    position: "absolute",
  },
});

export default UpBar;
