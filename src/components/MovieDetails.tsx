import { FC } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Movie, Tabs } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type MovieDetailsParams = {
  movie: Movie;
};

type RootStackParamList = {
  [Tabs.MovieDetails]: MovieDetailsParams;
};

type MovieScreenRouteProp = NativeStackScreenProps<
  RootStackParamList,
  Tabs.MovieDetails
>;

export const MovieDetails: FC<MovieScreenRouteProp> = ({ route }) => {
  const { movie } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{movie.title}</Text>

      <Text style={styles.crawl}>{movie.openingCrawl}</Text>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Release Date:</Text>
        <Text style={styles.value}>{movie.releaseDate}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Species count:</Text>
        <Text style={styles.value}>{movie.speciesConnection.totalCount}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Planet count:</Text>
        <Text style={styles.value}>{movie.planetConnection.totalCount}</Text>
      </View>

      <View style={styles.item}>
        <Text style={styles.subtitle}>Vehicle count:</Text>
        <Text style={styles.value}>{movie.vehicleConnection.totalCount}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
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
  crawl: {
    fontSize: 20,
    marginBottom: 30,
  },
});
