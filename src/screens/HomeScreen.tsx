import { Tabs } from '../types';
import { StyleSheet, Text } from 'react-native';
import { MovieList } from '../components/MovieList';
import { FavoriteCharacters } from '../components/FavoriteCharacters';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HeartIconWithBadge } from '../components/HeartIconWitBadge';

const Tab = createBottomTabNavigator();

export const HomeScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Tabs.Movies}
        component={MovieList}
        options={{
          tabBarStyle: styles.tab,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Icon name="film" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name={Tabs.Characters}
        component={FavoriteCharacters}
        options={{
          tabBarStyle: styles.tab,
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <HeartIconWithBadge color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tab: {
    borderRadius: 20,
    shadowColor: 'transparent',
    marginVertical: 10,
    marginHorizontal: 16,
    overflow: 'hidden',
  },
});
