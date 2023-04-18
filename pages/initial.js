import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ButtonAcess from '../components/button/button';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function Initial() {

  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Image
          source={require('../assets/logo.jpg')}
          style={{width: '100%'}}
          resizeMode='contain'
        />
      </View>
      <View style={styles.containerForm}>
        <Text style={styles.title}>Bem Vindo</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3C8000',
  },
  containerLogo: {
    flex: 2,
    backgroundColor: '#3C8000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    flex: 1,
    backgroundColor: '#3C8000',
    paddingStart: '5%',
    paddingEnd: '5%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  button: {
    
    backgroundColor: '#254120',
    borderRadius: 5,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold'
  }
});