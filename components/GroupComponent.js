import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { Border, Color } from "../GlobalStyles";

const GroupComponent = () => {
  return (
    <Pressable style={styles.rectangleParent} onPress={() => {}}>
      <View style={[styles.instanceChild, styles.instanceChildPosition]} />
      <Image
        style={[styles.aumentarOVolumeIcon, styles.instanceChildPosition]}
        contentFit="cover"
        source={require("../assets/aumentarovolume.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  instanceChildPosition: {
    right: "0%",
    position: "absolute",
  },
  instanceChild: {
    height: "100%",
    width: "100%",
    top: "0%",
    bottom: "0%",
    left: "0%",
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue,
  },
  aumentarOVolumeIcon: {
    height: "60.87%",
    width: "84.85%",
    top: "21.74%",
    bottom: "17.39%",
    left: "15.15%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  rectangleParent: {
    top: 251,
    left: 327,
    width: 33,
    height: 46,
    position: "absolute",
  },
});

export default GroupComponent;
