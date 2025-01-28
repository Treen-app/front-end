import React, { useMemo } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Vector19 from "../../img/Mypage/vector-19.svg";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CheckBoxBtn = ({
  property1 = "Default",
  prop,
  showVectorIcon,
  checkBoxBtnPosition,
  checkBoxBtnMarginLeft,
  checkBoxBtnTop,
  checkBoxBtnLeft,
  checkBoxBtnWidth,
  checkBoxBtnAlignSelf,
}) => {
  const checkBoxBtnStyle = useMemo(() => {
    return {
      ...getStyleValue("position", checkBoxBtnPosition),
      ...getStyleValue("marginLeft", checkBoxBtnMarginLeft),
      ...getStyleValue("top", checkBoxBtnTop),
      ...getStyleValue("left", checkBoxBtnLeft),
      ...getStyleValue("width", checkBoxBtnWidth),
      ...getStyleValue("alignSelf", checkBoxBtnAlignSelf),
    };
  }, [
    checkBoxBtnPosition,
    checkBoxBtnMarginLeft,
    checkBoxBtnTop,
    checkBoxBtnLeft,
    checkBoxBtnWidth,
    checkBoxBtnAlignSelf,
  ]);

  return (
    <View
      style={[styles.checkboxBtn, styles.checkboxPosition, checkBoxBtnStyle]}
    >
      <View style={[styles.checkboxBtnChild, styles.checkboxPosition]} />
      {showVectorIcon && (
        <Vector19 style={styles.checkboxBtnItem} width={14} height={11} />
      )}
      <Text style={styles.text}>{prop}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkboxPosition: {
    height: 46,
    width: 361,
    left: "50%",
    marginLeft: -180.5,
    position: "absolute",
  },
  checkboxBtnChild: {
    marginTop: -23,
    top: "50%",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  checkboxBtnItem: {
    top: 18,
    left: 34,
    position: "absolute",
  },
  text: {
    top: 14,
    left: 64,
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    position: "absolute",
  },
  checkboxBtn: {
    top: 347,
  },
});

export default CheckBoxBtn;
