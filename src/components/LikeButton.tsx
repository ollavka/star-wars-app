import { FC, useMemo } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Character } from '../types';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { selectFavoritesCharacters } from '../redux/selectors';
import { like, dislike } from '../redux/slices/favoriteCharactersSlice';

type Props = {
  character: Character;
};

export const LikeButton: FC<Props> = ({ character }) => {
  const { items } = useAppSelector(selectFavoritesCharacters);
  const dispacth = useAppDispatch();

  const isFavoriteCharacter = useMemo(() => (
    items.some(({ id }) => id === character.id)
  ), [items, character]);

  const onPress = () => {
    if (!isFavoriteCharacter) {
      dispacth(like(character));

      return;
    }

    dispacth(dislike(character));
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Icon
          name={isFavoriteCharacter ? 'heart' : 'heart-outline'}
          color={isFavoriteCharacter ? 'red' : 'black'}
          size={30}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 16,
    left: 16,
    padding: 10,
    borderWidth: 1,
    borderRadius: 65,
    width: 65,
    height: 65,
  },
});
