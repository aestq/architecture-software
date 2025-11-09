import { useDI } from '@/features/characterCatalog/di.ts'
import { CharacterCard } from '@/entities/character/ui/CharacterCard.tsx'
import { CharacterFavoriteButton } from '@/entities/character/ui/CharacterFavoriteButton.tsx'
import { selectActions, selectById } from '@/entities/character/store/characters.selectors.ts'

interface CatalogCardProps {
    characterId: number
}

export const CatalogCard = (props: CatalogCardProps) => {
    const { characterId } = props
    const { charactersStore } = useDI()
    const character = charactersStore.use(selectById(characterId))
    const { toggleFavorite } = charactersStore.use(selectActions)

    return (
        <CharacterCard
            character={character}
            favoriteButton={
                <CharacterFavoriteButton favorite={character.isFavorite} onToggleFavorite={() => toggleFavorite(characterId)} />
            }
        />
    )
}
