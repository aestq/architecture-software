import {createStrictContext} from "@/shared/lib/helpers/createStrictContext.ts";
import {useStrictContext} from "@/shared/lib/hooks/useStrictContext.ts";
import type {Character} from "@/entities/character/model/character.ts";

export interface CharacterCatalogInjectorDeps {
    query: string
    error: Optional<Error>
    characters: Character[]
    toggleCharacterFavorite: (id: Character['id']) => void
    isLoading: boolean,
    onChangeQuery: (query: string) => void
}

export const characterCatalogInjector = createStrictContext<CharacterCatalogInjectorDeps>()

export const useDI = () => useStrictContext(characterCatalogInjector)