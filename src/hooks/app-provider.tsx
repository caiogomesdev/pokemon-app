import React, { createContext, useEffect, useState } from 'react';
import { AppPokemon } from '../services/models';
import { pokemonService } from '../services/pokemon-service';

interface Pagination {
  hasNext: boolean;
  hasPrevious: boolean;
  total: number;
  offSet: number;
  nextPage(): Promise<void>;
  previousPage(): Promise<void>;
}

interface ApplicationContext {
  pagination: Pagination;
  pokemons: AppPokemon[];
  favoriteList: AppPokemon[];
  featured?: AppPokemon;
}

export const AppContext = createContext<ApplicationContext | null>(null);

const Hook: React.FC = ({ children }) => {
  const [featured, setFeatured] = useState<AppPokemon>();
  const [pokemons, setPokemons] = useState<AppPokemon[]>([]);
  const [pagination, setPagination] = useState<Pagination>({
    hasNext: false,
    hasPrevious: false,
    offSet: 0,
    total: 0,
    nextPage,
    previousPage,
  });

  useEffect(() => {
    init();
  }, []);

  async function init() {
    const result = await pokemonService.getFeaturedAndInitialList();
    setFeatured(result.featured);
    setPokemons(result.pokemons);
    populatePagination();
  }

  function populatePagination() {
    setPagination({
      hasNext: !!pokemonService.next,
      hasPrevious: !!pokemonService.previous,
      offSet: pokemonService.offset,
      total: pokemonService.total,
      nextPage,
      previousPage,
    });
  }

  async function previousPage() {
    const result = await pokemonService.navigatePrevious();
    if (result) {
      setPokemons(result);
    }
    populatePagination();
  }

  async function nextPage() {
    const result = await pokemonService.navigateNext();
    if (result) {
      setPokemons(result);
    }
    populatePagination();
  }

  return (
    <AppContext.Provider
      value={{ pokemons, favoriteList: [], featured, pagination }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Hook;
