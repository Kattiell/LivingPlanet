import { useNavigation } from "@react-navigation/native";
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
  headerHeight = 190,
  title,
}) {
  const navigation = useNavigation();
  const handleReturnPress = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={[styles.container, { height: headerHeight }]}>
      <ImageBackground
        source={backgroundImageSource}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.overlay} />
        <View style={styles.logoContainer}>
          <TouchableOpacity onPress={handleReturnPress}>
            <Image
              style={styles.logo}
              source={require("./../../assets/iconLogo.png")}
            />
          </TouchableOpacity>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{title}</Text>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 0.0 * width,
  },
  logoContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
    paddingStart: 40,
  },
  logo: {
    width: 0.09 * width,
    height: 0.09 * width,
  },
  titleContainer: {
    marginTop: 35,
    paddingLeft: 90,

    paddingStart: 80,
    width: 0.49 * width, // Largura ajustada para o título
  },
  title: {
    fontSize: 19.5,
    color: "white",
    fontWeight: "bold",
    textAlign: "left",
  },
  menuContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",

    paddingTop: 15,
    paddingEnd: 100,
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
    alignItems: "flex-start",
    resizeMode: "cover",
    justifyContent: "center",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
  },
});
