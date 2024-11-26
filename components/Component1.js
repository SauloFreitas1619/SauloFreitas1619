import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const Component1 = () => {
  return (
    <View style={styles.component60}>
      <Image
        style={styles.homeAlt2Icon}
        contentFit="cover"
        source={require("../assets/homealt-2.png")}
      />
      <Text style={styles.home}>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeAlt2Icon: {
    height: "100%",
    width: "39.34%",
    top: "0%",
    right: "60.66%",
    bottom: "0%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  home: {
    top: "29.17%",
    left: "42.62%",
    fontSize: FontSize.small_size,
    fontFamily: FontFamily.small,
    color: Color.radial1,
    textAlign: "left",
    position: "absolute",
  },
  component60: {
    top: -1,
    left: 15,
    width: 61,
    height: 24,
    position: "absolute",
  },
});

export default Component1;