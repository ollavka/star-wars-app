import { Movie } from '../types';

export const getSortedMovies = (
  movies: Movie[],
  isReversed: boolean = false
) => {
  let sortedMovies = [...movies].sort((a, b) => {
    const dateA = new Date(a.releaseDate).getTime();
    const dateB = new Date(b.releaseDate).getTime();

    return dateB - dateA;
  })

  if (isReversed) {
    sortedMovies.reverse();
  }

  return sortedMovies;
};
