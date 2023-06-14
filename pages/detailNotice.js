// eslint-disable-next-line react/no-deprecated
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../components/header/header";
import { useNavigation } from "@react-navigation/native";
import FrameInformation from "../components/frameInformation/frameInformation";
import FloatingText from "../components/floatingText/float";
import CustomImage from "../components/image/image";

export default function DetailNotice() {
  const navigation = useNavigation();
  const handleNavigateToOngs = () => {
    navigation.navigate("Organizações");
  };
  const handleNavigateToDoacoes = () => {
    navigation.navigate("Doações");
  };
  const handleNavigateToNoticias = () => {
    navigation.navigate("Noticias");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header
          headerHeight={210}
          backgroundImageSource={require("../assets/fundo2.png")}
          navigateToOngs={handleNavigateToOngs}
          navigateToDoacoes={handleNavigateToDoacoes}
          navigateToNoticias={handleNavigateToNoticias}
        />

        <View>
          <Text style={styles.title}>
            Grandes felinos, quem são e onde habitam?
          </Text>
        </View>

        <View style={styles.subcontainer}>
          <View style={styles.floatTextContainer}>
            <View style={styles.floatTextLeft}>
              <View>
                <FloatingText
                  maxWidth={210}
                  floatChildren={<View style={styles.floatChild} />}
                >
                  <Text style={styles.paragraph}>
                    Existem 38 espécies de felinos no planeta.
                  </Text>

                  <Text style={styles.paragraph}>
                    A maioria, como o gato-maracajá, é relativamente pequena.
                    Mas alguns — como o leão, o tigre, o leopardo, o
                    leopardo-das-neves, o leopardo-de-amur, a onça-pintada, o
                    lince e o guepardo — são grandes. Esses grandes felinos
                    estão entre os animais mais amados e conhecidos do planeta.
                    A maioria dos grandes felinos são membros do gênero
                    Panthera. Felinos pequenos e médios, incluindo
                    gatos-domésticos, fazem parte do gênero Felis. Guepardos,
                    que não têm garras retráteis, possuem seu próprio gênero,
                    denominado Acinonyx. Os grandes felinos são encontrados em
                    todo o mundo em habitats tão variados quanto manguezais na
                    Índia e florestas densas no oeste dos Estados Unidos.
                  </Text>
                </FloatingText>
              </View>
            </View>
          </View>

          <View style={styles.frameContainer}>
            <CustomImage
              height={180}
              width={155}
              borderRadius={4}
              source={require("../assets/image10.png")}
            />
            <FloatingText
              maxWidth={155}
              floatChildren={<View style={styles.floatChild} />}
            >
              <Text style={styles.paragraph}>
                A principal diferença entre os grandes felinos e a maioria de
                seus primos está nas vocalizações produzidas por eles. Felinos
                menores ronronam; os grandes felinos (com exceção de guepardos,
                linces e leopardos-das-neves) rugem.
              </Text>

              <Text style={styles.paragraph}>
                Eles também grunhem, rosnam, berram e emitem diversos outros
                sons devido a um ligamento em suas laringes.
              </Text>
            </FloatingText>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFFF2",
  },
  title: {
    paddingTop: 10,
    height: 80,
    fontStyle: "normal",
    fontWeight: "900",
    fontSize: 20,
    lineHeight: 30,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  subcontainer: {
    paddingHorizontal: 11,
    flexDirection: "row",
  },
  floatTextContainer: {
    flex: 1,
    flexDirection: "row",
  },
  floatTextLeft: {
    flex: 1,
    paddingRight: 10,
  },
  floatTextBelow: {
    flex: 1,
    paddingLeft: 10,
    marginTop: 10,
  },
  frameContainer: {
    marginTop: 2,
    marginRight: 16,
  },
  paragraph: {
    letterSpacing: 0.2,
    lineHeight: 15,
  },
});
