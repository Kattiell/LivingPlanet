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
  height, // nova propriedade de altura
}) {
  
  return (
    <View style={[styles.container, { height: height || 190 }]}>
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
    width: "100%",
    height: "100%",
    paddingHorizontal: 0.0 * width, // utiliza a largura da tela para definir o espaçamento horizontal
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
    paddingTop: 35,
    paddingEnd: 30,
    paddingStart: 30,
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
    flexDirection: "row",
    height: "100%",
    alignItems: "flex-start",
    resizeMode: "cover",
    justifyContent: "center",
  },
});
