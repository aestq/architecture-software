import { CharacterList } from '@/entities/character/ui/CharacterList.tsx'
import { CharacterCard } from '@/entities/character/ui/CharacterCard.tsx'
import { CharacterFavoriteButton } from '@/entities/character/ui/CharacterFavoriteButton.tsx'
import { selectActions, selectFavorites } from '@/entities/character/store/characters.selectors.ts'
import { getFeatureLocator } from '@/pages/FavoritesPage/useFeatureLocator.ts'
import { useShallow } from 'zustand/react/shallow'

const charactersStore = getFeatureLocator('CHARACTERS_STORE')

export function FavoritesPage() {
    const favorites = charactersStore.use(useShallow(selectFavorites))
    const { clearFavorites, toggleFavorite } = charactersStore.use(selectActions)

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
            <CharacterList isEmpty={!favorites.length}>
                {favorites.map((character) => (
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
                ))}
            </CharacterList>
        </div>
    )
}
