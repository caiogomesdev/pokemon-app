export interface AppPokemon {
  id: number;
  name: string;
  description: string;
  image: string;
  abilities: string[];
  stats: Stats[];
}

interface Stats {
  skill: string;
  range: number;
}
