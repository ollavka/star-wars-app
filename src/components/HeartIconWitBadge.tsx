import { FC } from 'react';
import { useAppSelector } from '../redux/hooks';
import { selectFavoritesCharacters } from '../redux/selectors';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  size: number;
  color: string;
};

export const HeartIconWithBadge: FC<Props> = ({ size, color }) => {
  const { items } = useAppSelector(selectFavoritesCharacters);

  return (
    <View style={{ width: 24, height: 24 }}>
      <Icon name="heart" size={size} color={color} />

      {items.length > 0 && (
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>{items.length}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  badgeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 18,
    height: 18,
  },
  badgeText: {
    color: 'white',
    fontSize: 10,
  },
});

