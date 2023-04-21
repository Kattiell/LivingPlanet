import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SvgUri from "react-native-svg-uri";
import PropTypes from "prop-types";

export default function CardEspecification({ institutionName, contact, donation }) {
  return (
    <View style={styles.container}>
      <SvgUri
        width={30}
        height={30}
        uri={require("../../assets/globo.svg")}
        style={styles.icon}
      />
      <Icon name="globe" size={45} style={styles.icon} />
      <Text style={styles.institutionName}>{institutionName}</Text>
      <View style={styles.contentContainer}>
        <Text style={styles.donation}>{donation}</Text>
        <Text style={styles.contact}>
          contato: <Text style={styles.contactText}>{contact}</Text>
        </Text>
      </View>
    </View>
  );
}

CardEspecification.propTypes = {
  institutionName: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  donation: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: "48%", // atualizada para "50%" para ocupar metade do espaço disponível
    height: 154,
    backgroundColor: "#385D2F",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
    paddingHorizontal: 5,
    marginHorizontal: 5, // Adicionando margem horizontal entre os quadrinhos
  },
  institutionName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 12,
    lineHeight: 15,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 25,
  },
  contentContainer: {
    paddingTop: 10,
  },
  icon: {
    position: "absolute",
    top: 0,
    color: "#59AC10",
    paddingTop: 10,
    alignSelf: "center",
    height: "100%",
  },
  contact: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "center",
    color: "#FFFFFF",
    paddingTop: 10,
  },
  contactText: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 10,
    lineHeight: 12,
    textAlign: "center",
    color: "#FFFFFF",
    paddingTop: 10,
  },
  donation: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    color: "#A1FF4E",
    marginTop: 5,
  },
});
