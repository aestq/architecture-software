import { CharacterList } from '@/entities/character/ui/CharacterList.tsx'
import { CharacterCard } from '@/entities/character/ui/CharacterCard.tsx'
import { CharacterFavoriteButton } from '@/entities/character/ui/CharacterFavoriteButton.tsx'
import { useService } from '@/app/locator/Service.provider.tsx'
import { For } from '@preact/signals-react/utils'

export function FavoritesPageContent() {
    const charactersStore = useService('CHARACTERS_STORE')

    return (
        <div className='p-4'>
            <div className='flex items-center justify-between mb-2'>
                <h2 className='text-xl font-semibold'>Favorites</h2>
                {charactersStore.favoriteCharacters.value.length > 0 && (
                    <button
                        className='text-sm underline text-muted-foreground'
                        onClick={charactersStore.clearFavorites}
                        title='Clear all favorites'
                    >
                        Clear all
                    </button>
                )}
            </div>
            <CharacterList>
                <For each={charactersStore.favoriteCharacters}>
                    {(character) => (
                        <CharacterCard
                            character={character}
                            key={character.id}
                            favoriteButton={
                                <CharacterFavoriteButton
                                    onToggleFavorite={() => charactersStore.toggleFavorite(character.id)}
                                    favorite={character.isFavorite.value}
                                />
                            }
                        />
                    )}
                </For>
            </CharacterList>
        </div>
    )
}
