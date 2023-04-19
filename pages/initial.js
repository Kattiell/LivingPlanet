import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import ButtonAcess from "../components/button/button";
import CardEspecification from "../components/cardEspecification/card_Especification";
import GridOfCards from "../components/cardGrid/card_Grid";
export default function Initial() {
  const cards = [
    {
      institutionName: "Instituição 1",
      contact: "contato 1",
      donation: "doação 1",
    },
    {
      institutionName: "Instituição 2",
      contact: "contato 2",
      donation: "doação 2",
    },
    {
      institutionName: "Instituição 3",
      contact: "contato 3",
      donation: "doação 3",
    },
    {
      institutionName: "Instituição 4",
      contact: "contato 4",
      donation: "doação 4",
    },
    {
      institutionName: "Instituição 5",
      contact: "contato 5",
      donation: "doação 5",
    },
    {
      institutionName: "Instituição 6",
      contact: "contato 6",
      donation: "doação 6",
    },
    {
      institutionName: "Instituição 7",
      contact: "contato 7",
      donation: "doação 7",
    },
    {
      institutionName: "Instituição 8",
      contact: "contato 8",
      donation: "doação 8",
    },
    {
      institutionName: "Instituição 9",
      contact: "contato 9",
      donation: "doação 9",
    },
    {
      institutionName: "Instituição 10",
      contact: "contato 10",
      donation: "doação 10",
    },
    {
      institutionName: "Instituição 11",
      contact: "contato 10",
      donation: "doação 10",
    },
    {
      institutionName: "Instituição 12",
      contact: "contato 10",
      donation: "doação 10",
    }
  ];
  return (
    <View style={styles.container}>
      <ButtonAcess text={"Acessar"} />
      <GridOfCards cards={cards}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
