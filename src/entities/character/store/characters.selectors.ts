import { useCharactersStore } from '@/entities/character/store/useCharacters.store.ts'

export const useCharacters = () => {
    return useCharactersStore((state) => state.characters)
}

export const useCharacterFavorites = () => {
    return useCharacters().filter((state) => state.isFavorite)
}

export const useCharactersActions = () => {
    return useCharactersStore((state) => state.actions)
}
