import type { Character } from '../model/character'
import { createStore } from '@/shared/lib/createStore.ts'

export type CharactersStoreState = {
    characters: Character[]
    isCharactersLoading: boolean
    isCharactersError: boolean

    actions: {
        clearFavorites: () => void
        toggleFavorite: (id: number) => void
        fetchCharacters: (value?: string) => Promise<void>
    }
}

type Deps = {
    charactersService: {
        getCharacters(name?: string): Promise<Character[]>
        getFavoriteCharacters(): Character[]
        toggleFavorite(id: number): Promise<Character[]>
        clearFavorites(): Promise<Character[]>
    }
}

export const createCharactersStore = ({ charactersService }: Deps) => {
    const store = createStore<CharactersStoreState>((set) => ({
        characters: [],
        isCharactersLoading: false,
        isCharactersError: false,

        actions: {
            clearFavorites: async () => {
                const characters = await charactersService.clearFavorites()
                set({ characters })
            },
            toggleFavorite: async (id) => {
                const characters = await charactersService.toggleFavorite(id)
                set({ characters })
            },
            fetchCharacters: async (value) => {
                set({ isCharactersLoading: true })
                try {
                    const characters = await charactersService.getCharacters(value)
                    set({
                        characters,
                        isCharactersLoading: false,
                        isCharactersError: false,
                    })
                } catch {
                    set({ isCharactersError: true })
                } finally {
                    set({ isCharactersLoading: false })
                }
            },
        },
    }))

    store.getState().actions.fetchCharacters()

    return store
}
