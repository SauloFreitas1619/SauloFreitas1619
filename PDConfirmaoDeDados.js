import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const PDConfirmaoDeDados = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdConfirmaodedados}>
      <View
        style={[styles.pdConfirmaodedadosChild, styles.rectangleParentPosition]}
      />
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
      <Image
        style={[styles.image16Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-16.png")}
      />
      <Text
        style={[styles.cadastroQuaseCompleto, styles.groupPressableLayout]}
      >{`Cadastro quase completo!
Confirme seus dados:`}</Text>
      <View style={[styles.component91, styles.rectangleParentPosition]}>
        <View style={[styles.iphoneXstatusBarsstatusBa1, styles.childPosition]}>
          <View style={styles.groupChild} />
        </View>
        <Text style={styles.pixCadastrado}>Pix Cadastrado!</Text>
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
        <View style={styles.nomeParent}>
          <Text style={[styles.nome, styles.cpfTypo]}>Nome</Text>
          <Text style={[styles.xxxxxxxxx, styles.xxxxxxxxxTypo]}>
            xxxxxxxxx
          </Text>
        </View>
        <View style={styles.cpfParent}>
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
        <View style={styles.rectangleParent}>
          <View style={styles.groupInner} />
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
          <Text style={[styles.fotoDaLimpeza, styles.limpezaTypo]}>
            Foto da Limpeza
          </Text>
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
      <Pressable
        style={[styles.botoEntrar, styles.botoShadowBox]}
        onPress={() => {}}
      >
        <View style={[styles.botoEntrarChild, styles.botoShadowBox]} />
        <Text style={styles.concluir}>Concluir</Text>
      </Pressable>
      <View style={[styles.groupContainer, styles.rectangleParentPosition]}>
        <View style={[styles.groupWrapper, styles.groupLayout2]}>
          <View style={[styles.groupFrame, styles.groupLayout2]}>
            <View style={[styles.groupFrame, styles.groupLayout2]}>
              <Text style={[styles.reasDeLimpeza, styles.limpezaTypo]}>
                Áreas de Limpeza
              </Text>
              <View style={[styles.rectangleGroup, styles.groupLayout1]}>
                <View
                  style={[styles.rectangleView, styles.groupChildShadowBox2]}
                />
                <Text style={[styles.cozinha, styles.cozinhaPosition]}>
                  Cozinha
                </Text>
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require("../assets/ellipse-273.png")}
                />
              </View>
              <View style={[styles.rectangleContainer, styles.groupLayout1]}>
                <View
                  style={[styles.groupChild1, styles.groupChildShadowBox2]}
                />
                <Text style={[styles.cozinha, styles.cozinhaPosition]}>
                  Varanda
                </Text>
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require("../assets/ellipse-273.png")}
                />
              </View>
              <View style={[styles.groupView, styles.groupLayout]}>
                <View style={[styles.groupChild3, styles.groupLayout]} />
                <Text style={[styles.escritrio, styles.cozinhaPosition]}>
                  Escritório
                </Text>
                <Image
                  style={styles.ellipseIcon}
                  contentFit="cover"
                  source={require("../assets/ellipse-273.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.rectangleParent1, styles.rectangleParentPosition]}>
          <View style={styles.groupChild5} />
          <Text style={[styles.frequnciaDeLimpeza, styles.limpezaTypo]}>
            Frequência de Limpeza
          </Text>
          <Text style={[styles.dirio, styles.limpezaTypo]}>Diário</Text>
        </View>
      </View>
      <View
        style={[styles.tipoDeLimpezaParent, styles.rectangleParentPosition]}
      >
        <Text style={[styles.tipoDeLimpeza, styles.limpezaTypo]}>
          Tipo de Limpeza
        </Text>
        <View style={[styles.rectangleParent2, styles.rectangleParentPosition]}>
          <View style={styles.groupChild6} />
          <Text style={styles.leve}>Leve</Text>
        </View>
      </View>
      <View style={styles.horrioDePrefernciaParent}>
        <Text style={[styles.horrioDePreferncia, styles.text3Typo]}>
          Horário de Preferência
        </Text>
        <View style={[styles.rectangleParent3, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text1, styles.textTypo1]}>12:00</Text>
        </View>
        <View style={[styles.rectangleParent4, styles.rectangleParentLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.text2, styles.textTypo1]}>18:00</Text>
        </View>
        <Text style={[styles.text3, styles.text3Typo]}>{`-
`}</Text>
      </View>
      <View style={styles.groupParent1}>
        <View style={[styles.rectangleParent5, styles.groupChild9Layout]}>
          <View style={[styles.groupChild9, styles.groupChildShadowBox]} />
          <Text style={[styles.passadoria, styles.passadoriaTypo]}>
            Passadoria
          </Text>
          <Text style={[styles.text4, styles.textTypo]}>+</Text>
        </View>
        <View style={[styles.rectangleParent6, styles.groupChild10Layout]}>
          <View style={[styles.groupChild10, styles.groupChild10Layout]} />
          <Text style={[styles.limparJanelas, styles.passadoriaTypo]}>
            Limpar Janelas
          </Text>
          <Text style={[styles.text5, styles.textTypo]}>+</Text>
        </View>
        <Text style={[styles.serviosAdicionais, styles.text3Typo]}>
          Serviços Adicionais
        </Text>
      </View>
      <Pressable
        style={styles.icons8LeftArrow10022}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/icons8leftarrow1002-2.png")}
        />
      </Pressable>
      <View style={styles.iphoneXhomeIndicatorhomeI}>
        <View style={styles.iphoneXhomeIndicatorhomeIChild} />
      </View>
      <Pressable
        style={[styles.groupPressable, styles.groupPressableLayout]}
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
  rectangleParentPosition: {
    width: 360,
    left: 0,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  groupPressableLayout: {
    height: 46,
    position: "absolute",
  },
  groupItemLayout: {
    height: 213,
    width: 429,
    position: "absolute",
  },
  cpfTypo: {
    height: 26,
    fontFamily: FontFamily.small,
    fontSize: FontSize.bold_size,
    top: 0,
    color: Color.color2,
    textAlign: "center",
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
  diaristaLayout: {
    width: 228,
    position: "absolute",
  },
  fotoDaLimpezaParentLayout: {
    width: 328,
    position: "absolute",
  },
  limpezaTypo: {
    height: 34,
    textAlign: "right",
    fontFamily: FontFamily.small,
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  botoShadowBox: {
    shadowOpacity: 1,
    position: "absolute",
  },
  groupLayout2: {
    height: 141,
    width: 278,
    top: 0,
    position: "absolute",
  },
  groupLayout1: {
    width: 122,
    position: "absolute",
  },
  groupChildShadowBox2: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    borderRadius: Border.br_11xl,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    backgroundColor: Color.colorCornflowerblue_200,
    shadowOpacity: 1,
    top: 0,
    borderStyle: "solid",
    left: 0,
  },
  cozinhaPosition: {
    left: 32,
    top: 7,
    fontSize: FontSize.size_lg,
    height: 34,
    textAlign: "right",
    fontFamily: FontFamily.small,
    color: Color.colorDarkslateblue,
    position: "absolute",
  },
  groupLayout: {
    width: 130,
    position: "absolute",
  },
  text3Typo: {
    height: 33,
    textAlign: "right",
    fontFamily: FontFamily.small,
    color: Color.colorDarkslateblue,
    position: "absolute",
  },
  rectangleParentLayout: {
    width: 100,
    height: 49,
    position: "absolute",
  },
  textTypo1: {
    width: 59,
    fontSize: FontSize.size_lgi,
    height: 33,
    textAlign: "right",
    fontFamily: FontFamily.small,
    color: Color.colorDarkslateblue,
    position: "absolute",
  },
  groupChild9Layout: {
    width: 179,
    position: "absolute",
  },
  groupChildShadowBox: {
    height: 43,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    borderRadius: Border.br_11xl,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    backgroundColor: Color.colorCornflowerblue_200,
    shadowOpacity: 1,
    top: 0,
    borderStyle: "solid",
    left: 0,
  },
  passadoriaTypo: {
    top: 9,
    fontSize: FontSize.size_lg,
    height: 34,
    textAlign: "right",
    fontFamily: FontFamily.small,
    color: Color.colorDarkslateblue,
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_11xl,
    textAlign: "right",
    height: 47,
    color: Color.colorDarkslateblue,
    position: "absolute",
  },
  groupChild10Layout: {
    width: 200,
    position: "absolute",
  },
  pdConfirmaodedadosChild: {
    top: 616,
    height: 773,
    backgroundColor: Color.white,
    width: 360,
  },
  iphoneXstatusBarsstatusBa1: {
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
    width: 54,
    display: "none",
    left: 21,
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
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.bold,
    height: 46,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
  },
  groupChild: {
    backgroundColor: Color.white1,
    borderColor: Color.colorDarkslateblue,
    borderWidth: 1,
    borderStyle: "solid",
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    borderRadius: Border.br_21xl,
  },
  pixCadastrado: {
    height: "38.02%",
    width: "44.17%",
    top: "53.72%",
    left: "32.78%",
    color: Color.color2,
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    fontSize: FontSize.size_xl,
    textAlign: "center",
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
    top: -17,
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
    height: 47,
    position: "absolute",
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
    height: 47,
    position: "absolute",
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
    width: 138,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    textAlign: "center",
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
    borderBottomWidth: 1,
    backgroundColor: Color.colorCornflowerblue_200,
    shadowOpacity: 1,
    height: 104,
    width: 330,
    top: 0,
    borderColor: Color.colorDarkslateblue,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  diaristaExperienteEm: {
    fontSize: FontSize.size_mini,
    textDecoration: "underline",
    fontStyle: "italic",
    fontFamily: FontFamily.interMedium,
    color: Color.colorDarkslateblue_200,
    textAlign: "justify",
    top: 0,
    fontWeight: "500",
    width: 228,
    left: 0,
  },
  diaristaExperienteEmLimpezaParent: {
    top: 27,
    left: 86,
    height: 54,
  },
  rectangleParent: {
    top: 225,
    height: 104,
    width: 330,
    left: 0,
    position: "absolute",
  },
  fotoDaLimpeza: {
    left: 60,
    width: 157,
    top: 0,
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
    borderRadius: Border.br_xl,
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
  },
  concluir: {
    top: "32.81%",
    left: "37.55%",
    fontWeight: "300",
    fontFamily: FontFamily.manropeLight,
    color: Color.white,
    textAlign: "left",
    fontSize: FontSize.size_lg,
    position: "absolute",
  },
  botoEntrar: {
    top: 1678,
    left: 49,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    width: 261,
    height: 64,
  },
  reasDeLimpeza: {
    left: 56,
    width: 165,
    top: 0,
  },
  rectangleView: {
    width: 122,
    position: "absolute",
  },
  cozinha: {
    width: 69,
  },
  ellipseIcon: {
    top: 16,
    left: 13,
    width: 9,
    height: 10,
    position: "absolute",
  },
  rectangleGroup: {
    height: 41,
    top: 42,
    left: 0,
  },
  groupChild1: {
    width: 122,
    position: "absolute",
  },
  rectangleContainer: {
    left: 156,
    height: 41,
    top: 42,
  },
  groupChild3: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    borderRadius: Border.br_11xl,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    backgroundColor: Color.colorCornflowerblue_200,
    shadowOpacity: 1,
    top: 0,
    borderStyle: "solid",
    left: 0,
  },
  escritrio: {
    width: 80,
  },
  groupView: {
    top: 100,
    left: 74,
    height: 41,
  },
  groupFrame: {
    left: 0,
  },
  groupWrapper: {
    left: 39,
  },
  groupChild5: {
    height: 49,
    borderRadius: Border.br_mini,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    shadowOpacity: 1,
    top: 21,
    borderStyle: "solid",
    width: 360,
    left: 0,
    position: "absolute",
  },
  frequnciaDeLimpeza: {
    left: 66,
    width: 215,
    top: 0,
  },
  dirio: {
    top: 38,
    left: 149,
    width: 62,
  },
  rectangleParent1: {
    top: 194,
    height: 72,
  },
  groupContainer: {
    top: 1375,
    height: 266,
  },
  tipoDeLimpeza: {
    left: 94,
    width: 160,
    top: 0,
  },
  groupChild6: {
    borderRadius: Border.br_mini,
    height: 40,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    shadowOpacity: 1,
    top: 0,
    borderStyle: "solid",
    width: 360,
    left: 0,
    position: "absolute",
  },
  leve: {
    left: 148,
    width: 53,
    top: 7,
    height: 34,
    textAlign: "right",
    fontFamily: FontFamily.small,
    color: Color.colorDarkslateblue,
    fontSize: FontSize.size_xl,
    position: "absolute",
  },
  rectangleParent2: {
    top: 30,
    height: 41,
  },
  tipoDeLimpezaParent: {
    top: 997,
    height: 71,
  },
  horrioDePreferncia: {
    left: 1,
    width: 223,
    top: 0,
    fontSize: FontSize.size_xl,
    height: 33,
  },
  groupChildShadowBox1: {
    borderBottomWidth: 3,
    width: 100,
    height: 49,
    borderColor: Color.color2,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    backgroundColor: Color.colorCornflowerblue_200,
    shadowOpacity: 1,
    borderRadius: Border.br_xl,
    top: 0,
    borderStyle: "solid",
    left: 0,
    position: "absolute",
  },
  text1: {
    top: 10,
    left: 14,
  },
  rectangleParent3: {
    top: 41,
    left: 0,
  },
  text2: {
    top: 11,
    left: 15,
  },
  rectangleParent4: {
    top: 40,
    left: 141,
  },
  text3: {
    left: 91,
    fontSize: FontSize.size_17xl,
    width: 35,
    top: 42,
  },
  horrioDePrefernciaParent: {
    top: 1101,
    left: 58,
    width: 241,
    height: 90,
    position: "absolute",
  },
  groupChild9: {
    width: 179,
    position: "absolute",
  },
  passadoria: {
    left: 59,
    width: 92,
  },
  text4: {
    top: 1,
    width: 28,
    left: 21,
  },
  rectangleParent5: {
    height: 48,
    top: 45,
    left: 0,
  },
  groupChild10: {
    height: 43,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    borderRadius: Border.br_11xl,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    backgroundColor: Color.colorCornflowerblue_200,
    shadowOpacity: 1,
    top: 0,
    borderStyle: "solid",
    left: 0,
  },
  limparJanelas: {
    left: 12,
    width: 129,
  },
  text5: {
    left: 140,
    width: 29,
    top: 0,
  },
  rectangleParent6: {
    left: 205,
    top: 45,
    height: 47,
  },
  serviosAdicionais: {
    left: 106,
    width: 180,
    top: 0,
    fontSize: FontSize.size_xl,
    height: 33,
  },
  groupParent1: {
    top: 1240,
    left: -21,
    width: 405,
    height: 93,
    position: "absolute",
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  icons8LeftArrow10022: {
    left: 25,
    top: 116,
    width: 30,
    height: 30,
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
    top: "96%",
    right: "-0.83%",
    bottom: "0.06%",
    left: "0.83%",
    position: "absolute",
    width: "100%",
  },
  instanceChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue,
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
  },
  groupPressable: {
    top: 251,
    left: 327,
    width: 33,
  },
  pdConfirmaodedados: {
    flex: 1,
    maxWidth: "100%",
    borderRadius: Border.br_21xl,
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PDConfirmaoDeDados;
