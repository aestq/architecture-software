import { CharacterCatalog } from '@/features/characterCatalog/CharacterCatalog.tsx'
import { characterCatalogInjector, type CharacterCatalogInjectorDeps } from '@/features/characterCatalog/di.ts'
import { getFeatureLocator } from '@/pages/CharactersPage/useFeatureLocator.ts'

const charactersStore = getFeatureLocator('CHARACTERS_STORE')

export function CharactersPage() {
    const deps: CharacterCatalogInjectorDeps = {
        charactersStore,
    }

    return (
        <characterCatalogInjector.Provider value={deps}>
            <CharacterCatalog />
        </characterCatalogInjector.Provider>
    )
}
