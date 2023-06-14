import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Linking,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import SvgUri from "react-native-svg-uri";
import PropTypes from "prop-types";

export default function CardEspecification({
  institutionName,
  contact,
  linkdonation,
  description,
  onPress,
}) {
  const handleWhatsApp = (contact) => {
    const message = `Olá, estou interessado em fazer uma doação. Gostaria de saber mais informações.`;
    const url = `https://wa.me/${contact}?text=${encodeURIComponent(message)}`;
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <SvgUri
        width={30}
        height={30}
        uri={require("../../assets/globo.svg")}
        style={styles.icon}
      />
      <Icon name="globe" size={45} style={styles.icon} />
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.institutionName}>{institutionName}</Text>

        <Text style={styles.description}>{description}</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Text style={styles.donation}>{linkdonation}</Text>
        <TouchableOpacity onPress={() => handleWhatsApp(contact)}>
          <Text style={styles.contact}>
            contato: <Text style={styles.contactText}>{contact}</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

CardEspecification.propTypes = {
  institutionName: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  linkdonation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    width: "48%",
    height: 194,
    backgroundColor: "#385D2F",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    marginHorizontal: 3,
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
    alignItems: "center",
    justifyContent: "center",
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
  description: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: 12,
    lineHeight: 14,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: 5,
  },
});
