import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import CardEspecification from "../cardEspecification/cardEspecification";

export default function GridOfCards({ cards }) {
  const renderCards = () => {
    const rows = Math.ceil(cards.length / 2);
    const cardViews = [];

    for (let i = 0; i < rows; i++) {
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
            <CardEspecification
              institutionName={cards[i * 2 + 1].institutionName}
              contact={cards[i * 2 + 1].contact}
              linkdonation={cards[i * 2 + 1].linkdonation}
              description={cards[i * 2 + 1].description}
              onPress={cards[i * 2 + 1].onPress}
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