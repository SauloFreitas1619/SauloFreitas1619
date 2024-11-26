import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PDConfirmaoDeDados1 = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdConfirmaodedados}>
      <View
        style={[styles.pdConfirmaodedadosChild, styles.component91Layout]}
      />
      <View style={styles.mdiaPesadaWrapper}>
        <Text style={[styles.mdiaPesada, styles.mdiaPesadaTypo]}>{`Média
Pesada`}</Text>
      </View>
      <View style={styles.faxinaMdiaDiriaFaxinaPParent}>
        <Text
          style={[styles.mdiaPesada, styles.mdiaPesadaTypo]}
        >{`Faxina média - diária
Faxina pesada - semanal`}</Text>
        <Text
          style={[styles.segundaASexta, styles.mdiaPesadaTypo]}
        >{`Segunda a sexta: 05h - 18h
Sabados: 06h - 15h`}</Text>
      </View>
      <View style={[styles.pdConfirmaodedadosInner, styles.frequnciaLayout]}>
        <View style={[styles.groupWrapper, styles.frequnciaLayout]}>
          <View style={[styles.groupWrapper, styles.frequnciaLayout]}>
            <Text style={[styles.frequncia, styles.horriosTypo]}>
              Frequência
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupView, styles.groupLayout]}>
        <View style={[styles.groupContainer, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <Text style={[styles.horrios, styles.groupLayout]}>Horários</Text>
          </View>
        </View>
      </View>
      <View style={[styles.pdConfirmaodedadosInner1, styles.groupFrameLayout]}>
        <View style={[styles.groupFrame, styles.groupFrameLayout]}>
          <View style={[styles.groupFrame, styles.groupFrameLayout]}>
            <Text style={[styles.tipoDeFaxina, styles.groupFrameLayout]}>
              Tipo de Faxina
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.iphoneXstatusBarsstatusBa, styles.timePosition]}>
        <View style={styles.childPosition}>
          <View style={styles.childPosition} />
          <View style={styles.battery}>
            <View style={[styles.border, styles.borderPosition]} />
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
      <Image
        style={[styles.image16Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <Text
        style={[styles.cadastroQuaseCompleto, styles.rectangleGroupLayout]}
      >{`Cadastro quase completo!
Confirme seus dados:`}</Text>
      <View style={[styles.component91, styles.component91Layout]}>
        <View style={styles.childPosition}>
          <View style={[styles.groupChild, styles.groupBorder]} />
        </View>
        <Text style={styles.pixCadastrado} />
        <Image
          style={[styles.imageIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image.png")}
        />
      </View>
      <View style={[styles.vectorParent, styles.groupItemLayout]}>
        <Image
          style={[styles.groupItem, styles.groupItemLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-48.png")}
        />
        <View style={[styles.nomeParent, styles.parentLayout1]}>
          <Text style={[styles.nome, styles.cpfTypo]}>Nome</Text>
          <Text style={[styles.xxxxxxxxx, styles.xxxxxxxxxTypo]}>
            xxxxxxxxx
          </Text>
        </View>
        <View style={[styles.cpfParent, styles.parentLayout1]}>
          <Text style={[styles.cpf, styles.cpfTypo]}>{`CPF
`}</Text>
          <Text style={[styles.xxxxxxxxxXx, styles.xxxxxxxxxXxPosition]}>
            xxx.xxx.xxx-xx
          </Text>
        </View>
        <View style={[styles.emailParent, styles.parentLayout]}>
          <Text style={[styles.cpf, styles.cpfTypo]}>Email</Text>
          <Text style={[styles.xxxxxxxxxxxxxxxxxx, styles.xxxxxxxxxXxPosition]}>
            xxxxxxxxxxxxxxxxxx
          </Text>
        </View>
        <View style={[styles.endereoParent, styles.parentLayout]}>
          <Text style={[styles.endereo, styles.cpfTypo]}>Endereço</Text>
          <Text style={[styles.xxxxxxxxxxxxxxxxxx, styles.xxxxxxxxxXxPosition]}>
            xxxxxxxxxxxxxxxxxx
          </Text>
        </View>
      </View>
      <View style={[styles.fotoDePerfilParent, styles.fotoLayout]}>
        <Text style={[styles.fotoDePerfil, styles.fotoLayout]}>
          Foto de Perfil
        </Text>
        <Pressable
          style={[styles.perfilDiarista, styles.xxxxxxxxxXxPosition]}
          onPress={() => navigation.navigate("PDPerfilPessoalDados")}
        >
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/perfil-diarista.png")}
          />
        </Pressable>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <View
            style={[
              styles.diaristaExperienteEmLimpezaParent,
              styles.diaristaLayout,
            ]}
          >
            <Text style={[styles.diaristaExperienteEm, styles.diaristaLayout]}>
              “Diarista experiente em limpeza leve, com foco em organização e
              resultados de qualidade.”
            </Text>
            <Text style={[styles.diaristaExperienteEm, styles.diaristaLayout]}>
              “Diarista experiente em limpeza leve, com foco em organização e
              resultados de qualidade.”
            </Text>
          </View>
        </View>
        <View
          style={[styles.fotoDaLimpezaParent, styles.fotoDaLimpezaParentLayout]}
        >
          <Text style={styles.fotoDaLimpeza}>Foto da Limpeza</Text>
          <Image
            style={[
              styles.valdarealimpando1Icon,
              styles.fotoDaLimpezaParentLayout,
            ]}
            contentFit="cover"
            source={require("../assets/valdarealimpando-1.png")}
          />
        </View>
      </View>
      <View style={[styles.botoEntrarWrapper, styles.botoLayout]}>
        <View style={[styles.botoEntrar, styles.botoLayout]}>
          <View style={[styles.botoEntrarChild, styles.childPosition]} />
          <Text style={styles.concluir}>Concluir</Text>
        </View>
      </View>
      <Text style={[styles.contaBancariaCadastrada, styles.fotoDePerfilTypo]}>
        Conta bancaria cadastrada com sucesso!
      </Text>
      <View style={styles.iphoneXhomeIndicatorhomeI}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Pressable
        style={[styles.rectangleGroup, styles.rectangleGroupLayout]}
        onPress={() => {}}
      >
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
  component91Layout: {
    width: 360,
    position: "absolute",
  },
  mdiaPesadaTypo: {
    opacity: 0.5,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.bold,
    textAlign: "left",
    fontWeight: "500",
    fontSize: FontSize.regular_size,
    left: 0,
    position: "absolute",
  },
  frequnciaLayout: {
    height: 27,
    width: 111,
    position: "absolute",
  },
  horriosTypo: {
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    opacity: 0.5,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    top: 0,
    left: 0,
  },
  groupLayout: {
    width: 85,
    height: 27,
    position: "absolute",
  },
  groupFrameLayout: {
    width: 140,
    height: 27,
    position: "absolute",
  },
  timePosition: {
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  borderPosition: {
    borderWidth: 1,
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  rectangleGroupLayout: {
    height: 46,
    position: "absolute",
  },
  groupBorder: {
    borderColor: Color.colorDarkslateblue,
    borderStyle: "solid",
  },
  groupItemLayout: {
    height: 213,
    width: 429,
    position: "absolute",
  },
  parentLayout1: {
    height: 47,
    position: "absolute",
  },
  cpfTypo: {
    height: 26,
    fontFamily: FontFamily.small,
    fontSize: FontSize.bold_size,
    color: Color.color2,
    textAlign: "center",
    top: 0,
    left: 0,
    position: "absolute",
  },
  xxxxxxxxxTypo: {
    top: 21,
    height: 26,
    fontFamily: FontFamily.small,
    fontSize: FontSize.bold_size,
    color: Color.color2,
    textAlign: "center",
  },
  xxxxxxxxxXxPosition: {
    left: 6,
    position: "absolute",
  },
  parentLayout: {
    width: 167,
    left: 54,
    height: 47,
    position: "absolute",
  },
  fotoLayout: {
    width: 138,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 104,
    width: 330,
    left: 0,
    position: "absolute",
  },
  diaristaLayout: {
    width: 228,
    position: "absolute",
  },
  fotoDaLimpezaParentLayout: {
    width: 328,
    position: "absolute",
  },
  botoLayout: {
    height: 64,
    width: 261,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  fotoDePerfilTypo: {
    fontSize: FontSize.bold_size,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.bold,
    fontWeight: "500",
  },
  pdConfirmaodedadosChild: {
    top: 616,
    height: 773,
    left: 0,
    backgroundColor: Color.white,
    width: 360,
  },
  mdiaPesada: {
    top: 0,
  },
  mdiaPesadaWrapper: {
    top: 1042,
    width: 70,
    height: 38,
    left: 86,
    position: "absolute",
  },
  segundaASexta: {
    top: 84,
  },
  faxinaMdiaDiriaFaxinaPParent: {
    top: 1129,
    width: 197,
    height: 122,
    left: 84,
    position: "absolute",
  },
  frequncia: {
    height: 27,
    width: 111,
    position: "absolute",
  },
  groupWrapper: {
    top: 0,
    left: 0,
  },
  pdConfirmaodedadosInner: {
    top: 1091,
    left: 86,
  },
  horrios: {
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    opacity: 0.5,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    top: 0,
    left: 0,
  },
  groupContainer: {
    top: 0,
    left: 0,
  },
  groupView: {
    top: 1178,
    left: 86,
  },
  tipoDeFaxina: {
    fontFamily: FontFamily.manropeExtraBold,
    fontWeight: "800",
    fontSize: FontSize.size_xl,
    opacity: 0.5,
    textAlign: "left",
    color: Color.colorDarkslateblue,
    top: 0,
    left: 0,
  },
  groupFrame: {
    top: 0,
    left: 0,
  },
  pdConfirmaodedadosInner1: {
    top: 1004,
    left: 84,
  },
  border: {
    width: "90.17%",
    right: "9.83%",
    borderRadius: Border.br_10xs_7,
    borderColor: Color.black,
    opacity: 0.35,
    borderStyle: "solid",
    borderWidth: 1,
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
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.black,
    textAlign: "center",
    left: "0%",
    fontSize: FontSize.regular_size,
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
  image16Icon: {
    height: "11.23%",
    width: "26.39%",
    top: "2.38%",
    right: "75%",
    bottom: "86.4%",
    left: "-1.39%",
  },
  cadastroQuaseCompleto: {
    top: 158,
    left: 44,
    width: 272,
    textAlign: "center",
    fontSize: FontSize.size_xl,
    height: 46,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.bold,
    fontWeight: "500",
  },
  groupChild: {
    backgroundColor: Color.white1,
    borderWidth: 1,
    bottom: "0%",
    height: "100%",
    left: "0%",
    top: "0%",
    position: "absolute",
    right: "0%",
    width: "100%",
    borderRadius: Border.br_21xl,
    borderColor: Color.colorDarkslateblue,
  },
  pixCadastrado: {
    height: "38.02%",
    width: "44.17%",
    top: "53.72%",
    left: "32.78%",
    color: Color.color2,
    textAlign: "center",
    display: "none",
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    position: "absolute",
  },
  imageIcon: {
    height: "42.98%",
    width: "14.44%",
    top: "41.32%",
    right: "73.61%",
    bottom: "15.7%",
    left: "11.94%",
  },
  component91: {
    top: -22,
    left: -1,
    height: 121,
  },
  groupItem: {
    borderRadius: Border.br_xl,
    top: 0,
    left: 0,
  },
  nome: {
    width: 64,
  },
  xxxxxxxxx: {
    left: 10,
    width: 79,
    position: "absolute",
  },
  nomeParent: {
    top: 22,
    left: 48,
    width: 89,
  },
  cpf: {
    width: 46,
  },
  xxxxxxxxxXx: {
    width: 119,
    top: 21,
    height: 26,
    fontFamily: FontFamily.small,
    fontSize: FontSize.bold_size,
    color: Color.color2,
    textAlign: "center",
  },
  cpfParent: {
    top: 25,
    left: 237,
    width: 125,
  },
  xxxxxxxxxxxxxxxxxx: {
    width: 161,
    top: 21,
    height: 26,
    fontFamily: FontFamily.small,
    fontSize: FontSize.bold_size,
    color: Color.color2,
    textAlign: "center",
  },
  emailParent: {
    top: 80,
  },
  endereo: {
    width: 83,
  },
  endereoParent: {
    top: 141,
  },
  vectorParent: {
    top: 395,
    left: -36,
  },
  fotoDePerfil: {
    top: 129,
    height: 31,
    fontSize: FontSize.bold_size,
    textAlign: "center",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    left: 0,
  },
  icon: {
    borderRadius: Border.br_61xl,
    overflow: "hidden",
    height: "100%",
    width: "100%",
  },
  perfilDiarista: {
    height: 125,
    width: 125,
    top: 0,
  },
  fotoDePerfilParent: {
    top: 227,
    left: 111,
    height: 160,
  },
  groupInner: {
    shadowColor: "rgba(96, 148, 238, 0.3)",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 15,
    elevation: 15,
    borderBottomRightRadius: Border.br_11xl,
    borderBottomLeftRadius: Border.br_11xl,
    backgroundColor: Color.colorCornflowerblue_200,
    borderBottomWidth: 1,
    shadowOpacity: 1,
    borderColor: Color.colorDarkslateblue,
    borderStyle: "solid",
    top: 0,
  },
  diaristaExperienteEm: {
    fontSize: FontSize.size_mini,
    textDecoration: "underline",
    fontStyle: "italic",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslateblue_200,
    textAlign: "justify",
    fontWeight: "500",
    width: 228,
    top: 0,
    left: 0,
  },
  diaristaExperienteEmLimpezaParent: {
    top: 27,
    height: 54,
    left: 86,
  },
  rectangleParent: {
    top: 225,
  },
  fotoDaLimpeza: {
    left: 60,
    textAlign: "right",
    width: 157,
    height: 34,
    fontFamily: FontFamily.small,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslateblue,
    top: 0,
    position: "absolute",
  },
  valdarealimpando1Icon: {
    top: 52,
    height: 192,
    borderRadius: Border.br_xl,
    left: 0,
  },
  fotoDaLimpezaParent: {
    left: 103,
    height: 244,
    top: 0,
  },
  groupParent: {
    top: 626,
    left: -58,
    width: 431,
    height: 329,
    position: "absolute",
  },
  botoEntrarChild: {
    shadowColor: "rgba(21, 70, 160, 0.5)",
    shadowOffset: {
      width: 0,
      height: 24,
    },
    shadowRadius: 48,
    elevation: 48,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
  },
  concluir: {
    top: "32.81%",
    left: "37.55%",
    fontSize: FontSize.size_lg,
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    color: Color.white,
    textAlign: "left",
    position: "absolute",
  },
  botoEntrar: {
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    top: 0,
    left: 0,
  },
  botoEntrarWrapper: {
    top: 1311,
    left: 41,
  },
  contaBancariaCadastrada: {
    top: 37,
    left: 93,
    width: 254,
    height: 37,
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
    top: "74.2%",
    right: "-0.83%",
    bottom: "21.86%",
    left: "0.83%",
    position: "absolute",
    width: "100%",
  },
  instanceChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue,
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
  },
  pdConfirmaodedados: {
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.white,
    borderRadius: Border.br_21xl,
  },
});

export default PDConfirmaoDeDados1;
