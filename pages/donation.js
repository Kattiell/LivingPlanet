// eslint-disable-next-line react/no-deprecated
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";
import Header from "../components/header/header";
import { useNavigation } from "@react-navigation/native";
import GridOfCards from "../components/cardGrid/cardGrid";

export default function Donation() {
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
  const handleOpenLink = (url) => {
    Linking.openURL(url);
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        <Header
          headerHeight={210}
          backgroundImageSource={require("../assets/header.png")}
          navigateToOngs={handleNavigateToOngs}
          navigateToDoacoes={handleNavigateToDoacoes}
          navigateToNoticias={handleNavigateToNoticias}
        />
        <View>
          <Text style={styles.title}>DOAÇÕES</Text>
        </View>
        <View>
          <Text style={styles.desc}>Bem-vindo à nossa página de Doações!</Text>
          <Text style={styles.desc}>
            Aqui você têm a oportunidade de fazer a diferença e contribuir para
            a preservação do meio ambiente.
          </Text>
        </View>
        <GridOfCards
          cards={[
            {
              institutionName: "GreenPeace",
              linkdonation: "https://doe.greenpeace.org.br/doar",
              contact: "+55 34 998052735",
              description: "Clique aqui para fazer doações.",
              onPress: () =>
                handleOpenLink(
                  "https://doe.greenpeace.org.br/doar/p?utm_term=greenpeace&utm_campaign=paretoacgsnbrandbr-unificada-doacao&utm_source=google&utm_medium=cpc"
                ),
            },
            {
              institutionName: "World Wide Fund",
              linkdonation: "https://www.wwf.org.br/",
              contact: "+55 34 999607541",
              description: "Clique aqui para fazer doações.",
              onPress: () =>
                handleOpenLink(
                  "https://www.wwf.org.br/"
                ),
            },
            {
              institutionName: "Conservation International Brasil",
              linkdonation: "https://www.conservation.org/brasil",
              contact: "+55 34 998052735",
              description: "Clique aqui para fazer doações.",
              onPress: () =>
                handleOpenLink(
                  "https://www.conservation.org/brasil"
                ),
            },
            {
              institutionName: "Instituto Socioambiental – ISA",
              linkdonation: "https://www.socioambiental.org/",
              contact: "+55 34 998052735",
              description: "Clique aqui para fazer doações.",
              onPress: () =>
                handleOpenLink(
                  "https://www.socioambiental.org/"
                ),
            },
            {
              institutionName: "SOS Amazônia",
              linkdonation: "https://sosamazonia.org.br/",
              contact: "+55 34 998052735",
              description: "Clique aqui para fazer doações.",
              onPress: () =>
                handleOpenLink(
                  "https://sosamazonia.org.br/"
                ),
            },
            {
              institutionName: "Fundação Biodiversitas",
              linkdonation: "https://biodiversitas.org.br/",
              contact: "+55 34 998052735",
              description: "Clique aqui para fazer doações.",
              onPress: () =>
                handleOpenLink(
                  "https://biodiversitas.org.br/"
                ),
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
    marginBottom: 10,
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
