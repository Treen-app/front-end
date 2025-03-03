import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import UpBar from "../components/MyPage/UpBar";
import FrameComponent7 from "../components/MyPage/FrameComponent7";
import FrameComponent8 from "../components/MyPage/FrameComponent8";
import SmallTitle from "../components/MyPage/SmallTitle";
import FrameComponent from "../components/MyPage/FrameComponent";

const Notification = () => {
  return (
    <View style={styles.view}>
      <UpBar
        showArrowIcon={false}
        prop="알림"
        group187={require("../../img/Mypage/group-187.svg")}
        showGroupIcon
      />
      <View style={[styles.frameParent, styles.parentLayout]}>
        <FrameComponent7 />
        <FrameComponent8 />
        <View style={styles.parent}>
          <SmallTitle prop="어제" />
          <View style={[styles.instanceParent, styles.parentLayout]}>
            <FrameComponent
              frameViewAlignSelf="stretch"
              frameViewPosition="relative"
              frameViewMarginLeft="unset"
              frameViewTop="unset"
              frameViewLeft="unset"
              frameViewWidth="unset"
              groupViewWidth={232}
              textMarginLeft={-116}
              textColor="unset"
              showText={false}
            />
            <View style={styles.groupParent}>
              <View style={[styles.groupWrapper, styles.wrapperGroupPosition]}>
                <View
                  style={[styles.groupWrapper, styles.wrapperGroupPosition]}
                >
                  <View
                    style={[styles.groupChild, styles.wrapperGroupPosition]}
                  />
                </View>
              </View>
              <View style={[styles.wrapper, styles.wrapperGroupPosition]}>
                <Text style={[styles.text, styles.textTypo]}>
                  교환 +10 트린을 얻었습니다!
                </Text>
              </View>
              <Text style={[styles.text1, styles.textTypo]}>2025. 01. 12</Text>
            </View>
          </View>
        </View>
        <View style={styles.parent}>
          <SmallTitle prop="최근" />
          <View style={[styles.instanceParent, styles.parentLayout]}>
            <FrameComponent showText={false} />
            <View style={styles.groupParent}>
              <View style={[styles.groupWrapper, styles.wrapperGroupPosition]}>
                <View
                  style={[styles.groupWrapper, styles.wrapperGroupPosition]}
                >
                  <View
                    style={[styles.groupChild, styles.wrapperGroupPosition]}
                  />
                </View>
              </View>
              <View style={[styles.wrapper, styles.wrapperGroupPosition]}>
                <Text style={[styles.text, styles.textTypo]}>
                  교환 +10 트린을 얻었습니다!
                </Text>
              </View>
              <Text style={[styles.text1, styles.textTypo]}>2025. 01. 12</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentLayout: {
    width: 361,
    position: "absolute",
  },
  wrapperGroupPosition: {
    left: "50%",
    position: "absolute",
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
    top: "50%",
    marginLeft: -180.5,
    marginTop: -23,
    left: "50%",
    height: 46,
    width: 361,
  },
  groupWrapper: {
    top: "50%",
    marginLeft: -180.5,
    marginTop: -23,
    left: "50%",
    height: 46,
    width: 361,
  },
  text: {
    marginLeft: -79.5,
    top: 0,
    color: "#000",
  },
  wrapper: {
    marginLeft: -158.5,
    width: 159,
    height: 18,
    top: 15,
  },
  text1: {
    marginLeft: 81.5,
    color: "#afafaf",
    display: "none",
    top: 15,
  },
  groupParent: {
    height: 46,
    alignSelf: "stretch",
  },
  instanceParent: {
    top: 28,
    left: 0,
    gap: 10,
  },
  parent: {
    height: 130,
    alignSelf: "stretch",
  },
  frameParent: {
    top: 121,
    left: 16,
    gap: 25,
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Notification;
