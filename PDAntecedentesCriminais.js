import * as React from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const PDAntecedentesCriminais = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.pdAntecedentescriminais}>
      <View style={styles.image} />
      <View style={[styles.iphoneXstatusBarsstatusBa, styles.timePosition]}>
        <View
          style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
        >
          <View
            style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
          />
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderBorder]} />
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
      <Text style={[styles.cadastroDeConta, styles.contaFlexBox]}>
        Cadastro de conta bancaria
      </Text>
      <Text style={[styles.pesquisar, styles.contaFlexBox]}>Pesquisar</Text>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.bancoParent, styles.parentPosition]}>
          <Text style={[styles.banco, styles.contaFlexBox]}>Banco</Text>
          <View style={[styles.rectangleParent, styles.parentPosition]}>
            <View style={[styles.groupChild, styles.viewGroupShadowBox]} />
            <View style={[styles.groupItem, styles.lineViewPosition]} />
          </View>
        </View>
        <View style={styles.agenciaWrapper}>
          <Text style={[styles.banco, styles.contaFlexBox]}>Agencia:</Text>
        </View>
        <View style={[styles.contaParent, styles.groupPosition]}>
          <Text style={[styles.conta, styles.contaFlexBox]}>Conta:</Text>
          <View style={[styles.rectangleGroup, styles.groupPosition]}>
            <View style={[styles.groupInner, styles.groupPosition]} />
            <View style={[styles.lineView, styles.lineViewPosition]} />
          </View>
        </View>
        <View style={[styles.situaoParent, styles.parentLayout]}>
          <Text style={[styles.banco, styles.contaFlexBox]}>Situação:</Text>
          <Text style={[styles.ativo, styles.contaFlexBox]}>Ativo</Text>
          <Text style={[styles.inativo, styles.contaFlexBox]}>Inativo</Text>
          <Text style={[styles.estaContaIr, styles.contaFlexBox]}>
            Esta conta irá gerar boletos bancarios?
          </Text>
        </View>
        <View style={[styles.nomeDoTitularParent, styles.groupParentPosition]}>
          <Text style={[styles.banco, styles.contaFlexBox]}>
            Nome do titular
          </Text>
          <View style={[styles.groupContainer, styles.groupParentPosition]}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.rectangleView, styles.rectanglePosition]} />
              <View style={styles.groupChildShadowBox1} />
            </View>
            <View style={[styles.groupView, styles.groupChildLayout]}>
              <View style={[styles.groupChild2, styles.groupChildLayout]} />
              <View style={styles.groupChildShadowBox} />
            </View>
          </View>
          <View style={[styles.groupParent1, styles.groupParentPosition]}>
            <View style={styles.rectanglePosition}>
              <View style={[styles.groupChild4, styles.rectanglePosition]} />
              <View style={styles.groupChildShadowBox1} />
            </View>
            <View style={[styles.groupView, styles.groupChildLayout]}>
              <View style={[styles.groupChild6, styles.groupChildLayout]} />
              <View style={styles.groupChildShadowBox} />
            </View>
          </View>
        </View>
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupLayout]}
        onPress={() => navigation.navigate("PDConfirmaoDeDados1")}
      >
        <View style={[styles.groupChild8, styles.groupLayout]} />
        <Text style={[styles.continuar, styles.timeFlexBox]}>Continuar</Text>
      </Pressable>
      <Pressable
        style={styles.icons8LeftArrow10022}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icons8leftarrow1002-2.png")}
        />
      </Pressable>
      <View style={[styles.iphoneXhomeIndicatorhomeI, styles.iphonePosition]}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <ScrollView style={[styles.formControl, styles.formLayout]}>
        <View
          style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
        >
          <View style={[styles.background, styles.iphonePosition]} />
          <View style={styles.knob} />
        </View>
      </ScrollView>
      <ScrollView style={[styles.formControl1, styles.formLayout]}>
        <View
          style={[styles.iphoneXstatusBarsstatusBa1, styles.iphonePosition]}
        >
          <View style={[styles.background, styles.iphonePosition]} />
          <View style={styles.knob} />
        </View>
      </ScrollView>
      <Pressable style={styles.rectangleParent3} onPress={() => {}}>
        <View style={[styles.instanceChild, styles.iphonePosition]} />
        <Image
          style={[styles.aumentarOVolumeIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/aumentarovolume.png")}
        />
      </Pressable>
    </View>
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
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  timeFlexBox: {
    textAlign: "center",
    position: "absolute",
  },
  contaFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  parentLayout: {
    width: 286,
    position: "absolute",
  },
  parentPosition: {
    width: 224,
    left: 0,
    position: "absolute",
  },
  viewGroupShadowBox: {
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
  },
  lineViewPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorCornflowerblue_100,
    top: 25,
    left: 0,
    borderStyle: "solid",
    position: "absolute",
  },
  groupPosition: {
    width: 231,
    left: 0,
    position: "absolute",
  },
  groupParentPosition: {
    width: 193,
    left: 0,
    position: "absolute",
  },
  rectanglePosition: {
    width: 138,
    height: 25,
    left: 0,
    top: 0,
    position: "absolute",
  },
  groupChildLayout: {
    width: 45,
    height: 25,
    top: 0,
    position: "absolute",
  },
  groupLayout: {
    height: 53,
    width: 242,
    position: "absolute",
  },
  formLayout: {
    maxHeight: 12,
    height: 12,
    position: "absolute",
    width: "100%",
  },
  image: {
    top: 154,
    left: 2,
    shadowColor: "rgba(21, 70, 160, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 46,
    elevation: 46,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    width: 360,
    height: 657,
    backgroundColor: Color.white1,
    shadowOpacity: 1,
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
    borderColor: Color.black,
    opacity: 0.35,
    bottom: "0%",
    left: "0%",
    position: "absolute",
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
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.black,
    fontWeight: "600",
    fontSize: FontSize.regular_size,
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
  cadastroDeConta: {
    top: 62,
    left: 96,
    fontSize: FontSize.bold_size,
    width: 207,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.small,
  },
  pesquisar: {
    top: 762,
    left: 149,
    fontSize: 10,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.white1,
    fontWeight: "600",
  },
  banco: {
    left: 0,
    top: 0,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.small,
    fontSize: FontSize.regular_size,
  },
  groupChild: {
    height: 25,
    width: 224,
    left: 0,
    position: "absolute",
    top: 0,
    backgroundColor: Color.white1,
  },
  groupItem: {
    width: 225,
  },
  rectangleParent: {
    top: 22,
    height: 25,
  },
  bancoParent: {
    height: 47,
    top: 0,
  },
  agenciaWrapper: {
    top: 124,
    width: 57,
    height: 19,
    left: 0,
    position: "absolute",
  },
  conta: {
    top: 105,
    left: 0,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.small,
    fontSize: FontSize.regular_size,
  },
  groupInner: {
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    height: 25,
    top: 0,
    backgroundColor: Color.white1,
  },
  lineView: {
    width: 232,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
  },
  rectangleGroup: {
    height: 25,
    top: 0,
  },
  contaParent: {
    top: 90,
    height: 124,
  },
  ativo: {
    left: 253,
    top: 0,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.small,
    fontSize: FontSize.regular_size,
  },
  inativo: {
    left: 156,
    color: "#afadad",
    top: 0,
    fontFamily: FontFamily.small,
    textAlign: "left",
    fontSize: FontSize.regular_size,
  },
  estaContaIr: {
    top: 33,
    left: 0,
    color: Color.colorDarkslateblue,
    textAlign: "left",
    fontFamily: FontFamily.small,
    fontSize: FontSize.regular_size,
  },
  situaoParent: {
    top: 272,
    height: 52,
    left: 0,
  },
  rectangleView: {
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    backgroundColor: Color.white1,
  },
  groupChildShadowBox1: {
    width: 139,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorCornflowerblue_100,
    top: 25,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    borderStyle: "solid",
    shadowOpacity: 1,
    position: "absolute",
  },
  groupChild2: {
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    left: 0,
    backgroundColor: Color.white1,
  },
  groupChildShadowBox: {
    width: 46,
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorCornflowerblue_100,
    top: 25,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
    borderStyle: "solid",
    shadowOpacity: 1,
    position: "absolute",
  },
  groupView: {
    left: 148,
  },
  groupContainer: {
    top: 168,
    height: 25,
  },
  groupChild4: {
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    backgroundColor: Color.white1,
  },
  groupChild6: {
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    left: 0,
    backgroundColor: Color.white1,
  },
  groupParent1: {
    top: 94,
    height: 25,
  },
  nomeDoTitularParent: {
    top: 60,
    height: 193,
  },
  groupParent: {
    top: 238,
    left: 40,
    height: 324,
  },
  groupChild8: {
    borderRadius: Border.br_11xl,
    borderColor: Color.colorDarkslateblue,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOpacity: 1,
    left: 0,
    top: 0,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.white1,
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
  groupPressable: {
    top: 657,
    left: 59,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  icons8LeftArrow10022: {
    left: 25,
    top: 58,
    width: 30,
    height: 30,
    position: "absolute",
  },
  background: {
    borderRadius: Border.br_8xl_4,
    backgroundColor: Color.baseColorSuccessColor,
    height: "100%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  knob: {
    height: "87.5%",
    width: "53.85%",
    top: "6.67%",
    right: "3.85%",
    bottom: "5.83%",
    left: "42.31%",
    borderRadius: Border.br_56xl,
    backgroundColor: Color.white1,
    position: "absolute",
  },
  formControl: {
    top: 513,
    left: 254,
  },
  formControl1: {
    top: 546,
    left: 301,
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
  },
  rectangleParent3: {
    top: 251,
    left: 327,
    width: 33,
    height: 46,
    position: "absolute",
  },
  pdAntecedentescriminais: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    flex: 1,
    height: 800,
    overflow: "hidden",
    width: "100%",
  },
});

export default PDAntecedentesCriminais;
