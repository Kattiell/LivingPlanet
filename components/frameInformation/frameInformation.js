import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import PropTypes from "prop-types";
import ButtonAcess from "../button/button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function FrameInformation({
  tag1,
  tag2,
  endereco,
  email,
  height,
  width,
}) {
  const navigation = useNavigation();

  const handleButtonPress = () => {
    Linking.openURL(
      "https://regeneracaoglobal.com/pesquisa-de-solucoes#googtrans(pt)"
    );
  };

  const handleEmailPress = () => {
    const subject = "Assunto do e-mail";
    const body = "Mensagem padrão do e-mail";

    const emailUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    Linking.openURL(emailUrl);
  };

  return (
    <View style={[styles.container, { height, width }]}>
      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/logoquadro.png")}
          style={styles.icon}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.tag1, { color: "#59AC10" }]}>{tag1}</Text>
        <Text style={styles.email}>{endereco}</Text>
        <TouchableOpacity onPress={handleEmailPress}>
          <Text style={[styles.tag2, { color: "#59AC10" }]}>{tag2}</Text>
          <Text style={styles.email}>{email}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerForm}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <ButtonAcess
            text="Quero ser Voluntário"
            height={25}
            width={180}
            textStyle={styles.buttonText}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

FrameInformation.propTypes = {
  tag1: PropTypes.string.isRequired,
  tag2: PropTypes.string.isRequired,
  endereco: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 3,
    borderColor: "#385D2F",
  },
  iconContainer: {
    paddingTop: 5,
  },
  containerForm: {
    width: 330,
  },
  buttonText: {
    fontSize: 10,
  },
  button: {
    backgroundColor: "#254120",
    borderRadius: 5,
    paddingVertical: 2,
    width: "50%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 80,
    height: 80,
  },
  textContainer: {
    alignSelf: "flex-start",
    paddingLeft: 10,
  },
  tag1: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 4,
    color: "#59AC10",
    textAlign: "justify",
  },
  tag2: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "bold",
    color: "#59AC10",
    textAlign: "justify",
  },
  email: {
    fontFamily: "Roboto",
    fontSize: 12,
    marginTop: 2,
    color: "#999999",
    paddingBottom: 10,
    textAlign: "left",
  },
  endereco: {
    fontFamily: "Roboto",
    fontSize: 12,
    color: "#999999",
    textAlign: "left",
  },
});
