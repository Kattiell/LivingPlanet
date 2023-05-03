import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ButtonAcess({ text, iconName, onPress }) {
  const buttonHeight = 35;

  return (
    <TouchableOpacity
      style={[styles.button, { height: buttonHeight }]} onPress={onPress}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
        <View style={styles.iconContainer}>
          <AntDesign name={iconName} size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

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
    width: 177,
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
