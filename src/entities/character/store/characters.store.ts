import type { Character } from '../model/character'
import { batch, computed, signal } from '@preact/signals-react'

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
        getFavoriteCharacters(characters: Character[]): Character[]
        toggleFavorite(characters: Character[], id: number): void
        clearFavorites(characters: Character[]): void
    }
}

export class CharactersStore {
    constructor(private readonly charactersService: Deps['charactersService']) {
        this.fetchCharacters('')
    }

    characters = signal<Character[]>([])
    favoriteCharacters = computed(() => this.charactersService.getFavoriteCharacters(this.characters.value))
    isCharactersLoading = signal(false)
    isCharactersError = signal(false)

    clearFavorites = async () => {
        this.charactersService.clearFavorites(this.characters.value)
    }

    toggleFavorite = async (id: Character['id']) => {
        this.charactersService.toggleFavorite(this.characters.value, id)
    }

    fetchCharacters = async (value: string) => {
        this.isCharactersLoading.value = true

        try {
            const characters = await this.charactersService.getCharacters(value)

            batch(() => {
                this.characters.value = characters
                this.isCharactersLoading.value = false
                this.isCharactersError.value = false
            })
        } catch {
            this.isCharactersError.value = true
        } finally {
            this.isCharactersLoading.value = false
        }
    }
}
