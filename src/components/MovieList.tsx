import { FC, useCallback, useState, useMemo } from 'react';
import {
  StyleSheet,
  RefreshControl,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useQuery } from '@apollo/client';
import { Loader } from './Loader';
import { ErrorHandler } from './ErrorHandler';
import { List } from './List';
import { MovieItem } from './MovieItem';
import { MoviesData, moviesQuery } from '../graphql/queries/moviesQuery';
import { getSortedMovies } from '../utils/getSortedMovies';

export const MovieList: FC<NativeStackScreenProps<any>> = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [sortDesc, setSortDesc] = useState(false);
  const { data, loading, error, refetch } = useQuery<MoviesData>(moviesQuery);

  const toggleSortOrder = () => {
    setSortDesc((prevOrder) => !prevOrder);
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);

    refetch()
      .then(() => setRefreshing(false))
      .catch(() => setRefreshing(false));
  }, [refetch]);


  const sortedMovies = useMemo(() => {
    if (!data?.allFilms) {
      return [];
    }

    const { films } = data.allFilms;

    return getSortedMovies(films, sortDesc);
  },[data, sortDesc]);

  if (loading || refreshing) {
    return <Loader />;
  }

  if (error) {
    return (
      <ErrorHandler
        error={error}
        onRefresh={onRefresh}
        refreshing={refreshing}
      />
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleSortOrder} style={styles.sortButton}>
        <Text>{`Sort by release date (${sortDesc ? 'asc' : 'desc'})`}</Text>
      </TouchableOpacity>

      <List
        data={sortedMovies}
        style={styles.list}
        renderItem={({ item }) => (
          <MovieItem item={item} navigation={navigation} />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    paddingHorizontal: 16,
    marginTop: 70,
  },
  sortButton: {
    position: 'absolute',
    top: 10,
    left: 16,
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
  },
});
