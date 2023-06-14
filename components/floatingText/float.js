import React from "react";
import { View, StyleSheet, Text } from "react-native";
import ButtonAcess from "../button/button";

export default function FloatingText({ children, floatChildren, maxWidth }) {
  const textContainerStyle = {
    flex: 1,
    maxWidth: maxWidth ? maxWidth : "100%",
  };

  return (
    <View style={styles.container}>
      <View style={styles.floatContainer}>
        {floatChildren && floatChildren}
      </View>
      <View style={[styles.textContainer, textContainerStyle]}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  floatContainer: {
    position: "absolute",
  },
  textContainer: {
    flex: 1,
  },
  text: {
    flexWrap: "wrap",

    fontStyle: "normal",
    fontWeight: "700",
    fontSize: 13,
    alignItems: "center",
    textAlign: "left",
  },
});
