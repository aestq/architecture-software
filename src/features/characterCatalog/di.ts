import { createStrictContext } from '@/shared/lib/helpers/createStrictContext.ts'
import { useStrictContext } from '@/shared/lib/hooks/useStrictContext.ts'
import type { CharactersStore } from '@/entities/character/store/characters.store.ts'

export interface CharacterCatalogInjectorDeps {
    charactersStore: CharactersStore
}

export const characterCatalogInjector = createStrictContext<CharacterCatalogInjectorDeps>()

export const useDI = () => useStrictContext(characterCatalogInjector)
