import { favoriteCacheStorage } from './favorite-cache-service';
import { AppPokemon } from './models';

class FavoriteService {
  private favorites: AppPokemon[] = [];

  async init(): Promise<AppPokemon[]> {
    this.favorites = await favoriteCacheStorage.load();
    return this.favorites;
  }

  getAll(): AppPokemon[] {
    return this.favorites;
  }

  async addItem(item: AppPokemon): Promise<void> {
    this.favorites.push(item);
    await favoriteCacheStorage.save(this.favorites);
  }

  async removeItem(item: AppPokemon): Promise<void> {
    this.favorites = this.favorites.filter((pokemon) => pokemon.id !== item.id);
    await favoriteCacheStorage.save(this.favorites);
  }

  hasItem(item: AppPokemon): boolean {
    return !!this.favorites.find((pokemon) => pokemon.id === item.id);
  }

  hasItemId(id: number): boolean {
    return !!this.favorites.find((pokemon) => pokemon.id === id);
  }
}

export const favoriteService = new FavoriteService();
