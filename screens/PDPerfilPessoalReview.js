import * as React from "react";
import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { Color, Gap, FontFamily, FontSize, Border } from "../GlobalStyles";

const PDPerfilPessoalReview = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.pdPerfilpessoalreview}>
      <View style={styles.pdPerfilpessoalreviewChild} />
      <View style={styles.avaliaes}>
        <View style={[styles.avSarah, styles.avSarahLayout]}>
          <View style={[styles.component41, styles.componentBg]}>
            <View style={[styles.component41Child, styles.childPosition1]} />
            <View style={[styles.component41Inner, styles.fotoIconPosition]}>
              <View style={[styles.groupParent, styles.groupParentPosition]}>
                <View style={[styles.rectangleParent, styles.rectangleLayout]}>
                  <View style={[styles.groupChild, styles.childPosition1]} />
                  <Text style={[styles.j, styles.jFlexBox]} />
                </View>
                <View style={styles.jasonCraigParent}>
                  <Text style={[styles.jasonCraig, styles.perfilTypo]}>
                    Valda Demenko
                  </Text>
                  <Text style={styles.jcraig90}>@valdademenko11</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={styles.c92700bd7b44932402cf78203b4Icon}
            contentFit="cover"
            source={require("../assets/819617c92700bd7b44932402cf78203b-4.png")}
          />
          <Image
            style={[styles.avaliacao2Icon, styles.avaliacao2IconLayout]}
            contentFit="cover"
            source={require("../assets/avaliacao-2.png")}
          />
          <Text style={[styles.sarahDominike, styles.taisAraujoTypo]}>
            Sarah Dominike
          </Text>
          <Text style={styles.habilidadeEmLimpeza}>
            Habilidade em limpeza minuciosa, organização prática, e
            pontualidade,
          </Text>
        </View>
        <View style={styles.avTais}>
          <View style={[styles.component40, styles.componentBg]}>
            <View style={[styles.component40Child, styles.childPosition1]} />
            <View style={[styles.component41Inner, styles.fotoIconPosition]}>
              <View style={[styles.groupContainer, styles.groupParentPosition]}>
                <View style={styles.rectangleLayout}>
                  <View style={[styles.groupChild, styles.childPosition1]} />
                  <Text style={[styles.j, styles.jFlexBox]} />
                </View>
                <View style={styles.jasonCraigParent}>
                  <Text style={[styles.jasonCraig, styles.perfilTypo]}>
                    Valda Demenko
                  </Text>
                  <Text style={styles.jcraig90}>@valdademenko11</Text>
                </View>
              </View>
            </View>
          </View>
          <Pressable style={styles.images1} onPress={() => {}}>
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/images-1.png")}
            />
          </Pressable>
          <Image
            style={[styles.avaliacao2Icon, styles.avaliacao2IconLayout]}
            contentFit="cover"
            source={require("../assets/avaliacao-21.png")}
          />
          <Text style={[styles.taisAraujo, styles.taisAraujoTypo]}>
            Tais Araujo
          </Text>
          <Text
            style={[styles.diaristaEficienteE, styles.diaristaEficienteETypo]}
          >
            Diarista eficiente e confiável.
          </Text>
        </View>
        <View style={[styles.avFernanda, styles.avSarahLayout]}>
          <View style={[styles.component41, styles.componentBg]}>
            <View style={[styles.component39Child, styles.childPosition1]} />
            <View style={[styles.component41Inner, styles.fotoIconPosition]}>
              <View style={[styles.groupContainer, styles.groupParentPosition]}>
                <View style={styles.rectangleLayout}>
                  <View style={[styles.groupChild, styles.childPosition1]} />
                  <Text style={[styles.j, styles.jFlexBox]} />
                </View>
                <View>
                  <Text style={styles.jasonCraig2}>Lara Clara</Text>
                  <Text style={styles.jcraig90}>@laraclara</Text>
                </View>
              </View>
            </View>
          </View>
          <Text style={[styles.fernadaPerez, styles.taisAraujoTypo]}>
            Fernada Perez
          </Text>
          <Text
            style={[
              styles.profissionalEmLimpeza,
              styles.diaristaEficienteETypo,
            ]}
          >{`Profissional em limpeza, confiável, meticulosa e ágil, 
assegurando ambientes limpos e arrumados.`}</Text>
          <Image
            style={[
              styles.c92700bd7b44932402cf78203b3Icon,
              styles.iconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/819617c92700bd7b44932402cf78203b-3.png")}
          />
          <Image
            style={[styles.avaliacao2Icon2, styles.avaliacao2IconLayout]}
            contentFit="cover"
            source={require("../assets/avaliacao-22.png")}
          />
        </View>
        <View style={styles.avLaura}>
          <View style={[styles.component38, styles.componentBg]}>
            <View style={[styles.component38Child, styles.childShadowBox]} />
            <View style={[styles.component41Inner, styles.fotoIconPosition]}>
              <View style={[styles.groupParent1, styles.groupParentPosition]}>
                <View style={styles.rectangleLayout}>
                  <View style={[styles.rectangleView, styles.childPosition2]} />
                  <Text style={[styles.j3, styles.jFlexBox]} />
                </View>
                <View style={styles.jasonCraigParent}>
                  <Text style={styles.jasonCraig2}>Laura Craig</Text>
                  <Text style={styles.jcraig90}>@jcraig90</Text>
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[
              styles.c92700bd7b44932402cf78203b1Icon,
              styles.iconPosition,
            ]}
            contentFit="cover"
            source={require("../assets/819617c92700bd7b44932402cf78203b-1.png")}
          />
          <Image
            style={[styles.avaliacao2Icon3, styles.avaliacao2IconLayout]}
            contentFit="cover"
            source={require("../assets/avaliacao-21.png")}
          />
          <Text
            style={[
              styles.especialistaEmHigienizao,
              styles.diaristaEficienteETypo,
            ]}
          >{`Especialista em higienização, organização eficiente e atenção aos detalhes, 
com resultados impecáveis.`}</Text>
          <Text style={[styles.lauraFerraz, styles.taisAraujoTypo]}>
            Laura Ferraz
          </Text>
        </View>
        <Text style={styles.avaliaes1}>Avaliações</Text>
      </View>
      <View style={[styles.topo, styles.topoPosition]}>
        <View style={[styles.topoChild, styles.topoPosition]} />
        <View style={[styles.review, styles.reviewPosition]}>
          <View style={[styles.reviewChild, styles.childPosition]} />
          <Text style={[styles.review1, styles.perfilTypo]}>Review</Text>
        </View>
        <Image
          style={[styles.fotoIcon, styles.fotoIconPosition]}
          contentFit="cover"
          source={require("../assets/foto.png")}
        />
        <Pressable
          style={styles.botaoDados}
          onPress={() => navigation.navigate("PDPerfilPessoalDados")}
        >
          <View style={[styles.botaoDadosChild, styles.childPosition]} />
          <Text style={styles.dados}>Dados</Text>
        </Pressable>
        <Text style={[styles.perfil, styles.setaLayout]}>Valda Demenko</Text>
        <Image
          style={[styles.editar1Icon, styles.editar1IconLayout]}
          contentFit="cover"
          source={require("../assets/editar-1.png")}
        />
        <Pressable
          style={[styles.seta, styles.setaLayout]}
          onPress={() => navigation.goBack()}
        >
          <View style={[styles.setaChild, styles.childPosition2]} />
          <Image
            style={[styles.setaItem, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/vector-1.png")}
          />
        </Pressable>
        <View style={styles.iphoneXstatusBarsstatusBa}>
          <View style={[styles.setaChild, styles.childPosition2]}>
            <View style={[styles.setaChild, styles.childPosition2]} />
            <View style={styles.battery}>
              <View style={[styles.border, styles.childPosition2]} />
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
            <View style={[styles.timeStyle, styles.reviewPosition]}>
              <Text style={styles.time}>
                <Text style={styles.text}>9:4</Text>1
              </Text>
            </View>
          </View>
        </View>
      </View>
      <Image
        style={[styles.pdPerfilpessoalreviewItem, styles.editar1IconLayout]}
        contentFit="cover"
        source={require("../assets/group-41.png")}
      />
      <Image
        style={styles.estrelas1Icon}
        contentFit="cover"
        source={require("../assets/estrelas-1.png")}
      />
      <Image
        style={styles.homeIcon}
        contentFit="cover"
        source={require("../assets/home.png")}
      />
      <Pressable style={styles.groupPressable} onPress={() => {}}>
        <View style={[styles.instanceChild, styles.childPosition2]} />
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
  avSarahLayout: {
    height: 155,
    width: 342,
    position: "absolute",
  },
  componentBg: {
    backgroundColor: Color.colorDarkslateblue,
    position: "absolute",
  },
  childPosition1: {
    backgroundColor: Color.gray,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  fotoIconPosition: {
    overflow: "hidden",
    position: "absolute",
  },
  groupParentPosition: {
    gap: Gap.gap_md,
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    marginTop: -24,
    left: 0,
    position: "absolute",
  },
  rectangleLayout: {
    width: 48,
    height: 48,
  },
  jFlexBox: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  perfilTypo: {
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    fontSize: FontSize.bold_size,
  },
  avaliacao2IconLayout: {
    height: 64,
    width: 64,
    top: 0,
    position: "absolute",
  },
  taisAraujoTypo: {
    transform: [
      {
        rotate: "0.3deg",
      },
    ],
    color: Color.white1,
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    position: "absolute",
  },
  diaristaEficienteETypo: {
    height: 50,
    fontSize: FontSize.size_mini,
    textAlign: "justify",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    transform: [
      {
        rotate: "0.3deg",
      },
    ],
    color: Color.white1,
    display: "flex",
    alignItems: "center",
    position: "absolute",
  },
  iconPosition: {
    top: 19,
    width: 35,
    height: 41,
    position: "absolute",
  },
  childShadowBox: {
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowColor: "rgba(21, 70, 160, 0.1)",
    display: "none",
    right: "0%",
    width: "100%",
  },
  childPosition2: {
    bottom: "0%",
    top: "0%",
    height: "100%",
  },
  topoPosition: {
    top: 0,
    width: 375,
    left: 0,
    position: "absolute",
  },
  reviewPosition: {
    bottom: "22.63%",
    position: "absolute",
  },
  childPosition: {
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
    position: "absolute",
  },
  setaLayout: {
    height: 24,
    position: "absolute",
  },
  editar1IconLayout: {
    height: 30,
    top: 45,
    width: 30,
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    position: "absolute",
    maxWidth: "100%",
  },
  pdPerfilpessoalreviewChild: {
    height: 773,
    width: 375,
    left: 0,
    top: 287,
    position: "absolute",
    backgroundColor: Color.white1,
  },
  component41Child: {
    display: "none",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowColor: "rgba(21, 70, 160, 0.1)",
    right: "0%",
    width: "100%",
  },
  groupChild: {
    right: "0.41%",
    width: "99.59%",
    borderRadius: Border.br_xl,
  },
  j: {
    left: "0.41%",
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    justifyContent: "center",
    color: Color.black,
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "99.59%",
  },
  rectangleParent: {
    display: "none",
  },
  jasonCraig: {
    color: Color.black,
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    fontSize: FontSize.bold_size,
  },
  jcraig90: {
    fontSize: FontSize.small_size,
    opacity: 0.5,
    fontFamily: FontFamily.small,
    textAlign: "left",
    color: Color.black,
  },
  jasonCraigParent: {
    display: "none",
  },
  groupParent: {
    width: 179,
    height: 48,
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    marginTop: -24,
  },
  component41Inner: {
    height: "66.67%",
    width: "87.78%",
    top: "16.67%",
    right: "7.34%",
    bottom: "16.67%",
    left: "4.88%",
  },
  component41: {
    top: 8,
    height: 147,
    borderRadius: Border.br_mini,
    width: 342,
    left: 0,
  },
  c92700bd7b44932402cf78203b4Icon: {
    left: 19,
    height: 41,
    width: 30,
    top: 21,
    borderRadius: Border.br_42xl,
    position: "absolute",
  },
  avaliacao2Icon: {
    left: 259,
    borderRadius: Border.br_mini,
  },
  sarahDominike: {
    left: 62,
    width: 129,
    height: 27,
    top: 28,
    transform: [
      {
        rotate: "0.3deg",
      },
    ],
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  habilidadeEmLimpeza: {
    top: 68,
    left: 50,
    height: 59,
    width: 270,
    textAlign: "justify",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    transform: [
      {
        rotate: "0.3deg",
      },
    ],
    color: Color.white1,
    display: "flex",
    fontSize: FontSize.size_mid,
    alignItems: "center",
    position: "absolute",
  },
  avSarah: {
    top: 518,
    left: 1,
  },
  component40Child: {
    display: "none",
    borderRadius: Border.br_xl,
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowColor: "rgba(21, 70, 160, 0.1)",
    right: "0%",
    width: "100%",
  },
  groupContainer: {
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    marginTop: -24,
    display: "none",
  },
  component40: {
    top: 9,
    height: 147,
    borderRadius: Border.br_mini,
    width: 342,
    left: 0,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  images1: {
    left: 14,
    width: 35,
    height: 41,
    top: 21,
    position: "absolute",
  },
  taisAraujo: {
    top: 25,
    left: 60,
  },
  diaristaEficienteE: {
    left: 64,
    width: 236,
    top: 45,
    height: 50,
  },
  avTais: {
    top: 354,
    height: 156,
    width: 342,
    left: 1,
    position: "absolute",
  },
  component39Child: {
    borderRadius: Border.br_11xl,
    display: "none",
    shadowOpacity: 1,
    elevation: 48,
    shadowRadius: 48,
    shadowOffset: {
      width: 2,
      height: 8,
    },
    shadowColor: "rgba(21, 70, 160, 0.1)",
    right: "0%",
    width: "100%",
  },
  jasonCraig2: {
    fontSize: FontSize.regular_size,
    fontFamily: FontFamily.small,
    textAlign: "left",
    color: Color.black,
  },
  fernadaPerez: {
    top: 24,
    left: 63,
  },
  profissionalEmLimpeza: {
    top: 73,
    left: 60,
    width: 270,
  },
  c92700bd7b44932402cf78203b3Icon: {
    left: 16,
    borderRadius: Border.br_42xl,
    top: 19,
  },
  avaliacao2Icon2: {
    left: 260,
  },
  avFernanda: {
    top: 192,
    left: 0,
  },
  component38Child: {
    borderRadius: 43,
    display: "none",
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  rectangleView: {
    right: "0.42%",
    left: "-0.42%",
    display: "none",
    borderRadius: Border.br_xl,
    position: "absolute",
    width: "100%",
  },
  j3: {
    textAlign: "center",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    fontSize: FontSize.size_mid,
    justifyContent: "center",
    color: Color.black,
    top: "0%",
    height: "100%",
    position: "absolute",
    left: "0%",
    width: "100%",
  },
  groupParent1: {
    alignItems: "center",
    flexDirection: "row",
    top: "50%",
    marginTop: -24,
  },
  component38: {
    top: 7,
    height: 147,
    borderRadius: Border.br_mini,
    width: 342,
    left: 0,
  },
  c92700bd7b44932402cf78203b1Icon: {
    left: 12,
    borderRadius: Border.br_mini,
  },
  avaliacao2Icon3: {
    left: 262,
    borderRadius: Border.br_mini,
  },
  especialistaEmHigienizao: {
    left: 54,
    width: 278,
    top: 72,
  },
  lauraFerraz: {
    left: 60,
    top: 28,
    transform: [
      {
        rotate: "0.3deg",
      },
    ],
  },
  avLaura: {
    top: 29,
    height: 154,
    width: 342,
    left: 1,
    position: "absolute",
  },
  avaliaes1: {
    left: 9,
    fontSize: FontSize.size_mini,
    top: 0,
    opacity: 0.5,
    fontFamily: FontFamily.small,
    textAlign: "left",
    color: Color.black,
    position: "absolute",
  },
  avaliaes: {
    left: 8,
    width: 343,
    height: 673,
    top: 287,
    position: "absolute",
  },
  topoChild: {
    height: 192,
  },
  reviewChild: {
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    right: "0%",
    width: "100%",
    backgroundColor: Color.white1,
    borderTopRightRadius: Border.br_mini,
    borderTopLeftRadius: Border.br_mini,
  },
  review1: {
    height: "75.69%",
    width: "62.47%",
    top: "8.92%",
    left: "23.97%",
    color: Color.colorDarkslateblue_100,
    display: "flex",
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    fontSize: FontSize.bold_size,
    alignItems: "center",
    position: "absolute",
  },
  review: {
    height: "12.95%",
    width: "24.59%",
    top: "64.42%",
    left: "71.41%",
    right: "4%",
  },
  fotoIcon: {
    top: 104,
    left: 109,
    borderRadius: Border.br_61xl,
    width: 147,
    height: 147,
  },
  botaoDadosChild: {
    height: "130.77%",
    width: "192%",
    top: "-26.92%",
    right: "-44%",
    bottom: "-3.85%",
    left: "-48%",
    backgroundColor: Color.radial1,
    display: "none",
  },
  dados: {
    color: Color.white1,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    fontSize: FontSize.bold_size,
    display: "flex",
    alignItems: "center",
    left: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
    width: "100%",
  },
  botaoDados: {
    top: 162,
    width: 50,
    height: 26,
    left: 24,
    position: "absolute",
  },
  perfil: {
    left: 122,
    width: 131,
    color: Color.white,
    top: 72,
    textAlign: "left",
    fontFamily: FontFamily.bold,
    fontWeight: "500",
    fontSize: FontSize.bold_size,
  },
  editar1Icon: {
    left: 328,
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
    width: 38,
    left: 24,
  },
  border: {
    width: "90.17%",
    right: "9.83%",
    borderRadius: Border.br_10xs_7,
    borderStyle: "solid",
    borderColor: Color.white,
    borderWidth: 1,
    opacity: 0.35,
    left: "0%",
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
    backgroundColor: Color.white,
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
    marginTop: -6.35,
    fontFamily: FontFamily.openSansSemiBold,
    color: Color.white,
    fontSize: FontSize.regular_size,
    fontWeight: "600",
    textAlign: "center",
    top: "50%",
    left: "0%",
    position: "absolute",
    width: "100%",
  },
  timeStyle: {
    height: "47.81%",
    top: "29.56%",
    left: 21,
    width: 54,
  },
  iphoneXstatusBarsstatusBa: {
    height: "17.25%",
    width: "96%",
    bottom: "82.75%",
    right: "4%",
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  topo: {
    height: 251,
  },
  pdPerfilpessoalreviewItem: {
    left: 287,
  },
  estrelas1Icon: {
    top: 219,
    left: 127,
    width: 116,
    height: 90,
    position: "absolute",
  },
  homeIcon: {
    top: 726,
    left: -19,
    width: 421,
    height: 98,
    position: "absolute",
  },
  instanceChild: {
    borderTopLeftRadius: Border.br_5xs,
    borderBottomLeftRadius: Border.br_5xs,
    left: "0%",
    right: "0%",
    backgroundColor: Color.colorDarkslateblue,
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
  pdPerfilpessoalreview: {
    borderRadius: Border.br_21xl,
    flex: 1,
    maxWidth: "100%",
    width: "100%",
    backgroundColor: Color.white1,
  },
});

export default PDPerfilPessoalReview;
