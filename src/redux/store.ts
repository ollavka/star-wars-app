import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './slices/favoriteCharactersSlice';

export const store = configureStore({
  reducer: {
    favoiriteCharacters: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
