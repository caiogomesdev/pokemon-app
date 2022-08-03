export interface AppPokemon {
  id: number;
  name: string;
  description: string;
  image: string;
  abilities: string[];
  stats: Stats[];
  isFavorite: boolean;
}

export interface Stats {
  skill: string;
  range: number;
}
