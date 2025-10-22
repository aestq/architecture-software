import {SearchBar} from "@/pages/CharactersPage/ui/SearchBar.tsx";
import {CharacterList} from "@/entities/character/ui/CharacterList.tsx";
import {CharacterCard} from "@/entities/character/ui/CharacterCard.tsx";
import {CharacterFavoriteButton} from "@/entities/character/ui/CharacterFavoriteButton.tsx";
import {useCharacterContext} from "@/entities/character/store/createCharacterProvider.tsx";

export function CharactersPage() {
  const {
      query,
      error,
      characters,
      toggleCharacterFavorite,
      isLoading,
      onChangeQuery
  } = useCharacterContext()

  return (
    <div className="p-4">
      <div className="mb-4">
        <SearchBar value={query} onChange={onChangeQuery} loading={isLoading} />
      </div>

      {error && <div className="text-red-600">Error: {error.message}</div>}

      <CharacterList
        items={characters}
        renderItem={(character) => (
            <CharacterCard
                character={character}
                key={character.id}
                favoriteButton={
                    <CharacterFavoriteButton
                        onToggleFavorite={() => toggleCharacterFavorite(character.id)}
                        favorite={character.isFavorite}
                    />
                }
            />
        )}
      />
    </div>
  );
}
