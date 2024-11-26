import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const PDEscolhaMetodoRecebimento = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdEscolhametodorecebimento}>
      <View style={styles.iphoneXstatusBarsstatusBa}>
        <View
          style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
        >
          <View
            style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
          />
          <View style={styles.battery}>
            <View style={styles.border} />
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
            <Text style={styles.time}>
              <Text style={styles.text}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.image, styles.imageBg]} />
      <Image
        style={[styles.image16Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <View style={styles.selecioneUmaFormaDePagamenWrapper}>
        <Text style={styles.selecioneUmaForma}>
          Selecione uma forma de pagamento para receber suas comissões
        </Text>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.rectangleLayout]}
        onPress={() => navigation.navigate("PDEscolhaMetodoRecebimento1")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.pix, styles.pixTypo]}>Pix</Text>
        <Image
          style={[styles.imageIcon, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image3.png")}
        />
      </Pressable>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleLayout]}
        onPress={() => navigation.navigate("PDAntecedentesCriminais")}
      >
        <View style={styles.groupShadowBox} />
        <Text style={[styles.transferncia, styles.pixTypo]}>Transferência</Text>
        <Image
          style={[styles.imageIcon1, styles.imageIconLayout]}
          contentFit="cover"
          source={require("../assets/image4.png")}
        />
      </Pressable>
      <View style={[styles.iphoneXhomeIndicatorhomeI, styles.iphonePosition]}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Pressable style={styles.rectangleContainer} onPress={() => {}}>
        <View style={[styles.instanceChild, styles.imageBg]} />
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
  iphonePosition: {
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  imageBg: {
    backgroundColor: Color.colorDarkslateblue,
    position: "absolute",
  },
  rectangleLayout: {
    height: 129,
    width: 302,
    left: 29,
    position: "absolute",
  },
  pixTypo: {
    height: 42,
    color: Color.color2,
    fontFamily: FontFamily.small,
    textAlign: "center",
    position: "absolute",
  },
  imageIconLayout: {
    width: 73,
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa1: {
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
  },
  border: {
    width: "90.17%",
    right: "9.83%",
    borderRadius: Border.br_10xs_7,
    borderColor: Color.black,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    height: "100%",
    left: "0%",
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
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.black,
    textAlign: "center",
    left: "0%",
    position: "absolute",
    width: "100%",
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
    left: "0%",
    top: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  image: {
    top: 112,
    left: -5,
    shadowColor: "rgba(21, 70, 160, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 46,
    elevation: 46,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    width: 369,
    height: 898,
    shadowOpacity: 1,
    backgroundColor: Color.colorDarkslateblue,
  },
  image16Icon: {
    height: "11.23%",
    width: "26.39%",
    top: "2.38%",
    right: "75%",
    bottom: "86.4%",
    left: "-1.39%",
  },
  selecioneUmaForma: {
    fontSize: FontSize.size_3xl,
    color: Color.white1,
    fontFamily: FontFamily.small,
    left: 0,
    top: 0,
    height: 69,
    width: 354,
    textAlign: "center",
    position: "absolute",
  },
  selecioneUmaFormaDePagamenWrapper: {
    top: 141,
    left: -8,
    height: 69,
    width: 354,
    position: "absolute",
  },
  groupShadowBox: {
    borderColor: Color.color2,
    backgroundColor: Color.white1,
    borderRadius: Border.br_xl,
    elevation: 15,
    shadowRadius: 15,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.8)",
    height: 129,
    width: 302,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  pix: {
    top: 40,
    left: 90,
    fontSize: FontSize.size_17xl,
    width: 97,
  },
  imageIcon: {
    top: 29,
    left: 24,
    height: 73,
  },
  rectangleParent: {
    top: 290,
  },
  transferncia: {
    top: 41,
    left: 103,
    fontSize: 28,
    width: 182,
  },
  imageIcon1: {
    top: 27,
    left: 25,
    height: 70,
  },
  rectangleGroup: {
    top: 499,
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
    position: "absolute",
  },
  instanceChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
  },
  aumentarOVolumeIcon: {
    height: "60.87%",
    width: "84.85%",
    top: "21.74%",
    bottom: "17.39%",
    left: "15.15%",
    right: "0%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  rectangleContainer: {
    top: 248,
    left: 327,
    width: 33,
    height: 46,
    position: "absolute",
  },
  pdEscolhametodorecebimento: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default PDEscolhaMetodoRecebimento;
