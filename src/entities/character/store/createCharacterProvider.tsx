import type {CharacterService} from "@/entities/character/services/character.service.ts";
import type {CharacterFavoritesService} from "@/entities/character/services/characterFavorites.service.ts";
import {CharacterModel} from "@/entities/character/model/character.model.ts";
import type {Character} from "@/entities/character/model/character.ts";
import {createStrictContext} from "@/shared/lib/helpers/createStrictContext.ts";
import {useStrictContext} from "@/shared/lib/hooks/useStrictContext.ts";
import type {PropsWithChildren} from "react";
import {useCharacters} from "@/entities/character/store/useCharacters.ts";

interface CreateCharacterProviderDeps {
    characterService: CharacterService
    characterFavoritesService: CharacterFavoritesService
    characterModel: CharacterModel
}

export interface CharacterProviderContext {
    characters: Character[]
    isLoading: boolean
    error: Optional<Error>
    query: string
    onChangeQuery: (query: string) => void
    favorites: Character[]
    clearCharacterFavorite: () => void
    toggleCharacterFavorite: (id: Character["id"]) => void
}

const characterContext = createStrictContext<CharacterProviderContext>()
export const useCharacterContext = () => useStrictContext(characterContext)

export const createCharacterProvider = (deps: CreateCharacterProviderDeps) => {
    const { characterModel, characterFavoritesService, characterService } = deps

    const Provider = (props: PropsWithChildren) => {
        const {children} = props

        const contextValue = useCharacters({
            characterModel,
            characterFavoritesService,
            characterService
        })

        return (
            <characterContext.Provider value={contextValue}>
                {children}
            </characterContext.Provider>
        )
    }

    return Provider
}