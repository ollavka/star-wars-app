import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Movie, Tabs } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { List } from './List';
import { MovieItem } from './MovieItem';

type CharacterMoviesParams = {
  movies: Movie[];
};

type RootStackParamList = {
  [Tabs.CharacterMovies]: CharacterMoviesParams;
};

type CharacterMoviesRouteProp = NativeStackScreenProps<
  RootStackParamList,
  Tabs.CharacterMovies
>;

export const CharacterMovies: FC<CharacterMoviesRouteProp> = ({ route, navigation }) => {
  const { movies } = route.params;

  return (
    <List
      data={movies}
      style={styles.list}
      renderItem={({ item }) => (
        <MovieItem item={item} navigation={navigation} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 90,
  },
});
