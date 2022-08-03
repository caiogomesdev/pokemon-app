export interface ApiPokemonList {
  count: number;
  next: string | null;
  previous: string | null;
  results: ApiResult[];
}

export interface ApiPokemon {
  id: number;
  height: number;
  name: string;
  abilities: Abilities[];
  sprites: Sprites;
  species: Species;
  stats: Stats[];
}

export interface ApiPokemonSpecies {
  flavor_text_entries: FlavorTextEntries[];
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface FlavorTextEntries {
  flavor_text: string;
  language: {
    name: string;
  };
}

interface Species {
  name: string;
  url: string;
}

interface Sprites {
  other: {
    'official-artwork': {
      front_default: string;
    };
  };
}

interface Abilities {
  ability: {
    name: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface ApiResult {
  url: string;
}
