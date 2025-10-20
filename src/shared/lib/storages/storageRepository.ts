/**
 * Пара ключ - значение
 * */
export interface StorageRepository {
    get<Data>(key: string): Nullable<Data>
    set<Payload = unknown>(key: string, payload: Payload): void
    remove(key: string): void
}