import { useCharacters } from "@/entities/character/model/useCharacters.ts";
import { useFavorites } from "@/entities/character/model/useFavorites.ts";
import { SearchBar } from "@/pages/CharactersPage/ui/SearchBar.tsx";
import { CharacterList } from "@/entities/character/ui/CharacterList.tsx";
import {CharacterApiRepository} from "@/entities/character/repository/characterApiRepository.ts";
import {LocalStorageRepository} from "@/shared/lib/storages/localStorageRepository.ts";
import {useMemo} from "react";
import {CharacterCard} from "@/entities/character/ui/CharacterCard.tsx";
import {CharacterFavoriteButton} from "@/entities/character/ui/CharacterFavoriteButton.tsx";

export function CharactersPage() {
  const { query, setQuery, characterAsync } = useCharacters({
      repository: useMemo(() => new CharacterApiRepository(), [])
  })
  const { isFavorite, toggleFavorite } = useFavorites({
      storage: useMemo(() => new LocalStorageRepository(), [])
  });

  const items = characterAsync.data?.data?.results ?? []

  return (
    <div className="p-4">
      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} loading={characterAsync.isLoading} />
      </div>

      {characterAsync.error && <div className="text-red-600">Error: {characterAsync.error.message}</div>}

      <CharacterList
        items={items}
        renderItem={(character) => (
            <CharacterCard
                character={character}
                key={character.id}
                favoriteButton={
                    <CharacterFavoriteButton
                        onToggleFavorite={() => toggleFavorite(character)}
                        favorite={isFavorite(character.id)}
                    />
                }
            />
        )}
      />
    </div>
  );
}
