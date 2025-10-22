import type {StorageRepository} from "@/shared/lib/storages/storageRepository.ts";
import {
    type CharacterFavoriteStorage,
    createCharacterFavoritesStorage
} from "@/entities/character/repository/createCharacterFavoritesStorage.ts";
import type {Character} from "@/entities/character/model/character.ts";

const STORAGE_KEY = "character_favorites_v1";

export class CharacterFavoritesService {
    private readonly storage: CharacterFavoriteStorage

    constructor(
        private readonly storageRepository: StorageRepository
    ) {
        this.storage = createCharacterFavoritesStorage(this.storageRepository, STORAGE_KEY)
    }

    getFavoriteIds() {
        return this.storage.get()
    }

    toggleFavorite(id: Character['id']) {
        const ids = this.getFavoriteIds()

        if(ids.includes(id)) {
            this.storage.remove(id)
        } else {
            this.storage.add(id)
        }
    }

    clear() {
        this.storage.clear()
    }
}