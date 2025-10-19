import { useCharacters } from "@/hooks/useCharacters";
import { useFavorites } from "@/hooks/useFavorites";
import { SearchBar } from "@/components/SearchBar";
import { CharacterList } from "@/components/CharacterList";

export function CharactersPage() {
  const { query, setQuery, loading, items, error } = useCharacters();
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <div className="p-4">
      <div className="mb-4">
        <SearchBar value={query} onChange={setQuery} loading={loading} />
      </div>

      {error && <div className="text-red-600">Error: {error}</div>}

      <CharacterList
        items={items}
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
