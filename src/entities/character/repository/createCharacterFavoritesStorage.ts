import type {StorageRepository} from "@/shared/lib/storages/storageRepository.ts";
import type {Character} from "@/entities/character/model/character.ts";

export type CharacterFavoriteStorage = ReturnType<typeof createCharacterFavoritesStorage>

export const createCharacterFavoritesStorage = (
    storage: StorageRepository,
    key: string
) => {
    let favorites: Character['id'][] = storage.get(key) ?? []

    const save = (next: Character['id'][]) => {
        favorites = next
        storage.set(key, favorites)
    };

    return {
        get: () => favorites,
        add: (id: Character['id']) => {
            if (favorites.includes(id)) {
                return favorites
            }

            const updated = [...favorites, id]
            save(updated)
            return updated
        },
        remove: (id: Character['id']) => {
            const updated = favorites.filter((favoriteId) => favoriteId !== id)
            save(updated)
            return updated
        },
        clear: () => {
            favorites = []
            storage.remove(key)
        },
    };
}