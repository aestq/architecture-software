import { signal } from '@preact/signals-react'
import type { FavoriteCharactersRepository } from '../repository/types'
import { CharacterModel } from '@/entities/character/model/character.model.ts'
import type { CharacterApiRepository } from '@/entities/character/repository/characterApiRepository.ts'
import type { Character } from '@/entities/character/model/character.ts'

export class CharactersService {
    constructor(
        private readonly charactersRepo: CharacterApiRepository,
        private readonly favoritesRepo: FavoriteCharactersRepository,
        private readonly characterModel: CharacterModel
    ) {}

    async getCharacters(name: string = '') {
        const [{ data }, ids] = await Promise.all([
            this.charactersRepo.fetchAllByName({
                config: { params: { name } },
            }),
            this.favoritesRepo.getFavoriteCharacterIds(),
        ])

        const characters = CharacterModel.mapDtoToCharacter(data).map((character) => ({
            ...character,
            isFavorite: signal(ids.includes(character.id)),
        }))

        return characters
    }

    public getFavoriteCharacters(characters: Character[]) {
        return this.characterModel.getFavoriteCharacters(characters)
    }

    public async toggleFavorite(characters: Character[], id: number) {
        await this.favoritesRepo.toggleFavorite(id)

        return this.characterModel.toggleCharacterById(characters, id)
    }

    public async clearFavorites(characters: Character[]) {
        await this.favoritesRepo.clearFavorites()

        return this.characterModel.clearCharacters(characters)
    }
}
