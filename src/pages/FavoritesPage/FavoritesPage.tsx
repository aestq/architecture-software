import { CharacterList } from '@/entities/character/ui/CharacterList.tsx'
import { CharacterCard } from '@/entities/character/ui/CharacterCard.tsx'
import { CharacterFavoriteButton } from '@/entities/character/ui/CharacterFavoriteButton.tsx'
import { useCharacterFavorites, useCharactersActions } from '@/entities/character/store/characters.selectors.ts'

export function FavoritesPage() {
    const favorites = useCharacterFavorites()
    const { clearFavorites, toggleFavorite } = useCharactersActions()

    return (
        <div className='p-4'>
            <div className='flex items-center justify-between mb-2'>
                <h2 className='text-xl font-semibold'>Favorites</h2>
                {favorites.length > 0 && (
                    <button className='text-sm underline text-muted-foreground' onClick={clearFavorites} title='Clear all favorites'>
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
                                onToggleFavorite={() => toggleFavorite(character.id)}
                                favorite={character.isFavorite}
                            />
                        }
                    />
                )}
            />
        </div>
    )
}
