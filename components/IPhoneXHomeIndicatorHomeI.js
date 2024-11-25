import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const IPhoneXHomeIndicatorHomeI = () => {
  return (
    <View style={styles.iphoneXhomeIndicatorhomeI}>
      <View style={styles.iphoneXhomeIndicatorhomeIChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  iphoneXhomeIndicatorhomeIChild: {
    marginLeft: -67,
    bottom: 9,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray,
    width: 134,
    height: 5,
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeI: {
    height: "3.94%",
    width: "100%",
    top: "96.06%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
});

export default IPhoneXHomeIndicatorHomeI;
