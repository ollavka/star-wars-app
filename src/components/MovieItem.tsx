import { FC } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { truncateString } from '../utils/truncateString';
import { Movie, Screen } from '../types';

type Props = {
  item: Movie;
  navigation: NativeStackNavigationProp<any>;
};

export const MovieItem: FC<Props> = (props) => {
  const { item, navigation } = props;

  return (
    <TouchableOpacity
      style={styles.filmTouchable}
      onPress={() => navigation.navigate(Screen.Movie, { id: item.id })}
    >
      <View style={styles.filmCard}>
        <View style={styles.cardHeader}>
          <Text style={styles.filmTitle}>{item.title}</Text>
          <Text>{item.releaseDate}</Text>
        </View>
        <Text style={styles.openingCrawl}>
          {truncateString(item.openingCrawl)}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  filmInfo: {
    flex: 1,
    padding: 10,
  },
  filmTouchable: {
    marginBottom: 10,
  },
  filmCard: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  filmTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  releaseDate: {
    fontSize: 16,
    marginBottom: 5,
  },
  openingCrawl: {
    marginTop: 10,
    fontSize: 16,
    fontStyle: 'italic',
  },
});
