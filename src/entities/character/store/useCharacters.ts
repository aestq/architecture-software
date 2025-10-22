import {useState} from "react";
import {useAsync} from "@/shared/lib/hooks/useAsync.ts";
import {useDebounceValue} from "@/shared/lib/hooks/useDebounceValue.ts";
import type {CharacterService} from "@/entities/character/services/character.service.ts";
import type {CharacterModel} from "@/entities/character/model/character.model.ts";
import type {CharacterFavoritesService} from "@/entities/character/services/characterFavorites.service.ts";
import type {Character} from "@/entities/character/model/character.ts";

interface UseCharactersProps {
    characterService: CharacterService
    characterModel: CharacterModel
    characterFavoritesService: CharacterFavoritesService
}

export function useCharacters(props: UseCharactersProps) {
    const {characterService, characterModel, characterFavoritesService} = props
    const [query, setQuery] = useState('')

    const queryDebounced = useDebounceValue(query, 300)

    const {
        data,
        isLoading,
        error,
        setData
    } = useAsync(() => characterService.getCharacters(queryDebounced), [queryDebounced])

    const characters = characterModel.syncWithFavorites(
        data,
        characterFavoritesService.getFavoriteIds()
    )

    const favorites = characterModel.getFavorites(characters)

    const clearCharacterFavorite = () => {
        characterFavoritesService.clear()
        setData(characterModel.clearFavorites(data))
    }

    const toggleCharacterFavorite = (id: Character['id']) => {
        characterFavoritesService.toggleFavorite(id)
        setData(characterModel.toggleFavorite(data, id))
    }

    const onChangeQuery = (query: string) => {
        setQuery(query)
    }

    return {
        query,
        onChangeQuery,
        characters,
        isLoading,
        error,
        clearCharacterFavorite,
        toggleCharacterFavorite,
        favorites
    }
}
