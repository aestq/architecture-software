import type { CacheRepository } from '@/shared/lib/storages/types.ts'

export class InMemoryCache<Data> implements CacheRepository<Data> {
    private cache = new Map<string, { data: Data; timestamp: number }>()

    constructor(private readonly ttl: number = 5 * 60 * 1000) {}

    get(key: string) {
        const entry = this.cache.get(key)

        if (!entry) return null

        const isExpired = Date.now() - entry.timestamp > this.ttl

        if (isExpired) {
            this.cache.delete(key)
            return null
        }

        return entry.data
    }

    has(key: string) {
        return this.cache.has(key)
    }

    set(key: string, value: Data) {
        this.cache.set(key, { data: value, timestamp: Date.now() })
    }

    clear() {
        this.cache.clear()
    }
}
