// eslint-disable-next-line react/no-deprecated
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../components/header/header";
import { useNavigation } from "@react-navigation/native";
import FrameInformation from "../components/frameInformation/frameInformation";
import FloatingText from "../components/floatingText/float";

export default function Ongs() {
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
          <Text style={styles.title}>ONG PLANET</Text>
        </View>

        <View style={styles.subcontainer}>
          <View style={styles.floatTextContainer}>
            <View style={styles.floatTextLeft}>
              <View>
                <FloatingText
                  maxWidth={156}
                  floatChildren={<View style={styles.floatChild} />}
                >
                  <Text style={styles.paragraph}>
                    O Instituto Regeneração Global (IRG) tem como missão
                    promover as soluções que contribuem para a regeneração do
                    planeta e o equilíbrio da sociedade.
                  </Text>
                </FloatingText>
                <FloatingText
                  maxWidth={157}
                  floatChildren={<View style={styles.floatChild} />}
                >
                  <Text style={styles.paragraph}>
                    Fazemos parte de um movimento crescente no mundo que busca
                    tornar realidade o desenvolvimento humano por meio de
                    sistemas ambientalmente sustentáveis, socialmente justos e
                    economicamente viáveis.
                  </Text>
                </FloatingText>
              </View>
            </View>
            <View style={styles.floatTextBelow}>
              <View>
                <FloatingText
                  maxWidth={355}
                  floatChildren={<View style={styles.floatChild} />}
                >
                  <Text style={styles.paragraph}>
                    O nosso principal projeto é a criação colaborativa da maior
                    portal de soluções sustentáveis e regenerativas da internet.
                    Uma "WikiSolution" (biblioteca de soluções) para agrupar e
                    permitir fácil acesso aos responsáveis por iniciativas
                    criadas por pessoas, empresas, governos ou instituições que
                    podem atuar em benefício da sociedade. Atualmente oferecemos
                    mais de 750 soluções de 35 países disponíveis em 14 idiomas.
                  </Text>
                 
                </FloatingText>
                <FloatingText
                  maxWidth={355}
                  floatChildren={<View style={styles.floatChild} />}
                >
                  <Text style={styles.paragraph}>
                  Para facilitar a busca e orgaização, todas as soluções são separadas em 8 áreas essenciais para a humanidade. Onde cada uma dessas áreas possui três categorias
                  para tornar a pesquisa por soluções mais facil.
                  </Text>
                 
                </FloatingText>
              </View>
            </View>
          </View>

          <View style={styles.frameContainer}>
            <FrameInformation
              height={260}
              width={190}
              tag1="Endereço"
              email="regenracaoglobal@gmail.com"
              tag2="E-mail"
              endereco="São José dos Campos, SP, Brasil"
            />
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
    height: 48,
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
  },

  floatTextLeft: {
    width: "50%",
  },
  floatTextBelow: {
    marginTop: 8,
  },
  frameContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    marginTop: 2,
    marginRight: 16,
  },
  paragraph: {
    letterSpacing: 0.2,
    lineHeight: 15,
  },
});
