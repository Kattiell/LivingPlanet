import {
    StyleSheet,
    Text,
    View,
    ScrollView,
  } from "react-native";
  import Header from "../components/header/header";
  import { useNavigation } from "@react-navigation/native";
  
  export default function Ongs() {
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
          <View>
            <Text style={styles.text}>Seu texto aqui</Text>
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
    text: {
      position: "absolute",
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
  