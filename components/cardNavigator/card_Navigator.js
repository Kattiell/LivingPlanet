import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CardNavigator({ imageSource, description, height, width, onPress }) {
  const navigation = useNavigation();

  const handleCardPress = () => {
    if (onPress) {
      onPress();
    } else {
      // Lógica de navegação para outra tela aqui
      navigation.navigate('OutraTela');
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handleCardPress}>
      <ImageBackground source={imageSource} style={[styles.cardImage, { height, width }]}>
        <View style={styles.overlay}>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  cardImage: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardDescription: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 15,
    textAlign: 'center',
  },
});
