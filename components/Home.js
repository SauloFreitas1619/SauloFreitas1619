import * as React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import Component1 from "./Component1";
import { Border, Color } from "../GlobalStyles";

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.homeChild} />
      <View style={styles.wallet1Parent}>
        <Pressable
          style={[styles.wallet1, styles.wallet1Layout]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/wallet-1.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.setting1, styles.wallet1Layout]}
          onPress={() => {}}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/setting-1.png")}
          />
        </Pressable>
        <Component1 />
        <Image
          style={styles.image5Icon}
          contentFit="cover"
          source={require("../assets/image-51.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wallet1Layout: {
    width: 24,
    height: 24,
    top: 0,
    position: "absolute",
  },
  homeChild: {
    left: 0,
    shadowColor: "rgba(21, 70, 160, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 46,
    elevation: 46,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_21xl,
    backgroundColor: Color.white1,
    top: 0,
    height: 96,
    width: 375,
    position: "absolute",
  },
  icon: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  wallet1: {
    left: 195,
  },
  setting1: {
    left: 288,
  },
  image5Icon: {
    top: -3,
    left: 107,
    width: 30,
    height: 30,
    position: "absolute",
  },
  wallet1Parent: {
    marginLeft: -155.5,
    top: 23,
    left: "50%",
    width: 295,
    height: 24,
    position: "absolute",
  },
  home: {
    top: 724,
    left: -15,
    height: 96,
    width: 375,
    position: "absolute",
  },
});

export default Home;
