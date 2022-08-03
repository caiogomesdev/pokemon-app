import { favoriteService } from '../favorite-service';
import { httpClient } from '../http-client';
import {
  ApiPokemon,
  ApiPokemonSpecies,
  ApiResult,
  AppPokemon,
} from '../models';

export const getAppPokemon = async (item: ApiResult): Promise<AppPokemon> => {
  const pokemon = (await httpClient.get<ApiPokemon>(item.url)).data;
  const species = (await httpClient.get<ApiPokemonSpecies>(pokemon.species.url))
    .data;

  return {
    id: pokemon.id,
    name: pokemon.name,
    abilities: pokemon.abilities.map((skill) => skill.ability.name),
    description:
      species.flavor_text_entries.find((spec) => spec.language.name === 'en')
        ?.flavor_text ?? '',
    image: pokemon.sprites.other['official-artwork'].front_default,
    stats: pokemon.stats.map((stat) => ({
      skill: stat.stat.name,
      range: stat.base_stat,
    })),
  };
};
