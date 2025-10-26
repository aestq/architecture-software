import { CharacterCatalog } from '@/features/characterCatalog/CharacterCatalog.tsx'
import { characterCatalogInjector, type CharacterCatalogInjectorDeps } from '@/features/characterCatalog/di.ts'
import { useCharactersStore } from '@/entities/character/store/useCharacters.store.ts'

export function CharactersPage() {
    const {
        characters,
        isCharactersError,
        isCharactersLoading,
        actions: { fetchCharacters, toggleFavorite },
    } = useCharactersStore((state) => state)

    const deps: CharacterCatalogInjectorDeps = {
        characters,
        isCharactersError,
        isCharactersLoading,
        fetchCharacters,
        toggleFavorite,
    }

    return (
        <characterCatalogInjector.Provider value={deps}>
            <CharacterCatalog />
        </characterCatalogInjector.Provider>
    )
}
