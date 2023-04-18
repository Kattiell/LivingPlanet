import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ButtonAcess({ text }) {
  const buttonHeight = 50;

  return (
    <TouchableOpacity style={[styles.button, { height: buttonHeight }]}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
        <View style={[styles.iconContainer, { height: buttonHeight }]}>
          <AntDesign name="right" size={20} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#254120",
    borderRadius: 8,
    paddingRight: 2,
    paddingHorizontal: 16,
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    width: 180
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    textTransform: "uppercase",
  },
  iconContainer: {
    backgroundColor: "#132610",
    borderRadius: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    width: 60,
    alignItems: "center",
  },
});