import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Screen, Tabs } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { MovieDetails } from '../components/MovieDetails';
import { MovieCharacters } from '../components/MovieCharacters';
import { useQuery } from '@apollo/client';
import { movieQuery, MovieData } from '../graphql/queries/movieQuery';
import { Loader } from '../components/Loader';
import { ErrorHandler } from '../components/ErrorHandler';

type MovieScreenParams = {
  id: string;
};

type RootStackParamList = {
  [Screen.Movie]: MovieScreenParams;
};

type MovieScreenRouteProp = NativeStackScreenProps<
  RootStackParamList,
  Screen.Movie
>;

const Tab = createMaterialTopTabNavigator();

export const MovieScreen: FC<MovieScreenRouteProp> = ({ route }) => {
  const { id } = route.params;

  const { data, loading, error } = useQuery<MovieData>(movieQuery, {
    variables: { id },
  });

  if (error) {
    return (
      <ErrorHandler error={error} />
    );
  }

  if (loading) {
    return <Loader />;
  }

  const { film: movie } = (data as MovieData);
  const { characters } = movie.characterConnection;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={Tabs.MovieDetails}
        component={MovieDetails}
        initialParams={{ movie }}
        options={{
          tabBarStyle: styles.tab,
        }}
      />
      <Tab.Screen
        name={Tabs.MovieCharacters}
        component={MovieCharacters}
        initialParams={{ characters }}
        options={{
          tabBarStyle: styles.tab,
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
  container: {
    paddingHorizontal: 16,
  },
});
