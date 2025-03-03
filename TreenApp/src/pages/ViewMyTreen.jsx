import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import UpBar from "../components/MyPage/UpBar";
import FrameComponent6 from "../components/MyPage/FrameComponent6";

const ViewMyTreen = () => {
  return (
    <View style={styles.view}>
      <UpBar
        upBarMarginLeft="unset"
        showArrowIcon={false}
        arrowIconMaxHeight="unset"
        prop="트린 조회"
        textMarginLeft={-36.5}
        upBarPosition="relative"
        upBarTop="unset"
        upBarLeft="unset"
        group187={require("../../img/Mypage/group-187.svg")}
        showGroupIcon
      />
      <View style={styles.instanceParent}>
        <FrameComponent6 prop="나의 보유 트린" />
        <FrameComponent6 prop="거래 예약에 사용한 트린 (사용불가)" />
        <FrameComponent6 prop="현재 사용가능 트린" />
        <View style={styles.parent}>
          <Text style={styles.text}> 모인 트린 보기</Text>
          <View style={styles.instanceGroup}>
            <View style={styles.groupParent}>
              <View style={styles.groupWrapper}>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupChild} />
                </View>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.text1}>교환 +10 트린을 얻었습니다!</Text>
              </View>
              <Text style={styles.text2}>2025. 01. 12</Text>
            </View>
            <View style={styles.groupParent}>
              <View style={styles.groupWrapper}>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupChild} />
                </View>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.text1}>교환 +10 트린을 얻었습니다!</Text>
              </View>
              <Text style={styles.text2}>2025. 01. 12</Text>
            </View>
            <View style={styles.groupParent}>
              <View style={styles.groupWrapper}>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupChild} />
                </View>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.text1}>교환 +10 트린을 얻었습니다!</Text>
              </View>
              <Text style={styles.text2}>2025. 01. 12</Text>
            </View>
            <View style={styles.groupParent}>
              <View style={styles.groupWrapper}>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupChild} />
                </View>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.text1}>교환 +10 트린을 얻었습니다!</Text>
              </View>
              <Text style={styles.text2}>2025. 01. 12</Text>
            </View>
            <View style={styles.groupParent}>
              <View style={styles.groupWrapper}>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupChild} />
                </View>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.text1}>교환 +10 트린을 얻었습니다!</Text>
              </View>
              <Text style={styles.text2}>2025. 01. 12</Text>
            </View>
            <View style={styles.groupParent}>
              <View style={styles.groupWrapper}>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupChild} />
                </View>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.text1}>교환 +10 트린을 얻었습니다!</Text>
              </View>
              <Text style={styles.text2}>2025. 01. 12</Text>
            </View>
            <View style={styles.groupParent}>
              <View style={styles.groupWrapper}>
                <View style={styles.groupWrapper}>
                  <View style={styles.groupChild} />
                </View>
              </View>
              <View style={styles.wrapper}>
                <Text style={styles.text1}>교환 +10 트린을 얻었습니다!</Text>
              </View>
              <Text style={styles.text2}>2025. 01. 12</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    lineHeight: 18,
    fontWeight: "600",
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
    height: 18,
    marginRight: 270,
  },
  groupChild: {
    position: "absolute",
    marginTop: -23,
    marginLeft: -180.5,
    top: "50%",
    left: "50%",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
    width: 361,
    height: 46,
  },
  groupWrapper: {
    position: "absolute",
    marginTop: -23,
    marginLeft: -180.5,
    top: "50%",
    left: "50%",
    width: 361,
    height: 46,
  },
  text1: {
    position: "absolute",
    marginLeft: -79.5,
    top: 0,
    left: "50%",
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Pretendard Variable",
    color: "#000",
    textAlign: "left",
  },
  wrapper: {
    position: "absolute",
    marginLeft: -158.5,
    top: 15,
    left: "50%",
    width: 159,
    height: 18,
  },
  text2: {
    position: "absolute",
    marginLeft: 81.5,
    top: 15,
    left: "50%",
    fontSize: 14,
    lineHeight: 18,
    fontFamily: "Pretendard Variable",
    color: "#afafaf",
    textAlign: "left",
  },
  groupParent: {
    alignSelf: "stretch",
    position: "relative",
    height: 46,
  },
  instanceGroup: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 14,
  },
  parent: {
    width: 361,
    height: 435,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 11,
  },
  instanceParent: {
    width: 361,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    gap: 22,
  },
  view: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 25,
    gap: 27,
  },
});

export default ViewMyTreen;
