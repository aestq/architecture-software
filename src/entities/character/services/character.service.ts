import type {CharacterRepository} from "@/entities/character/repository/characterRepository.ts";
import {CharacterModel} from "@/entities/character/model/character.model.ts";

export class CharacterService {
    constructor(
        private readonly repository: CharacterRepository
    ) {}

    async getCharacters(name: string = '') {
        const response = await this.repository.fetchAllByName({
            config: {
                params: {
                    name
                }
            }
        })

        return CharacterModel.dtoToCharacters(response.data.results)
    }
}