import * as React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import Maskgroup from "../../img/Mypage/mask-group.svg";

const GroupComponent = () => {
  return (
    <View style={styles.parent}>
      <Text style={styles.text}>다히</Text>
      <Text style={[styles.follower, styles.followerTypo]}>follower</Text>
      <Text style={[styles.following, styles.followerTypo]}>following</Text>
      <Text style={[styles.text1, styles.textTypo]}>510</Text>
      <Text style={[styles.text2, styles.textTypo]}>340</Text>
      <Maskgroup
        style={[styles.maskGroupIcon, styles.maskGroupIconPosition]}
        width={25}
        height={100}
      />
      <View style={styles.followbtn}>
        <View style={[styles.followbtnChild, styles.maskGroupIconPosition]} />
        <Text style={styles.text3}>팔로우</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  followerTypo: {
    color: "#999",
    top: "44.71%",
    fontWeight: "500",
    fontSize: 14,
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  textTypo: {
    fontSize: 16,
    top: "68.24%",
    width: "11.24%",
    height: "30.59%",
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: "#000",
    fontFamily: "Pretendard Variable",
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    position: "absolute",
  },
  maskGroupIconPosition: {
    bottom: "0%",
    right: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  text: {
    height: "29.41%",
    width: "32.84%",
    fontSize: 20,
    alignItems: "center",
    display: "flex",
    textAlign: "left",
    color: "#000",
    fontFamily: "Pretendard Variable",
    fontWeight: "700",
    lineHeight: 24,
    letterSpacing: 1,
    top: "4.71%",
    left: "0%",
    position: "absolute",
  },
  follower: {
    left: "0%",
  },
  following: {
    left: "26.63%",
  },
  text1: {
    left: "0%",
  },
  text2: {
    left: "26.63%",
  },
  maskGroupIcon: {
    left: "74.85%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  followbtnChild: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#04ad45",
    left: "0%",
  },
  text3: {
    height: "52.31%",
    width: "74.53%",
    top: "11.54%",
    left: "13.33%",
    lineHeight: 20,
    color: "#fff",
    textAlign: "center",
    fontWeight: "500",
    fontSize: 14,
    fontFamily: "Pretendard Variable",
    position: "absolute",
  },
  followbtn: {
    width: "22.19%",
    right: "63.02%",
    bottom: "64.71%",
    left: "14.79%",
    display: "none",
    height: "30.59%",
    top: "4.71%",
    position: "absolute",
  },
  parent: {
    marginLeft: -169.5,
    top: 108,
    left: "50%",
    width: 338,
    height: 85,
    position: "absolute",
  },
});

export default GroupComponent;
