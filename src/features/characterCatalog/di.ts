import { createStrictContext } from '@/shared/lib/helpers/createStrictContext.ts'
import { useStrictContext } from '@/shared/lib/hooks/useStrictContext.ts'
import type { StoreApi } from '@/shared/lib/createStore.ts'
import type { CharactersStoreState } from '@/entities/character/store/createCharacters.store.ts'

export interface CharacterCatalogInjectorDeps {
    charactersStore: StoreApi<CharactersStoreState>
}

export const characterCatalogInjector = createStrictContext<CharacterCatalogInjectorDeps>()

export const useDI = () => useStrictContext(characterCatalogInjector)
