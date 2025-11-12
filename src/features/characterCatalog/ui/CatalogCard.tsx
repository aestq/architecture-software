import { useDI } from '@/features/characterCatalog/di.ts'
import { CharacterCard } from '@/entities/character/ui/CharacterCard.tsx'
import { CharacterFavoriteButton } from '@/entities/character/ui/CharacterFavoriteButton.tsx'
import type { Character } from '@/entities/character/model/character.ts'

interface CatalogCardProps {
    character: Character
}

export const CatalogCard = (props: CatalogCardProps) => {
    const { character } = props
    const { charactersStore } = useDI()

    return (
        <CharacterCard
            character={character}
            favoriteButton={
                <CharacterFavoriteButton
                    favorite={character.isFavorite.value}
                    onToggleFavorite={() => charactersStore.toggleFavorite(character.id)}
                />
            }
        />
    )
}
