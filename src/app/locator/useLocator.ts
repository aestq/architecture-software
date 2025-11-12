import { CharactersService } from '@/entities/character/services/character.service.ts'
import { InMemoryCache } from '@/shared/lib/storages/InMemoryCache.ts'
import { FavoritesCharactersStorage } from '@/entities/character/services/characterFavorites.service.ts'
import { LocalStorageRepository } from '@/shared/lib/storages/localStorageRepository.ts'
import { CharactersStore } from '@/entities/character/store/characters.store.ts'
import { CharacterModel } from '@/entities/character/model/character.model.ts'
import { CharacterApiRepository } from '@/entities/character/repository/characterApiRepository.ts'
import { Container } from '@/app/locator/container.ts'

const charactersService = new CharactersService(
    new CharacterApiRepository(new InMemoryCache()),
    new FavoritesCharactersStorage(new LocalStorageRepository()),
    new CharacterModel()
)

export const container = new Container({
    CHARACTERS_STORE: new CharactersStore(charactersService),
} as const)

export type ServiceKey = ReturnType<typeof container.getKeys>[number]

export function getLocator<T extends ServiceKey>(token: T): ReturnType<typeof container.get<T>> {
    return container.get(token)
}

export function createFeatureLocator<AllowedTokens extends ServiceKey>() {
    return function <T extends AllowedTokens>(token: T) {
        return getLocator(token)
    }
}
