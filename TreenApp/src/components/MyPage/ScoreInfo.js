import * as React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { ProgressBar } from "react-native-paper";

const ScoreInfo = () => {
  return (
    <View style={styles.scoreInfo}>
      <ImageBackground
        style={styles.image19Icon}
        resizeMode="cover"
        source={require("../../img/Mypage/image19.png")}
      />
      <View style={styles.frame}>
        <Text style={styles.level}>LV.4 나무묘목</Text>
        <View style={styles.progress}>
          <Text style={[styles.text, styles.textTypo]}>0</Text>
          <Text style={[styles.text1, styles.textTypo]}>10,000</Text>
          <View style={[styles.progressBar, styles.progressBarLayout]}>
            <ProgressBar
              style={styles.progressBarLayout}
              progress={0.64}
              color="#04ad45"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  progressbar: {
    height: 0,
    width: 245,
  },
  textTypo: {
    color: "#999",
    lineHeight: 10,
    letterSpacing: 1,
    fontSize: 10,
    top: "50%",
    fontFamily: "Pretendard Variable",
    fontWeight: "600",
    left: "50%",
    position: "absolute",
  },
  progressBarLayout: {
    height: 0,
    width: 245,
  },
  image19Icon: {
    width: 69,
    height: 61,
  },
  level: {
    fontSize: 16,
    lineHeight: 18,
    color: "#04ad45",
    textAlign: "left",
    fontFamily: "Pretendard Variable",
    fontWeight: "600",
  },
  text: {
    marginTop: -2.5,
    marginLeft: -123.5,
    textAlign: "left",
  },
  text1: {
    marginTop: -1.5,
    marginLeft: 88.5,
    textAlign: "right",
  },
  progressBar: {
    top: 0,
    left: 2,
    position: "absolute",
    height: 0,
    width: 245,
  },
  progress: {
    height: 17,
    width: 247,
  },
  frame: {
    overflow: "hidden",
    gap: 28,
    width: 247,
  },
  scoreInfo: {
    marginLeft: -188.5,
    top: 222,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    width: 376,
    height: 90,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 17,
    paddingVertical: 15,
    gap: 23,
    left: "50%",
    position: "absolute",
  },
});

export default ScoreInfo;
