import type {CharacterRepository} from "@/entities/character/repository/characterRepository.ts";
import {apiInstance} from "@/shared/api/instance.ts";
import type {RequestConfig} from "@/shared/api/types.ts";

export class CharacterApiRepository implements CharacterRepository {
    private readonly ENDPOINT = "/character";

     fetchAllByName(config?: RequestConfig) {
        return apiInstance.get(this.ENDPOINT, config?.config);
    }
}

