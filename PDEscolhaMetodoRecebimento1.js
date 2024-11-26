import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const PDEscolhaMetodoRecebimento1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdEscolhametodorecebimento}>
      <View style={styles.pdEscolhametodorecebimentoChild} />
      <View style={[styles.iphoneXstatusBarsstatusBa, styles.timePosition]}>
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
            <Text style={[styles.time, styles.timeFlexBox]}>
              <Text style={styles.text}>9:4</Text>1
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.iphoneXhomeIndicatorhomeI, styles.iphonePosition]}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Image
        style={[styles.image16Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <View style={styles.selecioneOTipoDaSuaChaveWrapper}>
        <Text style={styles.selecioneOTipo}>
          Selecione o tipo da sua chave Pix
        </Text>
      </View>
      <View style={styles.componentParent}>
        <View style={[styles.component89Wrapper, styles.wrapperLayout]}>
          <View
            style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
          >
            <View style={styles.childShadowBox} />
            <Text style={[styles.email, styles.cpfTypo]}>Email</Text>
            <Image
              style={[styles.component89Item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-274.png")}
            />
          </View>
        </View>
        <View style={[styles.component90Wrapper, styles.wrapperLayout]}>
          <Pressable
            style={[styles.component90, styles.wrapperLayout]}
            onPress={() => navigation.navigate("PDConfirmaoDeDados")}
          >
            <View style={styles.childShadowBox} />
            <Text style={[styles.telefone, styles.telefoneTypo]}>Telefone</Text>
            <Image
              style={[styles.component90Item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-274.png")}
            />
          </Pressable>
        </View>
        <View style={[styles.component90, styles.wrapperLayout]}>
          <View style={[styles.component90, styles.wrapperLayout]}>
            <View
              style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
            >
              <View style={styles.childShadowBox} />
            </View>
            <Text style={[styles.cpf, styles.cpfTypo]}>CPF</Text>
          </View>
          <Image
            style={styles.groupChild}
            contentFit="cover"
            source={require("../assets/ellipse-274.png")}
          />
        </View>
        <View style={[styles.component88Wrapper, styles.wrapperLayout]}>
          <Pressable
            style={[styles.component90, styles.wrapperLayout]}
            onPress={() => navigation.navigate("PDConfirmaoDeDados")}
          >
            <View style={styles.childShadowBox} />
            <Text style={[styles.chaveAleatria, styles.telefoneTypo]}>
              Chave Aleatória
            </Text>
            <Image
              style={[styles.component88Item, styles.itemLayout]}
              contentFit="cover"
              source={require("../assets/ellipse-274.png")}
            />
          </Pressable>
        </View>
      </View>
      <Pressable
        style={[styles.rectangleParent, styles.groupItemLayout]}
        onPress={() => navigation.navigate("PDConfirmaoDeDados")}
      >
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Text style={[styles.continuar, styles.timeFlexBox]}>Continuar</Text>
      </Pressable>
      <Pressable style={styles.rectangleGroup} onPress={() => {}}>
        <View style={[styles.instanceItem, styles.iphonePosition]} />
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
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  wrapperLayout: {
    height: 67,
    width: 302,
    left: 0,
    position: "absolute",
  },
  cpfTypo: {
    color: Color.color2,
    fontSize: FontSize.size_8xl,
    width: "32.12%",
    height: "36.12%",
    top: "20.9%",
    fontFamily: FontFamily.small,
    textAlign: "center",
    position: "absolute",
  },
  itemLayout: {
    left: "10.93%",
    right: "84.44%",
    width: "4.64%",
    height: "22.39%",
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  telefoneTypo: {
    height: "35.82%",
    color: Color.color2,
    fontSize: FontSize.size_8xl,
    fontFamily: FontFamily.small,
    textAlign: "center",
    position: "absolute",
  },
  groupItemLayout: {
    height: 53,
    width: 242,
    position: "absolute",
  },
  pdEscolhametodorecebimentoChild: {
    top: 545,
    width: 360,
    height: 322,
    left: 0,
    position: "absolute",
    backgroundColor: Color.white,
  },
  iphoneXstatusBarsstatusBa1: {
    height: "100%",
    bottom: "0%",
    top: "0%",
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
    left: "0%",
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
    right: "0%",
    top: "0%",
    left: "0%",
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
  },
  image16Icon: {
    height: "11.23%",
    width: "26.39%",
    top: "2.38%",
    right: "75%",
    bottom: "86.4%",
    left: "-1.39%",
  },
  selecioneOTipo: {
    fontSize: FontSize.size_3xl,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.small,
    top: 0,
    height: 69,
    width: 332,
    textAlign: "center",
    left: 0,
    position: "absolute",
  },
  selecioneOTipoDaSuaChaveWrapper: {
    top: 125,
    left: 10,
    height: 69,
    width: 332,
    position: "absolute",
  },
  childShadowBox: {
    borderColor: Color.color2,
    elevation: 15,
    shadowRadius: 15,
    shadowColor: "rgba(0, 0, 0, 0.8)",
    backgroundColor: Color.white1,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  email: {
    left: "17.88%",
  },
  component89Item: {
    top: "38.81%",
    bottom: "38.81%",
  },
  component89Wrapper: {
    top: 219,
  },
  telefone: {
    width: "44.7%",
    left: "17.22%",
    top: "20.9%",
    height: "35.82%",
  },
  component90Item: {
    top: "40.3%",
    bottom: "37.31%",
  },
  component90: {
    top: 0,
    height: 67,
  },
  component90Wrapper: {
    top: 334,
  },
  cpf: {
    left: "14.9%",
  },
  groupChild: {
    top: 26,
    left: 33,
    width: 14,
    height: 15,
    position: "absolute",
  },
  chaveAleatria: {
    width: "66.56%",
    top: "25.37%",
    left: "21.52%",
  },
  component88Item: {
    top: "41.79%",
    bottom: "35.82%",
  },
  component88Wrapper: {
    top: 105,
  },
  componentParent: {
    top: 225,
    left: 29,
    height: 401,
    width: 302,
    position: "absolute",
  },
  groupItem: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    borderColor: Color.colorDarkslateblue,
    backgroundColor: Color.white1,
    borderRadius: Border.br_11xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 242,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    left: 0,
  },
  continuar: {
    top: 14,
    left: 65,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.manropeBold,
    color: Color.colorCornflowerblue_100,
    width: 115,
    height: 24,
  },
  rectangleParent: {
    top: 675,
    left: 59,
  },
  instanceItem: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue,
    height: "100%",
    bottom: "0%",
    top: "0%",
  },
  aumentarOVolumeIcon: {
    height: "60.87%",
    width: "84.85%",
    top: "21.74%",
    bottom: "17.39%",
    left: "15.15%",
    right: "0%",
  },
  rectangleGroup: {
    top: 251,
    left: 327,
    width: 33,
    height: 46,
    position: "absolute",
  },
  pdEscolhametodorecebimento: {
    borderRadius: Border.br_21xl,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PDEscolhaMetodoRecebimento1;
