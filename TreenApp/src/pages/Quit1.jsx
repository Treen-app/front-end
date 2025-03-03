import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import UpBar from "../components/MyPage/UpBar";
import CheckBoxBtn from "../components/MyPage/CheckBoxBtn";

const Quit1 = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>서비스 탈퇴 안내사항</Text>
      <View style={[styles.rectangleParent, styles.frameChildLayout]}>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
        <View style={styles.parent}>
          <Text style={styles.text1}>
            탈퇴하시면 진짜 할거니? 하지마 우릴 버리지마
          </Text>
          <Text
            style={[styles.text2, styles.textTypo]}
          >{`[설정]>[회원정보수정]에서 가능하단다. 이래도 진짜 할거니?`}</Text>
          <Text style={[styles.text3, styles.textTypo]}>
            어쩌구 저쩌구 이래도 진짜할거니?
          </Text>
          <Text
            style={[styles.text4, styles.textTypo]}
          >{`진짜로할꺼야? 혹시 이용과정에서 불편한 점이 있다면, [설정]>[문의하기]에 문의주면 우리가 고칠게 정말 진심이야 우리가 바꿀게 날 버리지마`}</Text>
        </View>
      </View>
      <UpBar
        upBarMarginLeft={-161.5}
        arrow2={require("../../img/Mypage/Mypage/arrow-2.svg")}
        showArrowIcon
        arrowIconHeight="unset"
        arrowIconMaxHeight="100%"
        prop="회원 탈퇴"
        textMarginLeft={-36.5}
        upBarPosition="absolute"
        upBarTop={54}
        upBarLeft="50%"
        group187={require("../../img/Mypage/Mypage/group-187.svg")}
        showGroupIcon
      />
      <CheckBoxBtn
        property1="Default"
        prop="전부 삭제하고 탈퇴하겠습니다"
        showVectorIcon
      />
    </View>
  );
};

const styles = StyleSheet.create({
  frameChildLayout: {
    height: 164,
    width: 361,
    position: "absolute",
  },
  textTypo: {
    left: 0,
    textAlign: "left",
    color: "#333",
    lineHeight: 16,
    fontSize: 12,
    width: 341,
    fontFamily: "Pretendard Variable",
    position: "absolute",
  },
  text: {
    top: 120,
    left: 114,
    fontSize: 20,
    lineHeight: 30,
    fontWeight: "700",
    color: "#000",
    textAlign: "center",
    fontFamily: "Pretendard Variable",
    position: "absolute",
  },
  frameChild: {
    marginTop: -82,
    marginLeft: -180.5,
    top: "50%",
    left: "50%",
    borderRadius: 10,
    backgroundColor: "#f5f5f5",
  },
  text1: {
    top: 0,
    height: 16,
    textAlign: "left",
    color: "#333",
    lineHeight: 16,
    fontSize: 12,
    width: 341,
    left: 10,
    fontFamily: "Pretendard Variable",
    position: "absolute",
  },
  text2: {
    top: 28,
    height: 16,
  },
  text3: {
    top: 56,
    height: 17,
  },
  text4: {
    top: 85,
    height: 52,
  },
  parent: {
    top: 17,
    height: 137,
    width: 341,
    left: 10,
    position: "absolute",
  },
  rectangleParent: {
    top: 170,
    left: 16,
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default Quit1;
