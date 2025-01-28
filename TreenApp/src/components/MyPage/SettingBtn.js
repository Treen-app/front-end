import React, { useMemo } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Vector32 from "../../img/Mypage/vector-32.svg";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SettingBtn = ({
  prop,
  settingBtnTop,
  settingBtnPosition,
  settingBtnLeft,
}) => {
  const settingBtnStyle = useMemo(() => {
    return {
      ...getStyleValue("top", settingBtnTop),
      ...getStyleValue("position", settingBtnPosition),
      ...getStyleValue("left", settingBtnLeft),
    };
  }, [settingBtnTop, settingBtnPosition, settingBtnLeft]);

  return (
    <View style={[styles.settingBtn, settingBtnStyle]}>
      <View style={styles.settingBtnChild} />
      <View style={[styles.parent, styles.textPosition]}>
        <Text style={[styles.text, styles.textPosition]}>{prop}</Text>
        <Vector32 style={styles.groupChild} width={7} height={14} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    height: 31,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  settingBtnChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    backgroundColor: "#fff",
    position: "absolute",
  },
  text: {
    marginTop: -15.5,
    marginLeft: -170,
    fontSize: 16,
    lineHeight: 38,
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    display: "flex",
    alignItems: "center",
    width: 274,
  },
  groupChild: {
    top: 9,
    left: 333,
    position: "absolute",
  },
  parent: {
    marginTop: -12,
    marginLeft: -167.5,
    width: 340,
  },
  settingBtn: {
    top: 0,
    left: 0,
    width: 393,
    height: 50,
    position: "absolute",
  },
});

export default SettingBtn;
