import { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Fab } from '@gluestack-ui/themed';
import { Screen, Tabs } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CharacterDetails } from '../components/CharacterDetails';
import { CharacterMovies } from '../components/CharacterMovies';
import { useQuery } from '@apollo/client';
import { CharacterData, characterQuery } from '../graphql/queries/characterQuery';
import { ErrorHandler } from '../components/ErrorHandler';
import { Loader } from '../components/Loader';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { LikeButton } from '../components/LikeButton';

type CharacterParams = {
  id: string;
};

type RootStackParamList = {
  [Screen.Character]: CharacterParams;
};

type CharacterScreenRouteProp = NativeStackScreenProps<
  RootStackParamList,
  Screen.Character
>;

const Tab = createMaterialTopTabNavigator();

export const CharacterScreen: FC<CharacterScreenRouteProp> = ({
  route,
  navigation,
}) => {
  const { id } = route.params;

  const { data, loading, error } = useQuery<CharacterData>(characterQuery, {
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

  const { person: character } = (data as CharacterData);
  const { films: movies } = character.filmConnection;

  const backToHome = () => {
    navigation.popToTop();
  };

  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name={Tabs.CharacterDetails}
          component={CharacterDetails}
          initialParams={{ character }}
          options={{
            tabBarStyle: styles.tab,
          }}
        />
        <Tab.Screen
          name={Tabs.CharacterMovies}
          component={CharacterMovies}
          initialParams={{ movies }}
          options={{
            tabBarStyle: styles.tab,
          }}
        />
      </Tab.Navigator>

      <Fab size="lg" placement="bottom right" onPress={backToHome}>
        <Icon name="home" size={30} color="#fff" />
      </Fab>

      <LikeButton character={character} />
    </>
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
