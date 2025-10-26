import { SearchBar } from '@/features/characterCatalog/ui/SearchBar.tsx'
import { CharacterList } from '@/entities/character/ui/CharacterList.tsx'
import { CharacterCard } from '@/entities/character/ui/CharacterCard.tsx'
import { CharacterFavoriteButton } from '@/entities/character/ui/CharacterFavoriteButton.tsx'
import { useDI } from '@/features/characterCatalog/di.ts'
import { useCatalogForm } from '@/features/characterCatalog/model/useCatalogForm.ts'
import type { Character } from '@/entities/character/model/character.ts'

export const CharacterCatalog = () => {
    const { characters, isCharactersError, fetchCharacters, isCharactersLoading, toggleFavorite } = useDI()

    const { setSearchQuery, searchQuery } = useCatalogForm(fetchCharacters)

    const renderCard = (character: Character) => {
        const favoriteButton = (
            <CharacterFavoriteButton onToggleFavorite={() => toggleFavorite(character.id)} favorite={character.isFavorite} />
        )

        return <CharacterCard character={character} key={character.id} favoriteButton={favoriteButton} />
    }

    return (
        <div className='p-4'>
            <div className='mb-4'>
                <SearchBar value={searchQuery} onChange={setSearchQuery} loading={isCharactersLoading} />
            </div>

            {isCharactersError && <div className='text-red-600'>Error</div>}

            <CharacterList items={characters} renderItem={renderCard} />
        </div>
    )
}
