import React, { useMemo } from "react";
import { StyleSheet, View, Image } from "react-native";
import Vector26 from "../../img/Mypage/vector-26.svg";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RectangleComponent1 = ({
  showVectorIcon,
  rectangleViewPosition,
  rectangleViewHeight,
  rectangleViewTop,
  rectangleViewRight,
  rectangleViewBottom,
  rectangleViewLeft,
  rectangleViewBorderRadius,
  rectangleViewBackgroundColor,
}) => {
  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("position", rectangleViewPosition),
      ...getStyleValue("height", rectangleViewHeight),
      ...getStyleValue("top", rectangleViewTop),
      ...getStyleValue("right", rectangleViewRight),
      ...getStyleValue("bottom", rectangleViewBottom),
      ...getStyleValue("left", rectangleViewLeft),
      ...getStyleValue("borderRadius", rectangleViewBorderRadius),
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
    };
  }, [
    rectangleViewPosition,
    rectangleViewHeight,
    rectangleViewTop,
    rectangleViewRight,
    rectangleViewBottom,
    rectangleViewLeft,
    rectangleViewBorderRadius,
    rectangleViewBackgroundColor,
  ]);

  return (
    <View style={styles.rectangleParent}>
      <View style={[styles.instanceChild, rectangleViewStyle]} />
      {showVectorIcon && (
        <Vector26 style={styles.instanceItem} width={20} height={16} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  instanceChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: 10,
    backgroundColor: "#d9d9d9",
    position: "absolute",
  },
  instanceItem: {
    top: "41.67%",
    right: "40%",
    bottom: "42.5%",
    left: "40%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    display: "none",
    position: "absolute",
  },
  rectangleParent: {
    width: 120,
    height: 120,
  },
});

export default RectangleComponent1;
