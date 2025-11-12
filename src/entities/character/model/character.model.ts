import { signal } from '@preact/signals-react'
import type { CharactersDTO } from '@/shared/dto/characters.ts'
import type { Character } from '@/entities/character/model/character.ts'

export class CharacterModel {
    constructor() {}

    public clearCharacters(characters: Character[]) {
        for (const char of characters) {
            char.isFavorite.value = false
        }
    }

    public getFavoriteCharacters(characters: Character[]) {
        return characters.filter((c) => c.isFavorite.value)
    }

    public toggleCharacterById(characters: Character[], id: number) {
        const target = characters.find((c) => c.id === id)

        if (!target) return

        target.isFavorite.value = !target.isFavorite.value
    }

    public static mapDtoToCharacter = (charactersDto: CharactersDTO): Character[] => {
        return charactersDto.results.map((result) => ({
            id: result.id,
            name: result.name,
            image: result.image,
            status: result.status,
            species: result.species,
            isFavorite: signal(false),
        }))
    }
}
