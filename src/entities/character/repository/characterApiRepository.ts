import type {CharacterRepository} from "@/entities/character/repository/characterRepository.ts";
import type {CharacterAPIResponse} from "@/entities/character/model/character.ts";
import {apiInstance} from "@/shared/api/instance.ts";
import type {ApiResponse, RequestConfig} from "@/shared/api/types.ts";

export class CharacterApiRepository implements CharacterRepository {
    private readonly ENDPOINT = "/character";

     fetchAllByName(config?: RequestConfig): ApiResponse<CharacterAPIResponse> {
        return apiInstance.get<CharacterAPIResponse>(this.ENDPOINT, config?.config);
    }
}

export const characterApiRepository = new CharacterApiRepository()

