import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "../components/header/header";

export default function Home() {
  const handleNavigateToOngs = () => {
    console.log("Navegar para Ongs");
  };
  const handleNavigateToDoacoes = () => {
    console.log("Navegar para Doações");
  };
  const handleNavigateToNoticias = () => {
    console.log("Navegar para Notícias");
  };
  return (
    <View style={styles.container}>
      <Text>Essa é a tela Home</Text>
      <StatusBar style="auto" />
      <Header
        imageSource={require("../assets/logo.svg")}
        backgroundImageSource={require('../assets/header.png')}
        navigateToOngs={handleNavigateToOngs} // Função para a propriedade navigateToOngs
        navigateToDoacoes={handleNavigateToDoacoes} // Função para a propriedade navigateToDoacoes
        navigateToNoticias={handleNavigateToNoticias} // Função para a propriedade navigateToNoticias
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
