import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardEspecification from "../cardEspecification/cardEspecification";

export default function GridOfCards({ cards }) {
  // Função para renderizar as views com base no array de cards
  const renderCards = () => {
    const rows = Math.ceil(cards.length / 2); // Calcula o número de linhas
    const cardViews = [];

    for (let i = 0; i < rows; i++) {
      // Loop para cada linha
      cardViews.push(
        <View key={i} style={styles.row}>
          <CardEspecification
            institutionName={cards[i * 2].institutionName}
            contact={cards[i * 2].contact}
            linkdonation={cards[i * 2].linkdonation}
            description={cards[i * 2].description}
            onPress={cards[i * 2].onPress}
          />
          {i * 2 + 1 < cards.length && (
            // Verifica se há um card válido para a segunda coluna
            <CardEspecification
              institutionName={cards[i * 2 + 1].institutionName}
              description={cards[i * 2].description}
              contact={cards[i * 2 + 1].contact}
              linkdonation={cards[i * 2 + 1].linkdonation}
              onPress={cards[i * 2].onPress}
            />
          )}
        </View>
      );
    }
    return cardViews;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {renderCards()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
  },
});
