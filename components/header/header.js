import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Image,
  Dimensions,
} from "react-native";
import SvgUri from "react-native-svg-uri";

export default function Header({
  imageSource,
  backgroundImageSource,
  navigateToOngs,
  navigateToDoacoes,
  navigateToNoticias,
}) {
  // converte a propriedade imageSource para string
  const sourceString = imageSource.toString();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImageSource}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <SvgUri
            width="100"
            height="40"
            source={sourceString}
          />
        </View>
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToOngs}>
            <Text style={styles.menuItemText}>Ongs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToDoacoes}>
            <Text style={styles.menuItemText}>Doações</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={navigateToNoticias}
          >
            <Text style={styles.menuItemText}>Notícias</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 190, // aumenta a altura do Header
    paddingHorizontal: 0.0 * width, // utiliza a largura da tela para definir o espaçamento horizontal
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  logoContainer: {
    flex: 1,
  },
  logo: {
    width: 0.35 * width, // utiliza a largura da tela para definir o tamanho da logo
    height: 0.07 * width,
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingBottom: 145,
  },
  menuItem: {
    paddingHorizontal: 8,
  },
  menuItemText: {
    fontSize: 18,
    color: "#FFF",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});