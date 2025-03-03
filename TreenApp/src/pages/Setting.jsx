import React, { useState } from "react";
import { View, StyleSheet, Pressable, Image, Text } from "react-native";
import { Toggle } from "@ui-kitten/components";
import Group187 from "../../img/Mypage/group-187.svg";
import Arrow27 from "../../img/Mypage/arrow-27.svg";

const Setting = () => {
  const [component4checked, setComponent4checked] = useState(undefined);
  const [component41checked, setComponent41checked] = useState(undefined);

  return (
    <View style={styles.view}>
      <View style={styles.upBar}>
        <View style={styles.upBarChild} />
        <Group187 style={styles.upBarItem} width={14} height={14} />
        <Arrow27 style={styles.upBarInner} width={16} />
        <Text style={styles.text}>알림설정</Text>
      </View>
      <View style={styles.instanceParent}>
        <View style={styles.parent}>
          <Text style={[styles.text1, styles.textPosition]}>
            앱 알람 수신 설정
          </Text>
          <Toggle
            style={styles.component4}
            status="success"
            checked={component4checked}
            onChange={() => setComponent4checked(!component4checked)}
          />
        </View>
        <View style={styles.parent}>
          <Text style={[styles.text2, styles.textPosition]}>
            마케팅 정보 수신 설정
          </Text>
          <Toggle
            style={styles.component4}
            status="success"
            checked={component41checked}
            onChange={() => setComponent41checked(!component41checked)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textPosition: {
    height: 16,
    width: 248,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: 16,
    marginLeft: -170,
    marginTop: -14,
    color: "#000",
    fontFamily: "Pretendard Variable",
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  upBarChild: {
    marginTop: -25,
    marginLeft: -196.5,
    width: 393,
    height: 50,
    top: "50%",
    left: "50%",
    position: "absolute",
    backgroundColor: "#fff",
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
    marginLeft: -34.5,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: "500",
    textAlign: "center",
    color: "#000",
    fontFamily: "Pretendard Variable",
    lineHeight: 38,
    top: "50%",
    left: "50%",
    position: "absolute",
  },
  upBar: {
    marginLeft: -161.5,
    top: 54,
    width: 323,
    height: 38,
    left: "50%",
    position: "absolute",
  },
  text1: {
    lineHeight: 38,
    height: 16,
    width: 248,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    fontSize: 16,
    marginLeft: -170,
    marginTop: -14,
  },
  component4: {
    top: 0,
    left: 292,
    width: 48,
    height: 28,
    position: "absolute",
  },
  parent: {
    alignSelf: "stretch",
    height: 28,
  },
  text2: {
    lineHeight: 16,
  },
  instanceParent: {
    top: 139,
    left: 29,
    width: 340,
    gap: 23,
    position: "absolute",
  },
  view: {
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
});

export default Setting;
