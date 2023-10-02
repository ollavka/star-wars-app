import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { MovieScreen } from '../screens/MovieScreen';
import { CharacterScreen } from '../screens/CharacterScreen';
import { Screen } from '../types';
import { Text } from 'react-native';

const RootStack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <RootStack.Navigator initialRouteName={Screen.Home}>
      <RootStack.Screen name={Screen.Home} component={HomeScreen}  />
      <RootStack.Screen name={Screen.Movie} component={MovieScreen} />
      <RootStack.Screen name={Screen.Character} component={CharacterScreen} />
    </RootStack.Navigator>
  );
};
