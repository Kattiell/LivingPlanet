import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/header/header";
import CardNavigator from "../components/cardNavigator/card_Navigator";
import { useNavigation } from "@react-navigation/native";

export default function Notice() {
  const handleNavigateToOngs = () => {
    console.log("Navegar para Ongs");
  };
  const handleNavigateToDoacoes = () => {
    console.log("Navegar para Doações");
  };
  const handleNavigateToNoticias = () => {
    console.log("Navegar para Notícias");
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <ScrollView style={styles.scrollContainer}>
        <Header
          height={270}
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
                imageSource={require("../assets/image1.jpeg")}
                description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
                height={128}
                width={178}
              />
            </TouchableOpacity>

            <CardNavigator
              style={styles.item}
              imageSource={require("../assets/image3.png")}
              description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
              height={208} // altura personalizada
              width={178} // largura personalizada
              onPress={() => {
                // Lógica para lidar com o pressionamento do card
              }}
            />
            <CardNavigator
              style={styles.item}
              imageSource={require("../assets/image5.jpeg")}
              description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
              height={161} // altura personalizada
              width={178} // largura personalizada
              onPress={() => {
                // Lógica para lidar com o pressionamento do card
              }}
            />
            <CardNavigator
              style={styles.item}
              imageSource={require("../assets/image1.jpeg")}
              description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
              height={161} // altura personalizada
              width={178} // largura personalizada
              onPress={() => {
                // Lógica para lidar com o pressionamento do card
              }}
            />
          </View>
          <View style={styles.colums}>
            <CardNavigator
              style={styles.item}
              imageSource={require("../assets/image2.png")}
              description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
              height={161}
              width={178}
              onPress={() => {
                // Lógica para lidar com o pressionamento do card
              }}
            />

            <CardNavigator
              style={styles.item}
              imageSource={require("../assets/image4.png")}
              description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
              height={111} // altura personalizada
              width={178} // largura personalizada
              onPress={() => {
                // Lógica para lidar com o pressionamento do card
              }}
            />
            <CardNavigator
              style={styles.item}
              imageSource={require("../assets/image8.jpg")}
              description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
              height={161} // altura personalizada
              width={178} // largura personalizada
              onPress={() => {
                // Lógica para lidar com o pressionamento do card
              }}
            />
            <CardNavigator
              style={styles.item}
              imageSource={require("../assets/image7.png")}
              description="Só 30% de dados ambientais estão nos sites de estados da Amazônia Legal"
              height={208} // altura personalizada
              width={178} // largura personalizada
              onPress={() => {
                // Lógica para lidar com o pressionamento do card
              }}
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
    backgroundColor: "#fff",
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
