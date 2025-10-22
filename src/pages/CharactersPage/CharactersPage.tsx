import {useCharacterContext} from "@/entities/character/store/createCharacterProvider.tsx";
import {CharacterCatalog} from "@/features/characterCatalog/CharacterCatalog.tsx";
import {type CharacterCatalogInjectorDeps, characterCatalogInjector} from "@/features/characterCatalog/di.ts";

export function CharactersPage() {
  const {
      query,
      error,
      characters,
      toggleCharacterFavorite,
      isLoading,
      onChangeQuery
  } = useCharacterContext()

    const deps: CharacterCatalogInjectorDeps = {
        onChangeQuery,
        isLoading,
        query,
        error,
        characters,
        toggleCharacterFavorite,
    }

  return (
      <characterCatalogInjector.Provider value={deps}>
          <CharacterCatalog />
      </characterCatalogInjector.Provider>
  )
}
