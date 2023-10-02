import { FC } from 'react';
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Character, Screen, Tabs } from "../types";
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { List } from './List';

type MovieCharactersParams = {
  characters: Character[];
};

type RootStackParamList = {
  [Tabs.MovieCharacters]: MovieCharactersParams;
  [Screen.Character]: {
    id: string;
  };
};

type MovieCharactersRouteProp = NativeStackScreenProps<
  RootStackParamList,
  Tabs.MovieCharacters
>;

export const MovieCharacters: FC<MovieCharactersRouteProp> = ({ route, navigation }) => {
  const { characters } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Characters</Text>

      <List
        data={characters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate(Screen.Character, { id: item.id })}
          >
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 16,
    marginBottom: 12,
  },
  item: {
    padding: 12,
    marginBottom: 8,
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 2,
  },
  text: {
    fontSize: 16,
  },
});
