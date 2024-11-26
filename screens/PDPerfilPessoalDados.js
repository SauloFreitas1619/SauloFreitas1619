import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const PDPerfilPessoalDados = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdPerfilpessoaldados}>
      <View style={styles.pdPerfilpessoaldadosChild} />
      <View style={styles.infocasa}>
        <View style={[styles.casa, styles.casaLayout]}>
          <View style={[styles.sobre, styles.casaLayout]}>
            <View style={[styles.sobreChild, styles.borderPosition]} />
            <Text style={[styles.diaristaExperienteEm, styles.reviewFlexBox]}>
              Diarista experiente em limpeza leve, com foco em organização e
              resultados de qualidade.”
            </Text>
          </View>
        </View>
        <Image
          style={[styles.edit3Icon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/edit-3.png")}
        />
        <Text style={[styles.sobre1, styles.limpezaClr]}>Sobre</Text>
      </View>
      <View style={[styles.info, styles.infoLayout]}>
        <View style={[styles.valdaforzgmailcomParent, styles.infoLayout]}>
          <Text style={[styles.valdaforzgmailcom, styles.reviewTypo]}>
            valdaforz@gmail.com
          </Text>
          <Text style={[styles.eMail, styles.eMailTypo]}>E-mail</Text>
        </View>
        <View style={[styles.parent, styles.parentPosition]}>
          <Text style={[styles.valdaforzgmailcom, styles.reviewTypo]}>
            111.111.111-11
          </Text>
          <Text style={[styles.eMail, styles.eMailTypo]}>CPF</Text>
        </View>
        <View style={styles.valdaDemenkoParent}>
          <Text style={[styles.valdaforzgmailcom, styles.reviewTypo]}>
            Valda Demenko
          </Text>
          <Text style={[styles.eMail, styles.eMailTypo]}>Nome</Text>
        </View>
        <Text style={[styles.personalInfo, styles.config1Typo]}>
          Personal info
        </Text>
      </View>
      <View style={styles.topo}>
        <View style={styles.topoChild} />
        <Pressable
          style={styles.botaoReview}
          onPress={() => navigation.navigate("PDPerfilPessoalReview")}
        >
          <View style={[styles.botaoReviewChild, styles.childPosition]} />
          <Text style={[styles.review, styles.reviewTypo]}>Review</Text>
        </Pressable>
        <Image
          style={[styles.fotoIcon, styles.iconPosition]}
          contentFit="cover"
          source={require("../assets/foto.png")}
        />
        <View style={styles.dados}>
          <View style={[styles.dadosChild, styles.childPosition]} />
          <Text style={[styles.dados1, styles.reviewTypo]}>Dados</Text>
        </View>
        <Text style={[styles.perfil, styles.timeClr]}>Valda Demenko</Text>
        <Image
          style={[styles.editar1Icon, styles.image5Layout]}
          contentFit="cover"
          source={require("../assets/editar-1.png")}
        />
        <Pressable style={styles.seta} onPress={() => navigation.goBack()}>
          <View style={[styles.setaChild, styles.childPosition]} />
          <Image
            style={[styles.setaItem, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
        </Pressable>
        <View style={styles.iphoneXstatusBarsstatusBa}>
          <View style={[styles.setaChild, styles.childPosition]}>
            <View style={[styles.setaChild, styles.childPosition]} />
            <View style={styles.battery}>
              <View style={[styles.border, styles.borderPosition]} />
              <Image
                style={[styles.capIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/cap1.png")}
              />
              <View style={styles.capacity} />
            </View>
            <Image
              style={styles.wifiIcon}
              contentFit="cover"
              source={require("../assets/wifi1.png")}
            />
            <Image
              style={styles.cellularConnectionIcon}
              contentFit="cover"
              source={require("../assets/cellular-connection1.png")}
            />
            <View style={styles.timeStyle}>
              <Text style={[styles.time, styles.timeClr]}>
                <Text style={styles.text1}>9:4</Text>1
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={styles.estrelas1Icon}
        contentFit="cover"
        source={require("../assets/estrelas-1.png")}
      />
      <Image
        style={[styles.pdPerfilpessoaldadosItem, styles.image5Layout]}
        contentFit="cover"
        source={require("../assets/group-41.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout1]}>
        <View style={[styles.groupWrapper, styles.groupLayout1]}>
          <View style={[styles.groupWrapper, styles.groupLayout1]}>
            <View style={[styles.groupWrapper, styles.groupLayout1]}>
              <Text style={[styles.reasDeLimpeza, styles.text6Typo]}>
                Áreas de Limpeza
              </Text>
              <Image
                style={[styles.image40Icon, styles.image40IconLayout]}
                contentFit="cover"
                source={require("../assets/image-40.png")}
              />
              <Image
                style={[styles.image41Icon, styles.image40IconLayout]}
                contentFit="cover"
                source={require("../assets/image-40.png")}
              />
              <View style={[styles.rectangleParent, styles.groupLayout]}>
                <View
                  style={[styles.groupChild, styles.groupChildShadowBox2]}
                />
                <Text style={[styles.cozinha, styles.limpezaLayout]}>
                  Cozinha
                </Text>
                <Image
                  style={styles.groupItem}
                  contentFit="cover"
                  source={require("../assets/ellipse-273.png")}
                />
              </View>
              <View style={[styles.rectangleGroup, styles.groupLayout]}>
                <View
                  style={[styles.groupInner, styles.groupChildShadowBox2]}
                />
                <Text style={[styles.cozinha, styles.limpezaLayout]}>
                  Varanda
                </Text>
                <Image
                  style={styles.groupItem}
                  contentFit="cover"
                  source={require("../assets/ellipse-273.png")}
                />
              </View>
              <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
                <View style={[styles.rectangleView, styles.rectangleLayout]} />
                <Text style={[styles.escritrio, styles.limpezaLayout]}>
                  Escritório
                </Text>
                <Image
                  style={styles.groupItem}
                  contentFit="cover"
                  source={require("../assets/ellipse-273.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frequnciaDeLimpezaParent, styles.parentPosition]}>
          <Text style={[styles.frequnciaDeLimpeza, styles.limpezaLayout]}>
            Frequência de Limpeza
          </Text>
          <View style={[styles.groupView, styles.groupViewLayout]}>
            <View style={styles.groupChildShadowBox1} />
            <Text style={[styles.dirio, styles.image40IconPosition]}>
              Diário
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.groupParent1, styles.groupParentPosition]}>
        <View style={[styles.rectangleParent1, styles.groupChildLayout]}>
          <View style={[styles.groupChild3, styles.groupChildLayout]} />
          <Text style={[styles.passadoria, styles.limpezaLayout]}>
            Passadoria
          </Text>
          <Text style={[styles.text2, styles.textTypo1]}>+</Text>
        </View>
        <View style={[styles.rectangleParent2, styles.groupChild4Layout]}>
          <View style={[styles.groupChild4, styles.groupChild4Layout]} />
          <Text style={[styles.limparJanelas, styles.limpezaLayout]}>
            Limpar Janelas
          </Text>
          <Text style={[styles.text3, styles.textTypo1]}>+</Text>
        </View>
        <View
          style={[styles.serviosAdicionaisParent, styles.serviosParentLayout]}
        >
          <Text style={[styles.serviosAdicionais, styles.serviosParentLayout]}>
            Serviços Adicionais
          </Text>
          <Image
            style={[styles.image40Icon1, styles.image40IconPosition]}
            contentFit="cover"
            source={require("../assets/image-40.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent2, styles.groupParentPosition]}>
        <View style={[styles.rectangleParent3, styles.groupChildLayout]}>
          <View style={[styles.groupChild5, styles.groupChildShadowBox]} />
          <Text style={[styles.text4, styles.textTypo]}>12:00</Text>
        </View>
        <View style={[styles.rectangleParent4, styles.groupChild6Layout]}>
          <View style={[styles.groupChild6, styles.groupChild6Layout]} />
          <Text style={[styles.text5, styles.textTypo]}>18:00</Text>
        </View>
        <Text style={[styles.text6, styles.serviosParentLayout]}>{`-
`}</Text>
      </View>
      <View
        style={[styles.horrioDePrefernciaParent, styles.serviosParentLayout]}
      >
        <Text style={[styles.horrioDePreferncia, styles.serviosParentLayout]}>
          Horário de Preferência
        </Text>
        <Image
          style={[styles.image40Icon2, styles.image40IconPosition]}
          contentFit="cover"
          source={require("../assets/image-401.png")}
        />
      </View>
      <View style={styles.tipoDeLimpezaParent}>
        <Text style={[styles.tipoDeLimpeza, styles.limpezaLayout]}>
          Tipo de Limpeza
        </Text>
        <View style={[styles.rectangleParent5, styles.groupViewLayout]}>
          <View style={styles.groupChildShadowBox1} />
          <Text style={[styles.leve, styles.limpezaLayout]}>Leve</Text>
        </View>
      </View>
      <View style={[styles.home, styles.homeLayout]}>
        <View style={[styles.homeChild, styles.homeLayout]} />
        <View style={styles.iphoneXhomeIndicatorhomeI}>
          <View
            style={[
              styles.iphoneXhomeIndicatorhomeIChild,
              styles.homeAlt1ParentPosition,
            ]}
          />
        </View>
        <View style={[styles.homeAlt1Parent, styles.homeAlt1ParentPosition]}>
          <Image
            style={[styles.homeAlt1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/homealt-1.png")}
          />
          <Pressable style={styles.component62} onPress={() => {}}>
            <Image
              style={[styles.setting2Icon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/setting-2.png")}
            />
            <View style={styles.config}>
              <Text style={[styles.config1, styles.config1Typo]}>Config.</Text>
            </View>
          </Pressable>
          <Pressable style={styles.image6} onPress={() => {}}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-6.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.image5, styles.image5Layout]}
            onPress={() => navigation.navigate("PDModoMatch")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/image-5.png")}
            />
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.groupPressable} onPress={() => {}}>
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
  casaLayout: {
    height: 140,
    width: 310,
    left: 0,
    position: "absolute",
  },
  borderPosition: {
    borderWidth: 1,
    borderStyle: "solid",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  reviewFlexBox: {
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  iconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  limpezaClr: {
    opacity: 0.5,
    color: Color.black,
    left: 0,
  },
  infoLayout: {
    width: 244,
    position: "absolute",
  },
  reviewTypo: {
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.bold_size,
  },
  eMailTypo: {
    textAlign: "left",
    fontFamily: FontFamily.small,
    top: 0,
    position: "absolute",
  },
  parentPosition: {
    width: 165,
    left: 0,
    position: "absolute",
  },
  config1Typo: {
    fontSize: FontSize.small_size,
    textAlign: "left",
    fontFamily: FontFamily.small,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
    top: "0%",
    height: "100%",
  },
  timeClr: {
    color: Color.white,
    position: "absolute",
  },
  image5Layout: {
    width: 30,
    height: 30,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  groupLayout1: {
    width: 288,
    position: "absolute",
  },
  text6Typo: {
    textAlign: "right",
    fontFamily: FontFamily.small,
    top: 0,
  },
  image40IconLayout: {
    height: 12,
    width: 13,
  },
  groupLayout: {
    width: 122,
    position: "absolute",
  },
  groupChildShadowBox2: {
    borderBottomWidth: 2,
    borderColor: Color.color2,
    backgroundColor: Color.colorCornflowerblue_200,
    borderRadius: Border.br_11xl,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    borderStyle: "solid",
    shadowOpacity: 1,
    left: 0,
  },
  limpezaLayout: {
    height: 34,
    textAlign: "right",
  },
  rectangleLayout: {
    width: 130,
    position: "absolute",
  },
  groupViewLayout: {
    width: 151,
    position: "absolute",
  },
  image40IconPosition: {
    top: 6,
    position: "absolute",
  },
  groupParentPosition: {
    width: 405,
    left: -21,
    position: "absolute",
  },
  groupChildLayout: {
    width: 179,
    position: "absolute",
  },
  textTypo1: {
    fontSize: FontSize.size_11xl,
    height: 47,
    textAlign: "right",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    top: 0,
    position: "absolute",
  },
  groupChild4Layout: {
    width: 200,
    position: "absolute",
  },
  serviosParentLayout: {
    height: 33,
    position: "absolute",
  },
  groupChildShadowBox: {
    borderBottomWidth: 3,
    borderColor: Color.color2,
    backgroundColor: Color.colorCornflowerblue_200,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    top: 0,
    left: 0,
  },
  textTypo: {
    width: 59,
    height: 33,
    top: 6,
    fontSize: FontSize.size_lg,
    textAlign: "right",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  groupChild6Layout: {
    width: 185,
    position: "absolute",
  },
  homeLayout: {
    height: 96,
    width: 416,
    position: "absolute",
  },
  homeAlt1ParentPosition: {
    left: "50%",
    position: "absolute",
  },
  pdPerfilpessoaldadosChild: {
    top: 192,
    width: 358,
    height: 1162,
    backgroundColor: Color.white1,
    left: 0,
    position: "absolute",
  },
  sobreChild: {
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowRadius: 48,
    elevation: 48,
    borderColor: Color.colorDarkslateblue,
    borderRadius: Border.br_xl,
    borderStyle: "solid",
    shadowOpacity: 1,
    shadowColor: "rgba(21, 70, 160, 0.1)",
    right: "0%",
    backgroundColor: Color.white1,
    width: "100%",
  },
  diaristaExperienteEm: {
    height: "90.71%",
    width: "90.65%",
    left: "4.52%",
    textDecoration: "underline",
    textAlign: "justify",
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.bold_size,
    display: "flex",
    top: "0%",
  },
  sobre: {
    top: 0,
    backgroundColor: Color.white1,
  },
  casa: {
    top: 37,
  },
  edit3Icon: {
    left: 45,
    height: 15,
    width: 15,
    top: 4,
  },
  sobre1: {
    textAlign: "left",
    fontFamily: FontFamily.small,
    top: 0,
    position: "absolute",
    fontSize: FontSize.size_mini,
    opacity: 0.5,
  },
  infocasa: {
    top: 442,
    height: 177,
    width: 310,
    left: 29,
    position: "absolute",
  },
  valdaforzgmailcom: {
    left: 83,
    color: Color.black,
    top: 0,
    position: "absolute",
  },
  eMail: {
    fontSize: FontSize.regular_size,
    color: Color.black,
    left: 0,
  },
  valdaforzgmailcomParent: {
    top: 90,
    height: 22,
    left: 0,
  },
  parent: {
    top: 61,
    height: 22,
  },
  valdaDemenkoParent: {
    top: 32,
    width: 198,
    height: 22,
    left: 0,
    position: "absolute",
  },
  personalInfo: {
    opacity: 0.5,
    color: Color.black,
    left: 0,
    top: 0,
  },
  info: {
    top: 311,
    height: 112,
    left: 32,
  },
  topoChild: {
    left: 3,
    width: 375,
    height: 192,
    top: 0,
    position: "absolute",
  },
  botaoReviewChild: {
    backgroundColor: Color.colorDarkslateblue_100,
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  review: {
    height: "83.33%",
    width: "66.67%",
    top: "10%",
    left: "18.89%",
    color: Color.white1,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  botaoReview: {
    top: 159,
    left: 283,
    width: 90,
    height: 30,
    position: "absolute",
  },
  fotoIcon: {
    top: 104,
    left: 119,
    borderRadius: Border.br_61xl,
    width: 147,
    height: 147,
  },
  dadosChild: {
    borderTopLeftRadius: Border.br_mini,
    borderTopRightRadius: Border.br_mini,
    left: "0%",
    right: "0%",
    backgroundColor: Color.white1,
    position: "absolute",
    width: "100%",
  },
  dados1: {
    height: "75.69%",
    width: "52.06%",
    top: "9.23%",
    left: "24.95%",
    color: Color.colorDarkslateblue_100,
    alignItems: "center",
    display: "flex",
    position: "absolute",
  },
  dados: {
    height: "12.95%",
    width: "24.39%",
    top: "65.26%",
    right: "75.61%",
    bottom: "21.79%",
    left: "0%",
    position: "absolute",
  },
  perfil: {
    top: 71,
    left: 132,
    width: 131,
    height: 24,
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    textAlign: "left",
    fontSize: FontSize.bold_size,
  },
  editar1Icon: {
    left: 331,
    top: 45,
    width: 30,
  },
  setaChild: {
    left: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  setaItem: {
    height: "37.5%",
    width: "58.42%",
    top: "31.25%",
    right: "16.58%",
    bottom: "31.25%",
    left: "25%",
  },
  seta: {
    top: 55,
    left: 27,
    width: 38,
    height: 24,
    position: "absolute",
  },
  border: {
    width: "90.17%",
    right: "9.83%",
    borderRadius: Border.br_10xs_7,
    borderColor: Color.white,
    opacity: 0.35,
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
    position: "absolute",
    backgroundColor: Color.white,
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
  text1: {
    letterSpacing: 0,
  },
  time: {
    marginTop: -8.35,
    top: "50%",
    fontWeight: "600",
    fontFamily: FontFamily.openSansSemiBold,
    textAlign: "center",
    fontSize: FontSize.regular_size,
    left: "0%",
    width: "100%",
  },
  timeStyle: {
    height: "47.81%",
    top: "29.56%",
    bottom: "22.63%",
    width: 54,
    left: 21,
    position: "absolute",
  },
  iphoneXstatusBarsstatusBa: {
    height: "17.25%",
    width: "95.24%",
    right: "3.97%",
    bottom: "82.75%",
    left: "0.79%",
    top: "0%",
    position: "absolute",
  },
  topo: {
    left: -3,
    width: 378,
    height: 251,
    top: 0,
    position: "absolute",
  },
  estrelas1Icon: {
    top: 219,
    left: 127,
    width: 116,
    height: 90,
    position: "absolute",
  },
  pdPerfilpessoaldadosItem: {
    left: 287,
    top: 45,
    width: 30,
  },
  reasDeLimpeza: {
    width: 125,
    height: 25,
    opacity: 0.5,
    color: Color.black,
    left: 0,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  image40Icon: {
    left: 129,
    top: 7,
    position: "absolute",
  },
  image41Icon: {
    top: 178,
    left: 162,
    position: "absolute",
  },
  groupChild: {
    height: 40,
    width: 122,
    position: "absolute",
    top: 0,
  },
  cozinha: {
    width: 69,
    fontSize: FontSize.size_lg,
    height: 34,
    color: Color.colorDarkslateblue,
    top: 7,
    position: "absolute",
    left: 32,
    fontFamily: FontFamily.small,
  },
  groupItem: {
    top: 16,
    left: 13,
    width: 9,
    height: 10,
    position: "absolute",
  },
  rectangleParent: {
    left: 10,
    height: 41,
    top: 42,
    width: 122,
  },
  groupInner: {
    height: 40,
    width: 122,
    position: "absolute",
    top: 0,
  },
  rectangleGroup: {
    left: 166,
    height: 41,
    top: 42,
    width: 122,
  },
  rectangleView: {
    height: 40,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    backgroundColor: Color.colorCornflowerblue_200,
    borderRadius: Border.br_11xl,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    borderStyle: "solid",
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  escritrio: {
    width: 80,
    fontSize: FontSize.size_lg,
    height: 34,
    color: Color.colorDarkslateblue,
    top: 7,
    position: "absolute",
    left: 32,
    fontFamily: FontFamily.small,
  },
  rectangleContainer: {
    top: 100,
    left: 84,
    height: 41,
  },
  groupWrapper: {
    height: 190,
    top: 0,
    left: 0,
  },
  frequnciaDeLimpeza: {
    width: 160,
    opacity: 0.5,
    color: Color.black,
    left: 0,
    fontFamily: FontFamily.small,
    fontSize: FontSize.size_mini,
    top: 0,
    position: "absolute",
  },
  groupChildShadowBox1: {
    borderRadius: Border.br_mini,
    width: 151,
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
    borderStyle: "solid",
    shadowOpacity: 1,
    top: 0,
    left: 0,
    position: "absolute",
  },
  dirio: {
    left: 23,
    width: 62,
    height: 34,
    textAlign: "right",
    fontSize: FontSize.size_lg,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  groupView: {
    top: 41,
    left: 14,
    height: 40,
  },
  frequnciaDeLimpezaParent: {
    top: 171,
    height: 81,
  },
  groupParent: {
    top: 1034,
    height: 252,
    left: 29,
  },
  groupChild3: {
    height: 38,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    backgroundColor: Color.colorCornflowerblue_200,
    borderRadius: Border.br_11xl,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    borderStyle: "solid",
    shadowOpacity: 1,
    left: 0,
    top: 4,
  },
  passadoria: {
    left: 58,
    width: 97,
    top: 9,
    fontSize: FontSize.size_lg,
    height: 34,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  text2: {
    width: 28,
    left: 21,
  },
  rectangleParent1: {
    top: 39,
    height: 47,
    left: 0,
  },
  groupChild4: {
    top: 5,
    height: 38,
    borderBottomWidth: 2,
    borderColor: Color.color2,
    backgroundColor: Color.colorCornflowerblue_200,
    borderRadius: Border.br_11xl,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    borderStyle: "solid",
    shadowOpacity: 1,
    left: 0,
  },
  limparJanelas: {
    left: 7,
    width: 136,
    top: 9,
    fontSize: FontSize.size_lg,
    height: 34,
    color: Color.colorDarkslateblue,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  text3: {
    left: 140,
    width: 29,
  },
  rectangleParent2: {
    top: 38,
    left: 205,
    height: 47,
  },
  serviosAdicionais: {
    width: 135,
    textAlign: "right",
    fontFamily: FontFamily.small,
    top: 0,
    opacity: 0.5,
    color: Color.black,
    left: 0,
    fontSize: FontSize.size_mini,
  },
  image40Icon1: {
    left: 141,
    height: 12,
    width: 13,
  },
  serviosAdicionaisParent: {
    left: 50,
    width: 154,
    top: 0,
  },
  groupParent1: {
    top: 901,
    height: 86,
  },
  groupChild5: {
    height: 39,
    width: 179,
    position: "absolute",
  },
  text4: {
    left: 93,
  },
  rectangleParent3: {
    height: 39,
    top: 9,
    left: 0,
  },
  groupChild6: {
    borderBottomWidth: 3,
    borderColor: Color.color2,
    backgroundColor: Color.colorCornflowerblue_200,
    elevation: 7,
    shadowRadius: 7,
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowColor: "rgba(96, 148, 238, 0.25)",
    borderStyle: "solid",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    top: 0,
    left: 0,
    height: 38,
  },
  text5: {
    left: 15,
  },
  rectangleParent4: {
    left: 220,
    height: 39,
    top: 9,
  },
  text6: {
    left: 170,
    fontSize: FontSize.size_17xl,
    width: 35,
    textAlign: "right",
    fontFamily: FontFamily.small,
    top: 0,
    color: Color.colorDarkslateblue,
  },
  groupParent2: {
    top: 807,
    height: 48,
  },
  horrioDePreferncia: {
    width: 156,
    textAlign: "right",
    fontFamily: FontFamily.small,
    top: 0,
    opacity: 0.5,
    color: Color.black,
    left: 0,
    fontSize: FontSize.size_mini,
  },
  image40Icon2: {
    left: 160,
    height: 12,
    width: 13,
  },
  horrioDePrefernciaParent: {
    top: 774,
    width: 173,
    left: 29,
  },
  tipoDeLimpeza: {
    width: 114,
    opacity: 0.5,
    color: Color.black,
    left: 0,
    fontFamily: FontFamily.small,
    fontSize: FontSize.size_mini,
    top: 0,
    position: "absolute",
  },
  leve: {
    left: 22,
    width: 53,
    fontSize: FontSize.size_lg,
    height: 34,
    color: Color.colorDarkslateblue,
    top: 7,
    position: "absolute",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  rectangleParent5: {
    top: 35,
    left: 19,
    height: 41,
  },
  tipoDeLimpezaParent: {
    top: 655,
    left: 24,
    width: 170,
    height: 76,
    position: "absolute",
  },
  homeChild: {
    shadowRadius: 46,
    elevation: 46,
    borderTopLeftRadius: Border.br_21xl,
    shadowOpacity: 1,
    shadowColor: "rgba(21, 70, 160, 0.1)",
    height: 96,
    width: 416,
    top: 0,
    backgroundColor: Color.white1,
    left: 0,
  },
  iphoneXhomeIndicatorhomeIChild: {
    marginLeft: -66.7,
    bottom: 9,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.gray,
    width: 134,
    height: 5,
  },
  iphoneXhomeIndicatorhomeI: {
    height: "32.4%",
    width: "92.16%",
    top: "40.73%",
    right: "3.77%",
    bottom: "26.88%",
    left: "4.06%",
    position: "absolute",
  },
  homeAlt1Icon: {
    top: -1,
    left: 20,
    width: 24,
    height: 24,
  },
  setting2Icon: {
    width: "35.82%",
    right: "64.18%",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  config1: {
    color: Color.radial1,
    left: "0%",
    top: "0%",
  },
  config: {
    height: "66.67%",
    width: "61.19%",
    top: "20.83%",
    bottom: "12.5%",
    left: "38.81%",
    right: "0%",
    position: "absolute",
  },
  component62: {
    left: 270,
    width: 67,
    height: 24,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image6: {
    left: 191,
    top: 1,
    width: 22,
    height: 22,
    position: "absolute",
  },
  image5: {
    top: -3,
    left: 93,
  },
  homeAlt1Parent: {
    marginLeft: -178.8,
    top: 19,
    width: 327,
    height: 24,
  },
  home: {
    top: 731,
    left: -22,
  },
  instanceChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    backgroundColor: Color.colorDarkslateblue,
    left: "0%",
    right: "0%",
    position: "absolute",
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
  groupPressable: {
    top: 251,
    left: 327,
    width: 33,
    height: 46,
    position: "absolute",
  },
  pdPerfilpessoaldados: {
    borderRadius: Border.br_21xl,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.white,
  },
});

export default PDPerfilPessoalDados;
