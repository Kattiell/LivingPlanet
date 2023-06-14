import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

export default function ButtonCirculo({
  text,
  iconName,
  onPress,
  height,
  width,
  textStyle,
}) {
  const buttonHeight = height || 35;
  const buttonWidth = width || 177;

  return (
    <TouchableOpacity
      style={[styles.button, { height: buttonHeight, width: buttonWidth }]}
      onPress={onPress}
    >
      <View style={styles.buttonContainer}>
        <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        
      </View>
    </TouchableOpacity>
  );
}

ButtonCirculo.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  textStyle: PropTypes.object,
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#254120",
    borderRadius: 100,
    paddingRight: 20,
    justifyContent: "center",
  },
  iconContainer: {
    backgroundColor: "#132610",
    borderRadius: 4,
    paddingHorizontal: 10,
    justifyContent: "center",
    width: 60,
    height: 51,
    alignItems: "center",
  },
});
