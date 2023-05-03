import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
} from "react-native";
import ButtonAcess from "../components/button/button";
import { TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';

const image = require("./../assets/fundo1.jpg");

export default function Initial() {
  const navigation = useNavigation();

  // Função a ser executada quando o botão for pressionado
  const handleButtonPress = () => {
    navigation.navigate("Home"); // Exemplo: navegar para a tela "Home"
  };
  return (
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={styles.container}>
        <View style={styles.containerLogo}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: "100%" }}
            resizeMode="contain"
          />
        </View>
        <View style={styles.containerForm}>
          <TouchableOpacity style={styles.button}>
            <ButtonAcess text={"Acessar"} iconName={"right"} onPress={handleButtonPress} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  containerForm: {
    flex: 1,
    paddingStart: "5%",
    paddingEnd: "5%",
  },
  button: {
    position: "absolute",
    backgroundColor: "#254120",
    borderRadius: 5,
    paddingVertical: 8,
    width: "60%",
    alignSelf: "center",
    bottom: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    height: "100%",
    width: "100%",
    flex: 1,
    margin: 0,
    padding: 0,
  },
});