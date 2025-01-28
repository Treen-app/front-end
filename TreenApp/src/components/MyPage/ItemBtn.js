import * as React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Group246 from "../../img/Mypage/group-246.svg";

const ItemBtn = () => {
  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.instanceChild, styles.childLayout]} />
      <View style={styles.rectangleGroup}>
        <View style={[styles.frameChild, styles.framePosition]} />
        <View style={styles.parent}>
          <Text style={styles.text}>겁나게 이쁜 후드티</Text>
          <Text style={[styles.a, styles.aTypo]}>
            5년 11개월 | A급 | 여자 | 원피스 | XL | 직거래
          </Text>
        </View>
        <View style={[styles.group, styles.groupLayout]}>
          <Text style={[styles.text1, styles.aTypo]}>다희다희님과의 거래</Text>
          <Group246
            style={[styles.frameItem, styles.groupLayout]}
            width={29}
            height={29}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  childLayout: {
    borderRadius: 10,
    position: "absolute",
  },
  framePosition: {
    top: 0,
    left: 0,
  },
  aTypo: {
    lineHeight: 20,
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    position: "absolute",
  },
  groupLayout: {
    height: 29,
    position: "absolute",
  },
  instanceChild: {
    marginTop: -61,
    marginLeft: -180.5,
    backgroundColor: "#f5f5f5",
    width: 361,
    left: "50%",
    top: "50%",
    borderRadius: 10,
    height: 122,
  },
  frameChild: {
    backgroundColor: "#e0e0e0",
    width: 98,
    height: 98,
    left: 0,
    borderRadius: 10,
    position: "absolute",
  },
  text: {
    marginTop: -19.5,
    marginLeft: -99,
    fontSize: 16,
    letterSpacing: 1,
    lineHeight: 38,
    fontWeight: "700",
    color: "#000",
    display: "flex",
    alignItems: "center",
    width: 126,
    height: 14,
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  a: {
    top: 19,
    fontSize: 11,
    color: "#666",
    left: 0,
  },
  parent: {
    top: 8,
    width: 198,
    height: 39,
    left: 120,
    position: "absolute",
  },
  text1: {
    top: 6,
    left: 36,
    fontSize: 12,
    fontWeight: "600",
    color: "#04ad45",
  },
  frameItem: {
    left: 0,
    top: 0,
  },
  group: {
    top: 70,
    width: 133,
    left: 120,
  },
  rectangleGroup: {
    top: 12,
    left: 12,
    width: 318,
    height: 99,
    position: "absolute",
  },
  rectangleParent: {
    alignSelf: "stretch",
    height: 122,
  },
});

export default ItemBtn;
