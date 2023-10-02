import { gql } from '@apollo/client';
import { Character } from '../../types';

export const characterQuery = gql`
  query GetCharacter($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      height
      mass
      filmConnection {
        films {
          id
          title
          releaseDate
          openingCrawl
        }
      }
      homeworld {
        id
        name
        population
        gravity
        diameter
      }
    }
  }
`;

export type CharacterData = {
  person: Character;
};
