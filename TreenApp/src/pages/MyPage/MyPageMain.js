import * as React from "react";
import { StyleSheet, View } from "react-native";
import Section from "../../components/MyPage/Section";
import SettingBtn from "../../components/MyPage/SettingBtn";
import UpBar from "../../components/MyPage/UpBar";

const MyPageMain = () => {
  return (
    <View style={styles.view}>
      <View style={styles.sectionParent}>
        <Section prop="마이페이지" />
        <View style={styles.settingBtnParent}>
          <SettingBtn prop="프로필 설정" />
          <SettingBtn
            prop="거래 내역"
            settingBtnTop={50}
            settingBtnPosition="absolute"
          />
          <SettingBtn
            prop="나무성장 기준"
            settingBtnTop={100}
            settingBtnPosition="absolute"
          />
          <SettingBtn
            prop="회원정보 수정"
            settingBtnTop={150}
            settingBtnPosition="absolute"
          />
          <SettingBtn
            prop="비밀번호 재설정"
            settingBtnTop={200}
            settingBtnPosition="absolute"
          />
          <SettingBtn
            prop="스크랩 목록"
            settingBtnTop={250}
            settingBtnPosition="absolute"
          />
          <SettingBtn
            prop="트린 조회"
            settingBtnTop={300}
            settingBtnPosition="absolute"
          />
        </View>
        <Section prop="알림" textFontWeight="unset" />
        <SettingBtn
          prop="알림 관리"
          settingBtnTop="unset"
          settingBtnPosition="relative"
          settingBtnLeft="unset"
        />
        <Section prop="고객 지원" textFontWeight="500" />
        <SettingBtn
          prop="문의하기 (이용시 불편 사항 및 제안)"
          settingBtnTop="unset"
          settingBtnPosition="relative"
          settingBtnLeft="unset"
        />
        <Section prop="계정" textFontWeight="unset" />
        <SettingBtn
          prop="로그아웃"
          settingBtnTop="unset"
          settingBtnPosition="relative"
          settingBtnLeft="unset"
        />
        <SettingBtn
          prop="회원 탈퇴"
          settingBtnTop="unset"
          settingBtnPosition="relative"
          settingBtnLeft="unset"
        />
      </View>
      <UpBar
        upBarMarginLeft={-161.5}
        arrow2={require("../../img/Mypage/arrow-2.svg")}
        showArrowIcon
        arrowIconHeight="unset"
        arrowIconMaxHeight="100%"
        prop="설정"
        textMarginLeft={-17.5}
        upBarPosition="absolute"
        upBarTop={54}
        upBarLeft="50%"
        showGroupIcon={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  settingBtnParent: {
    alignSelf: "stretch",
    height: 350,
  },
  sectionParent: {
    position: "absolute",
    top: 107,
    left: 0,
    width: 393,
  },
  view: {
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 852,
    overflow: "hidden",
  },
});

export default MyPageMain;
