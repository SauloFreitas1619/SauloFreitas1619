import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhoneXStatusBarsStatusBa = () => {
  return (
    <View style={[styles.iphoneXstatusBarsstatusBa, styles.timePosition]}>
      <View style={[styles.iphoneXstatusBarsstatusBa1, styles.borderPosition]}>
        <View
          style={[styles.iphoneXstatusBarsstatusBa1, styles.borderPosition]}
        />
        <View style={styles.battery}>
          <View style={[styles.border, styles.borderPosition]} />
          <Image
            style={styles.capIcon}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity} />
        </View>
        <Image
          style={styles.wifiIcon}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>
            <Text style={styles.text}>9:4</Text>1
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    left: "0%",
    width: "100%",
    position: "absolute",
  },
  borderPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa1: {
    right: "0%",
    width: "100%",
    height: "100%",
  },
  border: {
    width: "90.17%",
    right: "9.83%",
    borderRadius: Border.br_10xs_7,
    borderStyle: "solid",
    borderColor: Color.black,
    borderWidth: 1,
    opacity: 0.35,
  },
  capIcon: {
    height: "34.82%",
    width: "5.56%",
    top: "32.14%",
    right: "0.43%",
    bottom: "33.04%",
    left: "94.02%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  capacity: {
    height: "64.29%",
    width: "73.93%",
    top: "16.96%",
    right: "17.95%",
    bottom: "18.75%",
    left: "8.12%",
    borderRadius: Border.br_11xs_3,
    backgroundColor: Color.black,
    position: "absolute",
  },
  battery: {
    height: "25.87%",
    width: "6.5%",
    top: "39.49%",
    right: "3.89%",
    bottom: "34.64%",
    left: "89.61%",
    position: "absolute",
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularConnectionIcon: {
    width: 16,
    height: 11,
  },
  text: {
    letterSpacing: 0,
  },
  time: {
    marginTop: -8.35,
    top: "50%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.sFProText,
    color: Color.black,
    textAlign: "center",
  },
  timeStyle: {
    height: "47.81%",
    top: "29.56%",
    bottom: "22.63%",
    left: 21,
    width: 54,
    display: "none",
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa: {
    height: "5.41%",
    bottom: "94.59%",
    right: "0%",
    top: "0%",
    left: "0%",
  },
});

export default IPhoneXStatusBarsStatusBa;
