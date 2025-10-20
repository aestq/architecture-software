import type {CharacterAPIResponse} from "@/entities/character/model/character.ts";
import type {ApiResponse, RequestConfig} from "@/shared/api/types.ts";

export interface CharacterRepository {
    fetchAllByName(config?: RequestConfig): ApiResponse<CharacterAPIResponse>
}