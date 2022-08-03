import { getAppPokemon, getAppPokemonList, getOffSet } from './helpers';
import { httpClient } from './http-client';
import { ApiPokemonList, AppPokemon } from './models';

export class PokemonService {
  next: string | null = null;
  previous: string | null = null;
  total = 0;
  offset = 0;

  async getFeaturedAndInitialList(): Promise<{
    featured: AppPokemon;
    pokemons: AppPokemon[];
  }> {
    const result = (
      await httpClient.get<ApiPokemonList>('https://pokeapi.co/api/v2/pokemon')
    ).data;
    this.setProps(result);
    const random = Math.floor(Math.random() * (result.count - 1) + 1);

    const featured = await getAppPokemon({
      url: `https://pokeapi.co/api/v2/pokemon/${random}/`,
    });
    const pokemons = await getAppPokemonList(result);
    return { pokemons, featured };
  }

  async navigateNext() {
    if (!this.next) {
      return;
    }
    const result = (await httpClient.get<ApiPokemonList>(this.next)).data;
    this.setProps(result);
    return getAppPokemonList(result);
  }

  async navigatePrevious() {
    if (!this.previous) {
      return;
    }
    const result = (await httpClient.get<ApiPokemonList>(this.previous)).data;
    this.setProps(result);
    return getAppPokemonList(result);
  }

  private setProps(data: ApiPokemonList) {
    this.next = data.next;
    this.previous = data.previous;
    this.total = data.count;
    this.offset = getOffSet(this.next, this.total);
  }
}

export const pokemonService = new PokemonService();
