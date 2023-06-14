import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/header/header";
import CardNavigator from "../components/cardNavigator/cardNavigator";
import { useNavigation } from "@react-navigation/native";

export default function Notice() {
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
          title={"Notícias sobre a biodiversidade no mundo"}
          headerHeight={250}
          backgroundImageSource={require("../assets/header.png")}
          navigateToOngs={handleNavigateToOngs}
          navigateToDoacoes={handleNavigateToDoacoes}
          navigateToNoticias={handleNavigateToNoticias}
        />
        <View style={styles.subcontainer}>
          <View style={styles.colums}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Noticia Detalhada")}
            >
              <CardNavigator
                style={styles.item}
                imageSource={require("../assets/report.png")}
                description="Mancha de lixo do Pacífico se tornou lar para ecossistema próprio"
                height={128}
                width={178}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Noticia Detalhada")}
            >
              <CardNavigator
                style={styles.item}
                imageSource={require("../assets/image3.png")}
                description="Grandes felinos, quem são e onde habitam?"
                height={208} 
                width={178} 
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Noticia Detalhada")}
            >
              <CardNavigator
                style={styles.item}
                imageSource={require("../assets/image5.jpeg")}
                description="Flora e fauna estão mais ameaçadas na Mata Atlântica, aponta IBGE"
                height={161} 
                width={178} 
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate("Noticia Detalhada")}
            >
              <CardNavigator
                style={styles.item}
                imageSource={require("../assets/image1.jpeg")}
                description="Substâncias químicas descartadas no ambiente podem contaminar o ser humano de diversas formas"
                height={151} 
                width={178} 
              />
            </TouchableOpacity>
          </View>
          <View style={styles.colums}>
            <TouchableOpacity
              onPress={() => navigation.navigate("Noticia Detalhada")}
            >
              <CardNavigator
                style={styles.item}
                imageSource={require("../assets/image2.png")}
                description="Robô de plantio de sementes movido a energia solar ajuda no reflorestamento da Amazônia"
                height={161}
                width={178}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Noticia Detalhada")}
            >
              <CardNavigator
                style={styles.item}
                imageSource={require("../assets/image4.png")}
                description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
                height={111} 
                width={178} 
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Noticia Detalhada")}
            >
              <CardNavigator
                style={styles.item}
                imageSource={require("../assets/image8.jpg")}
                description="Árvores falam umas com as outras? Estudo questiona papel dos fungos na comunicação da floresta"
                height={161} 
                width={178} 
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Noticia Detalhada")}
            >
              <CardNavigator
                style={styles.item}
                imageSource={require("../assets/image7.png")}
                description="Brasil tem 272 animais e 210 plantas invasoras que ameaçam biodiversidade, alerta instituto"
                height={208} 
                width={178} 
              />
            </TouchableOpacity>
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
    height: "100%",
    width: "100%",
    
  },
  scrollContainer: {
    flex: 1,
    width: "100%",
    
  },
  subcontainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    marginBottom: 10
  },
  colums: {
    flexDirection: "column",
  },
  item: {
    marginLeft: 1,
    marginRight: 8,
    marginTop: 3,
  },
});
