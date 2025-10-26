import { useEffect, useState, type ReactNode } from 'react'
import { createCharactersStore } from '@/entities/character/store/createCharacters.store.ts'
import type { Character } from '@/entities/character/model/character.ts'
import { charactersStoreCtx } from '@/entities/character/store/useCharacters.store.ts'

type CharactersStoreDeps = {
    charactersService: {
        getCharacters(name?: string): Promise<Character[]>
        getFavoriteCharacters(): Character[]
        toggleFavorite(id: number): Promise<Character[]>
        clearFavorites(): Promise<Character[]>
    }
}

export const createCharactersProvider = ({ charactersService }: CharactersStoreDeps) => {
    const CharactersProvider = ({ children }: { children: ReactNode }) => {
        const [store] = useState(() => createCharactersStore({ charactersService }))

        useEffect(() => {
            store.getState().actions.fetchCharacters()
        }, [])

        return <charactersStoreCtx.Provider value={store}>{children}</charactersStoreCtx.Provider>
    }

    return CharactersProvider
}
