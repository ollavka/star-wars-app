import { Character } from './Character';

export type Connection = {
  totalCount: number;
};

export interface Movie {
  id: string;
  title: string;
  releaseDate: string;
  openingCrawl: string;
  speciesConnection: Connection;
  planetConnection: Connection;
  vehicleConnection: Connection;
  characterConnection: Connection & {
    characters: Character[];
  };
}
