import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const PDContratanteEncontrado = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdContratanteencontrado}>
      <View style={styles.pdContratanteencontradoChild} />
      <View style={[styles.iphoneXstatusBarsstatusBa, styles.timePosition]}>
        <View
          style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
        >
          <View
            style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
          />
          <View style={styles.battery}>
            <View style={[styles.border, styles.iphonePosition]} />
            <Image
              style={[styles.capIcon, styles.iconLayout]}
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
            <Text style={[styles.time, styles.timeTypo]}>
              <Text style={styles.text}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.iphoneXhomeIndicatorhomeI, styles.iphonePosition]}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Pressable
        style={styles.perfilDiarista}
        onPress={() => navigation.navigate("PDPerfilPessoalDados")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/perfil-diarista1.png")}
        />
      </Pressable>
      <View style={[styles.home, styles.homeLayout]}>
        <View style={[styles.homeChild, styles.homeLayout]} />
        <Text style={[styles.noHMais, styles.timeTypo]}>
          Não há mais contratantes correspondentes!
        </Text>
        <Image
          style={styles.imageIcon}
          contentFit="cover"
          source={require("../assets/image1.png")}
        />
      </View>
      <Pressable
        style={styles.image15}
        onPress={() => navigation.navigate("PDModoMatch")}
      >
        <Image
          style={[styles.icon1, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
      </Pressable>
      <View style={[styles.iphoneXhomeIndicatorhomeI, styles.iphonePosition]}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Pressable style={styles.rectangleParent} onPress={() => {}}>
        <View style={[styles.instanceChild, styles.iphonePosition]} />
        <Image
          style={[styles.aumentarOVolumeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/aumentarovolume.png")}
        />
      </Pressable>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    left: "0%",
    width: "100%",
  },
  iphonePosition: {
    bottom: "0%",
    left: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  timeTypo: {
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  homeLayout: {
    height: 705,
    width: 369,
    position: "absolute",
  },
  pdContratanteencontradoChild: {
    top: 133,
    backgroundColor: Color.colorGainsboro_100,
    width: 376,
    height: 753,
    left: 0,
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa1: {
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  border: {
    width: "90.17%",
    right: "9.83%",
    borderRadius: Border.br_10xs_7,
    borderStyle: "solid",
    borderColor: Color.black,
    borderWidth: 1,
    opacity: 0.35,
    height: "100%",
    top: "0%",
  },
  capIcon: {
    height: "34.82%",
    width: "5.56%",
    top: "32.14%",
    right: "0.43%",
    bottom: "33.04%",
    left: "94.02%",
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
    fontSize: FontSize.regular_size,
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.black,
    left: "0%",
    width: "100%",
  },
  timeStyle: {
    height: "47.81%",
    top: "29.56%",
    bottom: "22.63%",
    left: 21,
    width: 54,
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa: {
    height: "5.41%",
    bottom: "94.59%",
    right: "0%",
    top: "0%",
    position: "absolute",
  },
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
    top: "96.06%",
    right: "0%",
    width: "100%",
  },
  icon: {
    borderRadius: Border.br_61xl,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  perfilDiarista: {
    left: 293,
    top: 48,
    width: 60,
    height: 60,
    position: "absolute",
  },
  homeChild: {
    top: 0,
    shadowColor: "rgba(21, 70, 160, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 46,
    elevation: 46,
    shadowOpacity: 1,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.white1,
    left: 0,
  },
  noHMais: {
    top: 427,
    left: 35,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorRoyalblue,
    width: 312,
  },
  imageIcon: {
    top: 95,
    left: 45,
    width: 277,
    height: 280,
    position: "absolute",
  },
  home: {
    top: 119,
    left: -4,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  image15: {
    left: "0.83%",
    top: "4.13%",
    right: "72.78%",
    bottom: "84.65%",
    width: "26.39%",
    height: "11.23%",
    position: "absolute",
  },
  instanceChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue,
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  aumentarOVolumeIcon: {
    height: "60.87%",
    width: "84.85%",
    top: "21.74%",
    bottom: "17.39%",
    left: "15.15%",
    right: "0%",
    position: "absolute",
  },
  rectangleParent: {
    top: 251,
    left: 327,
    width: 33,
    height: 46,
    position: "absolute",
  },
  pdContratanteencontrado: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default PDContratanteEncontrado;
