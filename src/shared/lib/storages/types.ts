/**
 * Пара ключ - значение
 * */
export interface StorageRepository {
    get<Data>(key: string): Nullable<Data>
    set<Payload = unknown>(key: string, payload: Payload): void
    remove(key: string): void
}

export interface CacheRepository<Data> {
    get(key: string): Nullable<Awaited<Data>>
    set(key: string, value: Awaited<Data>): void
    has(key: string): boolean
    clear(): void
}
