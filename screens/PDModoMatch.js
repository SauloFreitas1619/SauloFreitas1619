import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PDModoMatch = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdModomatch}>
      <View style={styles.pdModomatchChild} />
      <Text style={styles.entreNoModo}>
        Entre no “Modo Match” para encontrar serviços!
      </Text>
      <Text style={[styles.candidateSeAqui, styles.timeClr]}>
        Candidate-se Aqui
      </Text>
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
            <Text style={[styles.time, styles.timePosition]}>
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
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/perfil-diarista2.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.instanceParent, styles.groupChildLayout]}
        onPress={() => navigation.navigate("PDLocalizandoContratante")}
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
        <View style={styles.view}>
          <Text style={[styles.text1, styles.limpTypo]}>+</Text>
        </View>
      </Pressable>
      <Image
        style={[styles.image16Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <View style={[styles.home, styles.homeLayout]}>
        <View style={[styles.homeChild, styles.homeLayout]} />
        <View style={styles.wallet1Parent}>
          <Pressable
            style={[styles.wallet1, styles.wallet1Layout]}
            onPress={() => {}}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/wallet-1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.setting1, styles.wallet1Layout]}
            onPress={() => {}}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/setting-1.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.homeAlt1, styles.wallet1Layout]}
            onPress={() => {}}
          >
            <Image
              style={styles.iconLayout1}
              contentFit="cover"
              source={require("../assets/homealt-11.png")}
            />
          </Pressable>
          <View style={styles.component45}>
            <Image
              style={[styles.sprayDeLimpeza1Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/spraydelimpeza-1.png")}
            />
            <Text style={[styles.limp, styles.limpTypo]}>Limp</Text>
          </View>
        </View>
      </View>
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
  timeClr: {
    color: Color.black,
    textAlign: "center",
    position: "absolute",
  },
  timePosition: {
    left: "0%",
    width: "100%",
  },
  iphonePosition: {
    bottom: "0%",
    left: "0%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  iconLayout1: {
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  groupChildLayout: {
    height: 244,
    width: 256,
    position: "absolute",
  },
  limpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.small,
    position: "absolute",
  },
  homeLayout: {
    height: 96,
    width: 375,
    position: "absolute",
  },
  wallet1Layout: {
    width: 24,
    height: 24,
    position: "absolute",
  },
  pdModomatchChild: {
    top: 133,
    backgroundColor: Color.colorGainsboro_100,
    width: 376,
    height: 753,
    left: 0,
    position: "absolute",
  },
  entreNoModo: {
    top: 495,
    left: 28,
    fontSize: FontSize.size_5xl,
    fontFamily: FontFamily.poppinsSemiBold,
    width: 313,
    textAlign: "center",
    color: Color.colorRoyalblue,
    fontWeight: "600",
    position: "absolute",
  },
  candidateSeAqui: {
    marginLeft: -70,
    top: 112,
    fontSize: FontSize.bold_size,
    fontWeight: "500",
    fontFamily: FontFamily.bold,
    left: "50%",
  },
  iphoneXstatusBarsstatusBa1: {
    height: "100%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
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
    position: "absolute",
  },
  capIcon: {
    height: "34.82%",
    width: "5.56%",
    top: "32.14%",
    right: "0.43%",
    bottom: "33.04%",
    left: "94.02%",
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
    textAlign: "center",
    position: "absolute",
    left: "0%",
    fontWeight: "600",
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
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeIChild: {
    marginLeft: -67,
    bottom: 9,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray,
    width: 134,
    height: 5,
    left: "50%",
    position: "absolute",
  },
  iphoneXhomeIndicatorhomeI: {
    height: "3.94%",
    top: "96.06%",
    right: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
  },
  icon: {
    borderRadius: Border.br_61xl,
  },
  perfilDiarista: {
    left: 283,
    top: 41,
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
  text1: {
    fontSize: FontSize.size_77xl,
    height: "100%",
    top: "0%",
    left: "0%",
    width: "100%",
    color: Color.colorRoyalblue,
    fontFamily: FontFamily.small,
  },
  view: {
    top: 60,
    left: 139,
    width: 61,
    height: 112,
    position: "absolute",
  },
  instanceParent: {
    top: 240,
    left: 53,
  },
  image16Icon: {
    height: "11.23%",
    width: "26.39%",
    top: "2.38%",
    right: "75%",
    bottom: "86.4%",
    left: "-1.39%",
  },
  homeChild: {
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
    left: 0,
  },
  wallet1: {
    left: 195,
    top: 0,
  },
  setting1: {
    left: 288,
    top: 0,
  },
  homeAlt1: {
    left: 29,
    top: -1,
  },
  sprayDeLimpeza1Icon: {
    width: "53.57%",
    right: "46.43%",
    bottom: "0%",
    left: "0%",
    height: "100%",
    top: "0%",
  },
  limp: {
    top: "25%",
    left: "51.79%",
    fontSize: FontSize.small_size,
    color: Color.radial1,
  },
  component45: {
    top: -4,
    left: 90,
    width: 56,
    height: 30,
    position: "absolute",
  },
  wallet1Parent: {
    marginLeft: -155.5,
    top: 23,
    width: 295,
    height: 24,
    left: "50%",
    position: "absolute",
  },
  home: {
    top: 724,
    left: -15,
  },
  instanceChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue,
    height: "100%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
    bottom: "0%",
  },
  aumentarOVolumeIcon: {
    height: "60.87%",
    width: "84.85%",
    top: "21.74%",
    bottom: "17.39%",
    left: "15.15%",
    right: "0%",
  },
  rectangleParent: {
    top: 251,
    left: 327,
    width: 33,
    height: 46,
    position: "absolute",
  },
  pdModomatch: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default PDModoMatch;
