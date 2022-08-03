import asyncStorage from '@react-native-async-storage/async-storage';
import { AppPokemon } from './models';

class FavoriteCacheStorage {
  async load(): Promise<AppPokemon[]> {
    const result = await asyncStorage.getItem('favorite');
    if (result) {
      return JSON.parse(result) as AppPokemon[];
    }
    return [];
  }
  async save(value: AppPokemon[]): Promise<void> {
    await asyncStorage.setItem('favorite', JSON.stringify(value));
  }
}

export const favoriteCacheStorage = new FavoriteCacheStorage();
