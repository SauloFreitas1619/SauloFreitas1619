import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const PDCadastro = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdCadastro2}>
      <View style={styles.iphoneXstatusBarsstatusBa}>
        <View style={[styles.iphoneXstatusBarsstatusBa1, styles.childPosition]}>
          <View
            style={[styles.iphoneXstatusBarsstatusBa1, styles.childPosition]}
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
            source={require("../assets/wifi2.png")}
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
      <View style={[styles.iphoneXhomeIndicatorhomeI, styles.childPosition]}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <View style={styles.image} />
      <Image
        style={[styles.image16Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <View style={styles.adicioneUmaFotoDaSuaRealiParent}>
        <Text style={[styles.adicioneUmaFoto, styles.adicioneTypo]}>
          Adicione uma foto da sua realizando uma limpeza
        </Text>
        <Text style={styles.opcional}>Opcional</Text>
        <Image
          style={styles.adicionarFoto1Icon}
          contentFit="cover"
          source={require("../assets/adicionarfoto-1.png")}
        />
        <Image
          style={[styles.groupChild, styles.childLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-163.png")}
        />
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.adicionarUsuario1Parent, styles.groupItemLayout]}>
          <Image
            style={[
              styles.adicionarUsuario1Icon,
              styles.adicioneSuaFotoPosition,
            ]}
            contentFit="cover"
            source={require("../assets/adicionarusuario-1.png")}
          />
          <Image
            style={[styles.groupItem, styles.groupItemLayout]}
            contentFit="cover"
            source={require("../assets/ellipse-265.png")}
          />
        </View>
        <Text style={[styles.adicioneSuaFoto, styles.adicioneSuaFotoPosition]}>
          Adicione sua foto de perfil
        </Text>
      </View>
      <View
        style={[styles.detalhesDeVocEDoSeuTrabWrapper, styles.detalhesLayout]}
      >
        <Text style={[styles.detalhesDeVoc, styles.concluirTypo]}>
          Detalhes de você e do seu trabalho
        </Text>
      </View>
      <View style={styles.groupContainer}>
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/group-6928.png")}
        />
        <Text style={[styles.nosDigaEm, styles.qualisTypo]}>
          Nos diga em qual frequência você gostaria de trabalhar
        </Text>
        <View style={[styles.image22Parent, styles.image22ParentPosition]}>
          <Image
            style={[styles.image22Icon, styles.image22IconLayout]}
            contentFit="cover"
            source={require("../assets/image-22.png")}
          />
          <Text
            style={[styles.frequnciaDeLimpeza, styles.image22ParentPosition]}
          >
            Frequência de Limpeza
          </Text>
        </View>
      </View>
      <Text style={[styles.especialidades, styles.text1Typo]}>
        Especialidades
      </Text>
      <View style={styles.pdCadastro2Child} />
      <View style={[styles.horrioDePrefernciaParent, styles.nosDigaEmLayout]}>
        <Text style={[styles.horrioDePreferncia, styles.text1Typo]}>
          Horário de Preferência
        </Text>
        <Text style={[styles.nosDigaEm, styles.qualisTypo]}>
          Nos diga em qual horário você gostaria de trabalhar
        </Text>
        <View style={styles.groupView}>
          <View style={[styles.rectangleParent, styles.rectangleLayout]}>
            <View style={styles.groupChild1ShadowBox} />
            <Text style={[styles.text1, styles.text1Typo]}>12:00</Text>
          </View>
          <View style={[styles.rectangleGroup, styles.rectangleLayout]}>
            <View style={styles.groupChild1ShadowBox} />
            <Text style={[styles.text1, styles.text1Typo]}>18:00</Text>
          </View>
          <Text style={[styles.text3, styles.adicioneTypo]}>{`-
`}</Text>
        </View>
      </View>
      <View style={[styles.groupParent1, styles.groupParentLayout]}>
        <View style={styles.groupParent2}>
          <View style={[styles.image22Group, styles.queTipoDePosition]}>
            <Image
              style={[styles.image22Icon1, styles.image22IconLayout]}
              contentFit="cover"
              source={require("../assets/image-22.png")}
            />
            <Text style={[styles.emQualisReas, styles.queTipoDePosition]}>
              Em qual(is) área(s) da casa você tem mais experiência em limpeza?
            </Text>
          </View>
          <Image
            style={styles.groupIcon}
            contentFit="cover"
            source={require("../assets/group-1000000944.png")}
          />
        </View>
        <View style={[styles.groupParent3, styles.groupParentLayout]}>
          <View style={[styles.image22Container, styles.groupParentLayout]}>
            <Image
              style={[styles.image22Icon2, styles.image22IconPosition]}
              contentFit="cover"
              source={require("../assets/image-221.png")}
            />
            <Text style={[styles.qualisServiosAdicionais, styles.qualisTypo]}>
              Qual(is) serviços adicionais você realiza?
            </Text>
          </View>
          <Image
            style={[styles.groupChild2, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-1000000944.png")}
          />
        </View>
        <View style={[styles.groupParent4, styles.parentPosition]}>
          <View style={[styles.image22Parent1, styles.parentPosition]}>
            <Image
              style={[styles.image22Icon3, styles.image22IconPosition]}
              contentFit="cover"
              source={require("../assets/image-221.png")}
            />
            <Text style={[styles.queTipoDe, styles.queTipoDePosition]}>
              Que tipo de limpeza você quer realizar?
            </Text>
          </View>
          <Image
            style={[styles.groupChild3, styles.groupChildPosition]}
            contentFit="cover"
            source={require("../assets/group-10000009441.png")}
          />
        </View>
      </View>
      <Pressable
        style={styles.botoEntrar}
        onPress={() => navigation.navigate("PDEscolhaMetodoRecebimento")}
      >
        <View style={[styles.botoEntrarChild, styles.childLayout]} />
        <Text style={[styles.concluir, styles.concluirTypo]}>Concluir</Text>
      </Pressable>
      <Pressable style={styles.rectangleContainer} onPress={() => {}}>
        <View style={[styles.instanceChild, styles.childPosition]} />
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
  childPosition: {
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
  adicioneTypo: {
    fontFamily: FontFamily.small,
    color: Color.colorDarkslateblue,
  },
  childLayout: {
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  groupItemLayout: {
    width: 97,
    height: 94,
    top: 0,
    position: "absolute",
  },
  adicioneSuaFotoPosition: {
    top: 22,
    position: "absolute",
  },
  detalhesLayout: {
    width: 240,
    height: 33,
  },
  concluirTypo: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    position: "absolute",
  },
  qualisTypo: {
    fontSize: FontSize.bold_size,
    height: 27,
    color: Color.color2,
    fontFamily: FontFamily.small,
  },
  image22ParentPosition: {
    height: 34,
    top: 0,
    position: "absolute",
  },
  image22IconLayout: {
    height: 16,
    width: 15,
    position: "absolute",
  },
  text1Typo: {
    fontSize: FontSize.size_lgi,
    height: 33,
    textAlign: "right",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.small,
    position: "absolute",
  },
  nosDigaEmLayout: {
    width: 325,
    position: "absolute",
  },
  rectangleLayout: {
    width: 100,
    height: 49,
    top: 0,
    position: "absolute",
  },
  groupParentLayout: {
    width: 330,
    position: "absolute",
  },
  queTipoDePosition: {
    width: 298,
    left: 0,
    top: 0,
    position: "absolute",
  },
  image22IconPosition: {
    top: 4,
    height: 16,
    width: 15,
    position: "absolute",
  },
  groupChildPosition: {
    top: 35,
    height: 66,
    width: 303,
    position: "absolute",
  },
  parentPosition: {
    width: 316,
    top: 0,
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
    height: 11,
    width: 15,
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
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.black,
    textAlign: "center",
    fontSize: FontSize.regular_size,
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
  image: {
    top: 109,
    left: -1,
    shadowColor: "rgba(21, 70, 160, 0.1)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 46,
    elevation: 46,
    borderTopLeftRadius: Border.br_31xl,
    borderTopRightRadius: Border.br_31xl,
    backgroundColor: Color.white1,
    width: 361,
    height: 1378,
    shadowOpacity: 1,
    position: "absolute",
  },
  image16Icon: {
    height: "11.23%",
    width: "26.39%",
    top: "2.38%",
    right: "75%",
    bottom: "86.4%",
    left: "-1.39%",
  },
  adicioneUmaFoto: {
    top: 38,
    left: 131,
    width: 195,
    height: 81,
    textAlign: "right",
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.small,
    position: "absolute",
  },
  opcional: {
    left: 20,
    width: 67,
    height: 27,
    color: Color.color2,
    top: 0,
    textAlign: "right",
    fontFamily: FontFamily.small,
    fontSize: FontSize.regular_size,
    position: "absolute",
  },
  adicionarFoto1Icon: {
    top: 48,
    left: 34,
    height: 52,
    width: 49,
    position: "absolute",
  },
  groupChild: {
    top: 20,
    width: 121,
    height: 107,
    left: 0,
  },
  adicioneUmaFotoDaSuaRealiParent: {
    top: 242,
    width: 326,
    height: 127,
    left: 16,
    position: "absolute",
  },
  adicionarUsuario1Icon: {
    left: 24,
    height: 51,
    width: 49,
  },
  groupItem: {
    left: 0,
  },
  adicionarUsuario1Parent: {
    left: 208,
  },
  adicioneSuaFoto: {
    width: 197,
    height: 69,
    textAlign: "left",
    left: 0,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.small,
    fontSize: FontSize.size_xl,
  },
  groupParent: {
    top: 136,
    left: 36,
    height: 94,
    width: 305,
    position: "absolute",
  },
  detalhesDeVoc: {
    fontSize: FontSize.size_mini,
    height: 33,
    width: 240,
    left: 0,
    top: 0,
    color: Color.colorDarkslateblue,
    textAlign: "center",
  },
  detalhesDeVocEDoSeuTrabWrapper: {
    top: 407,
    height: 33,
    left: 27,
    width: 240,
    position: "absolute",
  },
  groupInner: {
    top: 90,
    left: 71,
    width: 180,
    height: 50,
    position: "absolute",
  },
  nosDigaEm: {
    top: 32,
    width: 325,
    position: "absolute",
    left: 0,
    textAlign: "center",
  },
  image22Icon: {
    top: 6,
    left: 220,
  },
  frequnciaDeLimpeza: {
    width: 215,
    left: 0,
    textAlign: "right",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.small,
    fontSize: FontSize.size_xl,
  },
  image22Parent: {
    left: 47,
    width: 235,
  },
  groupContainer: {
    top: 1235,
    height: 140,
    width: 325,
    left: 15,
    position: "absolute",
  },
  especialidades: {
    top: 614,
    left: 114,
    width: 135,
  },
  pdCadastro2Child: {
    top: 435,
    shadowColor: "rgba(96, 148, 238, 0.3)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 15,
    elevation: 15,
    backgroundColor: "rgba(218, 218, 218, 0.5)",
    borderColor: Color.colorDarkslateblue,
    width: 299,
    borderRadius: Border.br_mini,
    height: 140,
    left: 27,
    shadowOpacity: 1,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  horrioDePreferncia: {
    left: 63,
    width: 203,
    top: 0,
  },
  groupChild1ShadowBox: {
    borderBottomWidth: 3,
    borderColor: Color.color2,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "#000",
    width: 100,
    height: 49,
    borderRadius: Border.br_mini,
    left: 0,
    top: 0,
    shadowOpacity: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  text1: {
    top: 14,
    left: 12,
    width: 59,
  },
  rectangleParent: {
    left: 0,
  },
  rectangleGroup: {
    left: 141,
  },
  text3: {
    top: 2,
    left: 90,
    fontSize: FontSize.size_17xl,
    width: 35,
    height: 33,
    textAlign: "right",
    color: Color.colorDarkslateblue,
    position: "absolute",
  },
  groupView: {
    top: 84,
    left: 48,
    width: 241,
    height: 49,
    position: "absolute",
  },
  horrioDePrefernciaParent: {
    top: 1055,
    height: 133,
    left: 15,
  },
  image22Icon1: {
    top: 25,
    left: 259,
  },
  emQualisReas: {
    fontSize: FontSize.bold_size,
    height: 27,
    color: Color.color2,
    fontFamily: FontFamily.small,
    textAlign: "center",
  },
  image22Group: {
    height: 41,
  },
  groupIcon: {
    top: 59,
    height: 66,
    width: 303,
    left: 2,
    position: "absolute",
  },
  groupParent2: {
    top: 236,
    height: 125,
    left: 14,
    width: 305,
    position: "absolute",
  },
  image22Icon2: {
    left: 315,
  },
  qualisServiosAdicionais: {
    width: 312,
    left: 0,
    top: 0,
    textAlign: "right",
    position: "absolute",
  },
  image22Container: {
    left: 0,
    height: 27,
    top: 0,
  },
  groupChild2: {
    left: 16,
  },
  groupParent3: {
    top: 119,
    height: 101,
    left: 0,
  },
  image22Icon3: {
    left: 301,
  },
  queTipoDe: {
    fontSize: FontSize.bold_size,
    height: 27,
    color: Color.color2,
    fontFamily: FontFamily.small,
    textAlign: "right",
  },
  image22Parent1: {
    left: 0,
    height: 27,
  },
  groupChild3: {
    left: 2,
    top: 35,
  },
  groupParent4: {
    height: 101,
    left: 14,
  },
  groupParent1: {
    top: 659,
    height: 361,
    left: 15,
  },
  botoEntrarChild: {
    shadowColor: "rgba(21, 70, 160, 0.5)",
    shadowRadius: 48,
    elevation: 48,
    shadowOpacity: 1,
    bottom: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
  },
  concluir: {
    top: "32.81%",
    left: "37.55%",
    fontSize: FontSize.size_lg,
    color: Color.white,
    textAlign: "left",
  },
  botoEntrar: {
    top: 1419,
    left: 49,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 4,
    elevation: 4,
    width: 261,
    height: 64,
    shadowOpacity: 1,
    position: "absolute",
  },
  instanceChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue,
    height: "100%",
    bottom: "0%",
    top: "0%",
    position: "absolute",
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
    top: 251,
    left: 327,
    width: 33,
    height: 46,
    position: "absolute",
  },
  pdCadastro2: {
    borderRadius: Border.br_21xl,
    backgroundColor: Color.white,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
  },
});

export default PDCadastro;
