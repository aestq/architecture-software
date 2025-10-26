import type {StorageRepository} from "@/shared/lib/storages/types.ts";

export class LocalStorageRepository implements StorageRepository {
    get<Data>(key: string): Nullable<Data> {
        try {
            const value = localStorage.getItem(key)

            if(!value) {
                return null
            }

            return JSON.parse(value)
        } catch {
            return null
        }
    }

    set<Payload = unknown>(key: string, payload: Payload) {
        const value = JSON.stringify(payload)
        localStorage.setItem(key, value)
    }

    remove(key: string) {
        localStorage.removeItem(key)
    }
}