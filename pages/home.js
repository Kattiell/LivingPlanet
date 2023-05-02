import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import CardNoticiaImagem from "../components/CardNoticiaImagem/CardNoticiaImagem";
import ButtonAcess from '../components/button/button';


export default function Home() {
  return (
      <ImageBackground imageStyle={{ resizeMode: 'cover' }} source={require('./../assets/fundo.jpg')} style={styles.background}>
        <View style={styles.container}>
        <View style={styles.containerOptions}>
          <View>
            <Image style={styles.iconLogo} source={require('./../assets/iconLogo.png')} />
          </View>

          <View style={styles.options}>
            <View>
              <TouchableOpacity >
                <Text style={styles.textOptionButton}>Ongs</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity >
                <Text style={styles.textOptionButton}>Doações</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity >
                <Text style={styles.textOptionButton}>Notícias</Text>
              </TouchableOpacity>
            </View>
          </View>

        </View>

        <View style={styles.mainTitle}>
          <Text style={styles.mainTitleText}>
            <Text style={{ fontWeight: "700" }}>Desmatamento</Text> na {'\n'}
            Amazônia saiba o que {'\n'}
            fazer e como ajudar
          </Text>
        </View>

        <View style={styles.mainCard}>
          <CardNoticiaImagem
            height={140}
            imagePath={require("./../assets/leopardo.jpg")}
            textContent={"Onça Pintada: entenda porque um dos felinos mais fomidavéis corre risco de extinção."}
          />
        </View>

        </View>
      </ImageBackground>
  );
}



const styles = StyleSheet.create({
  container:{
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    height: '100%',
    width: '100%',
    flex: 1,
    margin: 0,
    padding: 0,
    height:"100%",
  },
  background: {
    height: '100%',
    width: '100%',
    flex: 1,
    margin: 0,
    padding: 0,
  },
  containerOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingEnd: 30,
    paddingStart: 30
  },
  iconLogo: {
    width: 40,
    height: 40
  },
  options: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
  },
  textOptionButton: {
    color: "white",
    fontSize: 35,
    fontFamily: "Imbue"
  },
  mainTitle: {
    padding: 40,
    paddingBottom: 100
  },
  mainTitleText: {
    color: "white",
    fontSize: 24
  },
  mainCard: {
    paddingLeft: 40,
    paddingRight: 40,
  },
});
