import React, { createContext, useEffect, useState } from 'react';
import { favoriteService } from '../services/favorite-service';
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

interface Favorites {
  getAll: AppPokemon[];
  handleButtonFavorite(item: AppPokemon): Promise<void>;
  hasItem(item: AppPokemon): boolean;
}

interface ApplicationContext {
  pagination: Pagination;
  pokemons: AppPokemon[];
  favorites: Favorites;
  featured?: AppPokemon;
  isLoading: boolean;
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
  const [favorites, setFavorites] = useState<Favorites>({
    getAll: [],
    handleButtonFavorite,
    hasItem,
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    init();
  }, []);

  async function init() {
    await populateFavorites();
    const result = await pokemonService.getFeaturedAndInitialList();
    setFeatured(result.featured);
    setPokemons(result.pokemons);
    populatePagination();
    setLoading(false);
  }

  async function populateFavorites() {
    const result = await favoriteService.init();
    setFavorites({ ...favorites, getAll: result });
  }

  async function handleButtonFavorite(item: AppPokemon) {
    if (hasItem(item)) {
      await favoriteService.removeItem(item);
    } else {
      await favoriteService.addItem(item);
    }
    getAllItems();
  }

  function hasItem(item: AppPokemon) {
    return favoriteService.hasItem(item);
  }

  function getAllItems() {
    const result = favoriteService.getAll();
    setFavorites({ ...favorites, getAll: result });
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
      value={{ pokemons, favorites, featured, pagination, isLoading }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Hook;
