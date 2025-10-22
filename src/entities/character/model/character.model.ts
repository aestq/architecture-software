import type {CharacterDTO} from "@/shared/dto/characters.ts";
import type {Character} from "@/entities/character/model/character.ts";
import type {Optional} from "@/shared/lib/types/global";

export class CharacterModel {
    syncWithFavorites(characters: Optional<Character[]>, favoriteIds: number[]) {
        if(!characters) {
            return []
        }

        return characters.map(character => ({
            ...character,
            isFavorite: favoriteIds.includes(character.id),
        }))
    }

    getFavorites(characters: Optional<Character[]>) {
        if(!characters) {
            return []
        }

        return characters.filter(character => character.isFavorite)
    }

    clearFavorites(characters: Optional<Character[]>) {
        if(!characters) {
            return []
        }

        return characters.map(character => ({ ...character, isFavorite: false }))
    }

    toggleFavorite(characters: Optional<Character[]>, id: Character['id']) {
        if(!characters) {
            return []
        }

        return characters.map((character) => {
            if(character.id !== id) {
                return character
            }

            return {
                ...character,
                isFavorite: !character.isFavorite,
            }
        })
    }


    static dtoToCharacters(dto: CharacterDTO[]): Character[] {
        return dto.map((character) => ({
            isFavorite: false,
            id: character.id,
            image: character.image,
            name: character.name,
            species: character.species,
            status: character.status,
        }))
    }
}