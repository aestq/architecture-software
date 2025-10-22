import {CharacterList} from "@/entities/character/ui/CharacterList.tsx";
import {CharacterCard} from "@/entities/character/ui/CharacterCard.tsx";
import {CharacterFavoriteButton} from "@/entities/character/ui/CharacterFavoriteButton.tsx";
import {useCharacterContext} from "@/entities/character/store/createCharacterProvider.tsx";

export function FavoritesPage() {
  const {
      favorites,
      clearCharacterFavorite,
      toggleCharacterFavorite,
  } = useCharacterContext()

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl font-semibold">Favorites</h2>
        {favorites.length > 0 && (
          <button
            className="text-sm underline text-muted-foreground"
            onClick={clearCharacterFavorite}
            title="Clear all favorites"
          >
            Clear all
          </button>
        )}
      </div>
        <CharacterList
            items={favorites}
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
