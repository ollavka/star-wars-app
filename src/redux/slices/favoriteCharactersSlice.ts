/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../../types';

export interface FavoriteCharactersState {
  items: Character[];
}

const initialState: FavoriteCharactersState = {
  items: [],
};

export const favoriteCharactersSlice = createSlice({
  name: 'favoriteCharacters',
  initialState,
  reducers: {
    like: (state, action: PayloadAction<Character>) => {
      state.items.push(action.payload);
    },
    dislike: (state, action: PayloadAction<Character>) => {
      state.items = state.items.filter((character) => (
        character.id !== action.payload.id
      ));
    },
  },
});

export const { like, dislike } = favoriteCharactersSlice.actions;

export default favoriteCharactersSlice.reducer;
