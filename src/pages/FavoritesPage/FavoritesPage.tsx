import { useFavorites } from "@/entities/character/model/useFavorites.ts";
import { CharacterList } from "@/entities/character/ui/CharacterList.tsx";
import {useMemo} from "react";
import {LocalStorageRepository} from "@/shared/lib/storages/localStorageRepository.ts";
import {CharacterCard} from "@/entities/character/ui/CharacterCard.tsx";
import {CharacterFavoriteButton} from "@/entities/character/ui/CharacterFavoriteButton.tsx";

export function FavoritesPage() {
  const { list, isFavorite, toggleFavorite, clearFavorites } = useFavorites({
      storage: useMemo(() => new LocalStorageRepository(), [])
  });

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Favorites</h2>
        {list.length > 0 && (
          <button
            className="text-sm underline text-muted-foreground"
            onClick={clearFavorites}
            title="Clear all favorites"
          >
            Clear all
          </button>
        )}
      </div>
        <CharacterList
            items={list}
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
