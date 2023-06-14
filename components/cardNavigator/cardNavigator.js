import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CardNavigator({
  imageSource,
  description,
  height,
  width,
  onPress,
  style,
}) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    if (onPress) {
      onPress();
    } else {
      // Lógica de navegação para outra tela aqui
      navigation.navigate("OutraTela");
    }
  };

  return (
    <View style={[styles.container, { height, width }, style]}>
      <ImageBackground source={imageSource} style={styles.cardImage}>
        <View style={styles.overlay}>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "50%", // Dividir em duas colunas
    height: "50%", // Dividir em duas linhas
  },
  cardImage: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: "center",
    width: "104.5%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 4,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cardDescription: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
    lineHeight: 15,
    textAlign: "center",
  },
});
