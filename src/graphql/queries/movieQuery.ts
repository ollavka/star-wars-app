import { gql } from '@apollo/client';
import { Movie } from '../../types';

export const movieQuery = gql`
  query GetMovie($id: ID!) {
    film(id: $id) {
      id
      title
      releaseDate
      openingCrawl
      speciesConnection {
        totalCount
      }
      planetConnection {
        totalCount
      }
      vehicleConnection {
        totalCount
      }
      characterConnection {
        totalCount
        characters {
          id
          name
        }
      }
    }
  }
`;

export type MovieData = {
  film: Movie;
};
