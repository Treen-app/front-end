import * as React from "react";
import { StyleSheet, View, Pressable, Image, Text } from "react-native";
import Group239 from "../../img/Mypage/group-239.svg";

const Header = () => {
  return (
    <View style={[styles.header, styles.headerLayout]}>
      <View style={styles.headerChild} />
      <Group239 style={styles.headerItem} width={18} height={12} />
      <Image
        style={[styles.notificationButtonIcon, styles.headerLayout]}
        resizeMode="cover"
        source={require("../../img/Mypage/notification-button.png")}
      />
      <Text style={[styles.text, styles.trTypo]}>보유</Text>
      <Text style={[styles.tr, styles.trTypo]}>50,000 TR</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerLayout: {
    height: 21,
    position: "absolute",
  },
  trTypo: {
    textAlign: "left",
    color: "#06a358",
    fontFamily: "Pretendard Variable",
    fontWeight: "700",
    lineHeight: 20,
    fontSize: 16,
    top: 1,
    position: "absolute",
  },
  headerChild: {
    marginTop: -25.5,
    marginLeft: -197,
    top: "50%",
    left: "50%",
    backgroundColor: "#fff",
    width: 393,
    height: 50,
    position: "absolute",
  },
  headerItem: {
    top: 5,
    left: 314,
    position: "absolute",
  },
  notificationButtonIcon: {
    top: 0,
    left: 269,
    width: 21,
  },
  text: {
    left: 0,
  },
  tr: {
    left: 35,
    letterSpacing: 0,
    width: 85,
  },
  header: {
    top: 57,
    left: 30,
    width: 332,
  },
});

export default Header;
