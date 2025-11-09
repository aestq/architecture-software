/**
 * Пара ключ - значение
 * */
export interface StorageRepository {
    get<Data>(key: string): Nullable<Data>
    set<Payload = unknown>(key: string, payload: Payload): void
    remove(key: string): void
}

export interface CacheRepository<Data> {
    get(key: string): Nullable<Data>
    set(key: string, value: Data): void
    has(key: string): boolean
    clear(): void
}
