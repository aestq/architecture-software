import { createStrictContext } from '@/shared/lib/helpers/createStrictContext.ts'
import { useStrictContext } from '@/shared/lib/hooks/useStrictContext.ts'
import type { Character } from '@/entities/character/model/character.ts'

export interface CharacterCatalogInjectorDeps {
    characters: Character[]
    isCharactersError: boolean
    isCharactersLoading: boolean
    fetchCharacters: (name: string) => Promise<void>
    toggleFavorite: (id: Character['id']) => void
}

export const characterCatalogInjector = createStrictContext<CharacterCatalogInjectorDeps>()

export const useDI = () => useStrictContext(characterCatalogInjector)
