// eslint-disable-next-line react/no-deprecated

import { StyleSheet, Text, View, ScrollView } from "react-native";
import Header from "../components/header/header";
import { useNavigation } from "@react-navigation/native";
import GridOfCards from "../components/cardGrid/cardGrid";

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
          <Text style={styles.title}>ONGS BRASILEIRAS</Text>
        </View>

        <View>
          <Text style={styles.desc}>
            No Brasil, existem centenas de ONGs que atuam na “linha de frente”
            pela causa ambiental, dedicadas ao uso dos recursos naturais e dos
            não naturais de forma sustentável. Essa mobilização é fundamental
            pelas gerações do presente e pelas que virão.
          </Text>
        </View>

        <GridOfCards
          cards={[
            {
              institutionName: "SOS Mata Atlântica",
              linkdonation: "https://www.sosma.org.br/",
              contact: "+55 34 998052735",
              description: "Clique aqui para mais informações.",
              onPress: () => navigation.navigate("Organizações Detalhada"),
            },
            {
              institutionName: "Conservação Internacional Brasil (CI-Brasil)",
              linkdonation: "https://www.conservation.org/brasil",
              contact: "+55 34 998052735",
              description: "Clique aqui para mais informações.",
              onPress: () => navigation.navigate("NomeDaRota"),
            },
            {
              institutionName: "Instituto de Pesquisas Ecológicas (IPÊ)",
              linkdonation: "https://atados.com.br/ong/ecotece",
              contact: "+55 34 998052735",
              description: "Clique aqui para mais informações.",
              onPress: () => navigation.navigate("NomeDaRota"),
            },
            {
              institutionName: "Instituto de Pesquisas Ecológicas (IPÊ)",
              linkdonation: "https://ipe.org.br/",
              contact: "+55 34 998052735",
              description: "Clique aqui para mais informações.",
              onPress: () => navigation.navigate("NomeDaRota"),
            },
            {
              institutionName: "OHquidea",
              linkdonation: "https://atados.com.br/ong/ohquidea",
              contact: "+55 34 998052735",
              description: "Clique aqui para mais informações.",
              onPress: () => navigation.navigate("NomeDaRota"),
            },
            {
              institutionName: "Instituto Virada Sustentável",
              linkdonation: "https://atados.com.br/ong/instituto-virada-sustentavel",
              contact: "+55 34 998052735",
              description: "Clique aqui para mais informações.",
              onPress: () => navigation.navigate("NomeDaRota"),
            },
          ]}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FBFFF2",
    paddingBottom: 1,
  },
  text: {
    width: 298,
    height: 88,
    left: 29,
    top: 206,
    fontStyle: "normal",
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    color: "#000000",
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

  desc: {
    fontFamily: "Poppins-Bold",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 14,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "justify",
    marginBottom: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
  },
  subcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 11,
  },
  colums: {
    flexDirection: "column",
  },
  item: {
    marginRight: 3,
    marginTop: 3,
  },
});
