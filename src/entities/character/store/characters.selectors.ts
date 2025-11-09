import type { CharactersStoreState } from '@/entities/character/store/createCharacters.store.ts'
import type { Character } from '@/entities/character/model/character.ts'

export const selectAll = (state: CharactersStoreState) => {
    return state.characters
}

export const selectActions = (state: CharactersStoreState) => {
    return state.actions
}

export const selectFavorites = (state: CharactersStoreState) => {
    return state.characters.filter((state) => state.isFavorite)
}

export const selectIsError = (state: CharactersStoreState) => {
    return state.isCharactersError
}

export const selectIsLoading = (state: CharactersStoreState) => {
    return state.isCharactersLoading
}

export const selectById = (id: Character['id']) => {
    return (state: CharactersStoreState) => {
        return state.characters.find((character) => character.id === id)!
    }
}
