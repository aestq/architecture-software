import { CharacterCatalog } from '@/features/characterCatalog/CharacterCatalog.tsx'
import { characterCatalogInjector, type CharacterCatalogInjectorDeps } from '@/features/characterCatalog/di.ts'
import { useService } from '@/app/locator/Service.provider.tsx'

export function CharactersPageContent() {
    const charactersStore = useService('CHARACTERS_STORE')

    const deps: CharacterCatalogInjectorDeps = {
        charactersStore,
    }

    return (
        <characterCatalogInjector.Provider value={deps}>
            <CharacterCatalog />
        </characterCatalogInjector.Provider>
    )
}
