import {SearchBar} from "@/features/characterCatalog/ui/SearchBar.tsx";
import {CharacterList} from "@/entities/character/ui/CharacterList.tsx";
import {CharacterCard} from "@/entities/character/ui/CharacterCard.tsx";
import {CharacterFavoriteButton} from "@/entities/character/ui/CharacterFavoriteButton.tsx";
import {useDI} from "@/features/characterCatalog/di.ts";

export const CharacterCatalog = () => {
    const { characters, toggleCharacterFavorite, onChangeQuery, query, isLoading, error } = useDI()

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
    )
}