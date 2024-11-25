import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Component = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    height: "100%",
    width: "100%",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_77xl,
    fontFamily: FontFamily.small,
    color: Color.colorRoyalblue,
    textAlign: "left",
    position: "absolute",
  },
  view: {
    top: 60,
    left: 139,
    width: 61,
    height: 112,
    position: "absolute",
  },
});

export default Component;
