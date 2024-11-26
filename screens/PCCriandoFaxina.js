import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import IPhoneXStatusBarsStatusBa from "../components/IPhoneXStatusBarsStatusBa";
import IPhoneXHomeIndicatorHomeI from "../components/IPhoneXHomeIndicatorHomeI";
import Component from "../components/Component";
import Home from "../components/Home";
import GroupComponent from "../components/GroupComponent";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PCCriandoFaxina = () => {
  return (
    <ScrollView style={styles.pcCriandofaxina}>
      <View style={styles.pcCriandofaxinaChild} />
      <Text style={[styles.crieUmaNova, styles.crieUmaNovaFlexBox]}>
        Crie uma nova faxina para começar!
      </Text>
      <Text style={[styles.contrateAqui, styles.crieUmaNovaFlexBox]}>
        Contrate Aqui
      </Text>
      <IPhoneXStatusBarsStatusBa />
      <IPhoneXHomeIndicatorHomeI />
      <Image
        style={styles.images1Icon}
        contentFit="cover"
        source={require("../assets/images-11.png")}
      />
      <Pressable
        style={[styles.instanceParent, styles.groupChildLayout]}
        onPress={() => {}}
      >
        <Image
          style={[styles.groupChild, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-262.png")}
        />
        <Image
          style={styles.image5Icon}
          contentFit="cover"
          source={require("../assets/image-51.png")}
        />
        <Component />
      </Pressable>
      <Image
        style={styles.image16Icon}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <Pressable style={styles.filtro} onPress={() => {}}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/filtro.png")}
        />
      </Pressable>
      <Home />
      <IPhoneXHomeIndicatorHomeI />
      <GroupComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  crieUmaNovaFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  groupChildLayout: {
    height: 244,
    width: 256,
    position: "absolute",
  },
  pcCriandofaxinaChild: {
    top: 133,
    backgroundColor: Color.colorGainsboro_100,
    width: 376,
    height: 753,
    left: 0,
    position: "absolute",
  },
  crieUmaNova: {
    top: 495,
    left: 28,
    fontSize: FontSize.size_5xl,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorRoyalblue,
    width: 313,
  },
  contrateAqui: {
    marginLeft: -58,
    top: 112,
    left: "50%",
    fontSize: FontSize.bold_size,
    fontWeight: "500",
    fontFamily: FontFamily.bold,
    color: Color.black,
  },
  images1Icon: {
    top: 42,
    left: 282,
    width: 60,
    height: 60,
    position: "absolute",
  },
  groupChild: {
    top: 0,
    left: 0,
  },
  image5Icon: {
    top: 68,
    width: 105,
    height: 117,
    left: 53,
    position: "absolute",
  },
  instanceParent: {
    top: 240,
    left: 53,
  },
  image16Icon: {
    height: "11.23%",
    width: "26.39%",
    top: "0.75%",
    right: "75%",
    bottom: "88.03%",
    left: "-1.39%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
    maxWidth: "100%",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  filtro: {
    left: 23,
    top: 108,
    width: 43,
    height: 30,
    position: "absolute",
  },
  pcCriandofaxina: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default PCCriandoFaxina;