import type { ApiResponse, RequestConfig } from '@/shared/api/types.ts'
import type { CharactersDTO } from '@/shared/dto/characters.ts'

export interface FavoriteCharactersRepository {
    getFavoriteCharacterIds: () => number[]
    toggleFavorite: (id: number) => void
    clearFavorites: () => void
}

export interface CharacterRepository {
    fetchAllByName(config?: RequestConfig): ApiResponse<CharactersDTO>
}
