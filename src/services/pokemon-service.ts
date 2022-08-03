import { getAppPokemon, getAppPokemonList } from './helpers';
import { httpClient } from './http-client';
import { ApiPokemonList, AppPokemon } from './models';

export class PokemonService {
  next: string | null = null;
  previous: string | null = null;

  async getFeaturedAndInitialList(): Promise<{
    featured: AppPokemon;
    pokemons: AppPokemon[];
  }> {
    const result = (
      await httpClient.get<ApiPokemonList>('https://pokeapi.co/api/v2/pokemon')
    ).data;
    this.next = result.next;
    this.previous = result.previous;

    const random = Math.floor(Math.random() * (result.count - 1) + 1);

    const pokemons = await getAppPokemonList(result);
    const featured = await getAppPokemon({
      url: `https://pokeapi.co/api/v2/pokemon/${random}/`,
    });
    return { pokemons, featured };
  }
}

export const pokemonService = new PokemonService();
