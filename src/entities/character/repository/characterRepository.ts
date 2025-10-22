import type {ApiResponse, RequestConfig} from "@/shared/api/types.ts";
import type {CharactersDTO} from "@/shared/dto/characters.ts";

export interface CharacterRepository {
    fetchAllByName(config?: RequestConfig): ApiResponse<CharactersDTO>
}