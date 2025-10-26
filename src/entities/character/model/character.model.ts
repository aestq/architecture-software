import type { CharactersDTO } from '@/shared/dto/characters.ts'
import type { Character } from '@/entities/character/model/character.ts'

export class CharacterModel {
    constructor() {}

    characters: Character[] = []

    public setCharacters(characters: Character[]) {
        this.characters = characters
    }

    public toggleCharacter(id: Character['id']) {
        this.characters = this.characters.map((character) =>
            character.id === id ? { ...character, isFavorite: !character.isFavorite } : character
        )

        return this.characters
    }

    public clearCharacters() {
        this.characters = this.characters.map((character) => ({
            ...character,
            isFavorite: false,
        }))

        return this.characters
    }

    public getFavoriteCharacters() {
        return this.characters.filter((character) => character.isFavorite)
    }

    public static mapDtoToCharacter = (charactersDto: CharactersDTO): Character[] => {
        return charactersDto.results.map((result) => ({
            id: result.id,
            name: result.name,
            image: result.image,
            status: result.status,
            species: result.species,
            isFavorite: false,
        }))
    }
}
