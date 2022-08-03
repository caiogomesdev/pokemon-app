import React, { createContext, useEffect, useState } from 'react';
import { AppPokemon } from '../services/models';
import { pokemonService } from '../services/pokemon-service';

interface ApplicationContext {
  // hasNext: boolean;
  // hasPrevious: boolean;
  pokemons: AppPokemon[];
  favoriteList: AppPokemon[];
  featured?: AppPokemon;
}

export const AppContext = createContext<ApplicationContext | null>(null);

const Hook: React.FC = ({ children }) => {
  const [featured, setFeatured] = useState<AppPokemon>();
  const [pokemons, setPokemons] = useState<AppPokemon[]>([]);
  // const [next, setNext] = useState(false);
  // const [previous, setPrevious] = useState(false);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const result = await pokemonService.getFeaturedAndInitialList();
    setFeatured(result.featured);
    setPokemons(result.pokemons);
  }

  return (
    <AppContext.Provider value={{ pokemons, favoriteList: [], featured }}>
      {children}
    </AppContext.Provider>
  );
};

export default Hook;
