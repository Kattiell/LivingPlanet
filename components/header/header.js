import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from "react-native";

export default function Header({
  backgroundImageSource,
  navigateToOngs,
  navigateToDoacoes,
  navigateToNoticias,
}) {
  
  return (
    <View style={styles.container}>
      <ImageBackground
        source={backgroundImageSource}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.logoContainer}>
          <View>
            <Image
              style={styles.logo}
              source={require("./../../assets/iconLogo.png")}
            />
          </View>
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
    height: 190,
    paddingHorizontal: 0.0 * width, // utiliza a largura da tela para definir o espaçamento horizontal
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 40,
    paddingEnd: 30,
    paddingStart: 30,
  },
  logo: {
    width: 0.09 * width, // utiliza a largura da tela para definir o tamanho da logo
    height: 0.09 * width,
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
    color: "white",
    fontSize: 35,
    fontFamily: "Imbue",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
