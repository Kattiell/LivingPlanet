import { createStackNavigator } from '@react-navigation/stack';
import Initial from './pages/initial';
import Home from './pages/home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}

