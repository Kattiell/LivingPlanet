import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import ButtonAcess from '../components/button/button';
export default function Initial() {


  return (
    <View style={styles.container}>
           <ButtonAcess text={"Acessar"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});