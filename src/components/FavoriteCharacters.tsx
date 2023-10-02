import { FC } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useAppSelector } from '../redux/hooks';
import { selectFavoritesCharacters } from '../redux/selectors';
import { List } from './List';
import { Screen } from '../types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

export const FavoriteCharacters: FC<NativeStackScreenProps<any>> = ({
  navigation,
}) => {
  const { items } = useAppSelector(selectFavoritesCharacters);

  return (
    <View style={styles.container}>
      {!items.length ? (
        <View style={styles.emptyList}>
          <Text style={styles.title}>
            Your list of favorite actors is empty.
          </Text>
        </View>
      ) : (
        <>
          <Text style={styles.title}>Favorite characters</Text>

          <List
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.item}
                onPress={() =>
                  navigation.navigate(Screen.Character, { id: item.id })
                }
              >
                <Text style={styles.text}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  emptyList: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
