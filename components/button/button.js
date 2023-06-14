import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import PropTypes from "prop-types";

export default function ButtonAcess({
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
        {iconName && (
          <View style={styles.iconContainer}>
            <AntDesign name={iconName} size={20} color="white" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

ButtonAcess.propTypes = {
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
    borderRadius: 4,
    paddingRight: 0,
    paddingHorizontal: 30,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: 163,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
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
