import type { CharacterRepository, FavoriteCharactersRepository } from '../repository/types'
import { CharacterModel } from '@/entities/character/model/character.model.ts'

export class CharactersService {
    constructor(
        private readonly charactersRepo: CharacterRepository,
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
            isFavorite: ids.includes(character.id),
        }))

        this.characterModel.setCharacters(characters)

        return characters
    }

    public getFavoriteCharacters() {
        return this.characterModel.getFavoriteCharacters()
    }

    public async toggleFavorite(id: number) {
        await this.favoritesRepo.toggleFavorite(id)

        return this.characterModel.toggleCharacter(id)
    }

    public async clearFavorites() {
        await this.favoritesRepo.clearFavorites()

        return this.characterModel.clearCharacters()
    }
}
