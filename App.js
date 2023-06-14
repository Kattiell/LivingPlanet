import { createStackNavigator } from "@react-navigation/stack";
import Initial from "./pages/initial";
import Home from "./pages/home";
import DetailNotice from "./pages/detailNotice";
import Notice from "./pages/notice";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Ongs from "./pages/ongs";
import OngsDetail from "./pages/ongsDetail";
import Donation from "./pages/donation";

const Stack = createStackNavigator();

export default function App() {
  const [loaded] = useFonts({
    Imbue: require("./assets/fonts/Imbue.ttf"),
    Imbue2: require("./assets/fonts/Imbue2.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
  });

  if (!loaded) {
    return <Text>Fontes não carregaram.</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicial"
          component={Initial}
          options={{ headerTitle: "", headerStyle: { height: 0 } }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerTitle: "", headerStyle: { height: 0 } }}
        />
        <Stack.Screen
          name="Noticias"
          component={Notice}
          options={{ headerTitle: "", headerStyle: { height: 0 } }}
        />
        <Stack.Screen
          name="Noticia Detalhada"
          component={DetailNotice}
          options={{ headerTitle: "", headerStyle: { height: 0 } }}
        />
        <Stack.Screen
          name="Organizações"
          component={Ongs}
          options={{ headerTitle: "", headerStyle: { height: 0 } }}
        />
        <Stack.Screen
          name="Organizações Detalhada"
          component={OngsDetail}
          options={{ headerTitle: "", headerStyle: { height: 0 } }}
        />
        <Stack.Screen
          name="Doações"
          component={Donation}
          options={{ headerTitle: "", headerStyle: { height: 0 } }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
