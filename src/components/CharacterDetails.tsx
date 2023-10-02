import { FC } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Character, Tabs } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type CharacterDetailsParams = {
  character: Character;
};

type RootStackParamList = {
  [Tabs.CharacterDetails]: CharacterDetailsParams;
};

type CharacterDetailsRouteProp = NativeStackScreenProps<
  RootStackParamList,
  Tabs.CharacterDetails
>;

export const CharacterDetails: FC<CharacterDetailsRouteProp> = ({ route }) => {
  const { character } = route.params;
  const { homeworld } = character;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{character.name}</Text>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Birth Year:</Text>
        <Text style={styles.value}>{character.birthYear}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Height:</Text>
        <Text style={styles.value}>{character.height}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Mass:</Text>
        <Text style={styles.value}>{character.mass}</Text>
      </View>

      <Text style={{ ...styles.title, fontSize: 18 }}>Homeworld</Text>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Name</Text>
        <Text style={styles.value}>{homeworld.name}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Diametr</Text>
        <Text style={styles.value}>{homeworld.diameter}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Population</Text>
        <Text style={styles.value}>{homeworld.population}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Gravity</Text>
        <Text style={styles.value}>{homeworld.gravity}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 16,
    textAlign: 'center',
  },
  subtitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
});

