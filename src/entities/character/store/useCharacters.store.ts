import type { CharactersStoreState } from './createCharacters.store.ts'
import { createStrictContext } from '@/shared/lib/helpers/createStrictContext'
import type { StoreApi } from 'zustand'
import { useContext } from 'react'
import { useStore } from 'zustand'

export type CharactersContextValue = StoreApi<CharactersStoreState>

export const charactersStoreCtx = createStrictContext<CharactersContextValue>()

export const useCharactersStore = <Selected>(selector: (value: CharactersStoreState) => Selected) => {
    const store = useContext(charactersStoreCtx)

    if (!store) {
        throw new Error('Нет доступа до characters store')
    }

    return useStore(store, selector)
}
