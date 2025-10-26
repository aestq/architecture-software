import type { Character } from '@/entities/character/model/character.ts'
import type { FavoriteCharactersRepository } from '@/entities/character/repository/types.ts'
import type { StorageRepository } from '@/shared/lib/storages/types.ts'

const FAVORITES_KEY = 'favorite-characters'

export class FavoritesCharactersStorage implements FavoriteCharactersRepository {
    favorites: Character['id'][] = []

    constructor(private readonly storage: StorageRepository) {
        this.setInitialValue()
    }

    getFavoriteCharacterIds() {
        return this.storage.get<Character['id'][]>(FAVORITES_KEY) ?? []
    }

    toggleFavorite(id: number) {
        const favorites = this.favorites

        if (this.isFavorite(id)) {
            this.save(favorites.filter((element) => element !== id))
        } else {
            this.save([...favorites, id])
        }
    }

    clearFavorites() {
        this.storage.remove(FAVORITES_KEY)
    }

    private save(value: Character['id'][]) {
        this.favorites = value
        this.storage.set(FAVORITES_KEY, value)
    }

    private isFavorite(id: Character['id']) {
        return this.favorites.includes(id)
    }

    private setInitialValue() {
        this.favorites = this.storage.get<Character['id'][]>(FAVORITES_KEY) ?? []
    }
}
