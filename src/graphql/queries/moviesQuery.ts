import { gql } from '@apollo/client';
import { Movie } from '../../types';

export const moviesQuery = gql`
  query GetMovies {
    allFilms {
      films {
        id
        title
        releaseDate
        openingCrawl
      }
    }
  }
`;

export type MoviesData = {
  allFilms: {
    films: Movie[];
  };
};
