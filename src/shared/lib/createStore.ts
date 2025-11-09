import { createStore as createZustandStore, useStore, type StoreApi as BaseStoreApi } from 'zustand'

export function createStore<T extends object>(
    initializer: (set: BaseStoreApi<T>['setState'], get: BaseStoreApi<T>['getState'], store: BaseStoreApi<T>) => T
) {
    const store = createZustandStore<T>(initializer)

    function use<U>(selector?: (state: T) => U): U {
        return useStore(store, selector ?? ((s) => s as unknown as U))
    }

    return Object.assign(store, { use })
}

export interface StoreApi<T extends object> extends BaseStoreApi<T> {
    use: <U = T>(selector?: (state: T) => U) => U
}
