import { ApiPokemonList, AppPokemon } from '../models';
import { getAppPokemon } from './get-app-pokemon';

export const getAppPokemonList = async (
  data: ApiPokemonList
): Promise<AppPokemon[]> => {
  return Promise.all(
    data.results.map<Promise<AppPokemon>>((item) => getAppPokemon(item))
  );
};
