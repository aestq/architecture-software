import { apiInstance } from '@/shared/api/instance.ts'
import type { ApiResponse, RequestConfig } from '@/shared/api/types.ts'
import type { CharacterRepository } from '@/entities/character/repository/types.ts'
import type { CacheRepository } from '@/shared/lib/storages/types.ts'
import type { CharactersDTO } from '@/shared/dto/characters.ts'

export class CharacterApiRepository implements CharacterRepository {
    private readonly ENDPOINT = '/character'

    constructor(private readonly cache: CacheRepository<Awaited<ApiResponse<CharactersDTO>>>) {}

    async fetchAllByName(config?: RequestConfig) {
        const params = config?.config?.params ?? {}
        const cacheKey = JSON.stringify(params)

        if (this.cache.has(cacheKey)) {
            const data = this.cache.get(cacheKey)

            if (data) {
                return data
            }
        }

        const response = await apiInstance.get<CharactersDTO>(this.ENDPOINT, config?.config)

        this.cache.set(cacheKey, response)

        return response
    }
}
