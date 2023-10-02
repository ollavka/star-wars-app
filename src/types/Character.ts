import { Movie } from './Movie';
import { Planet } from './Planet';

export interface Character {
  id: string;
  name: string;
  birthYear: string;
  height: number;
  mass: string;
  filmConnection: {
    films: Movie[];
  };
  homeworld: Planet;
}
