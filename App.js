import { createStackNavigator } from "@react-navigation/stack";
import Initial from "./pages/initial";
import Home from "./pages/home";
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Initial" component={Initial} options={{headerTitle: '', headerStyle:{ height: 0}}}/>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
