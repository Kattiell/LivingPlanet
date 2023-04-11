import { StatusBar } from 'expo-status-bar';
import { Button } from 'react-native';

export default function Initial() {
    return(
        <View style={styles.container}>
        <Text>Esta é a tela Inicial</Text>
        <StatusBar style="auto" />
        <Button onPress={}>

        </Button>
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
