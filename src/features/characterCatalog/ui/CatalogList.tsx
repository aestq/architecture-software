import { CharacterList } from '@/entities/character/ui/CharacterList.tsx'
import { useDI } from '@/features/characterCatalog/di.ts'
import { CatalogCard } from '@/features/characterCatalog/ui/CatalogCard.tsx'
import { selectAll } from '@/entities/character/store/characters.selectors.ts'

export const CatalogList = () => {
    const { charactersStore } = useDI()
    const characters = charactersStore.use(selectAll)

    return (
        <CharacterList isEmpty={!characters.length}>
            {characters.map((character) => (
                <CatalogCard key={character.id} characterId={character.id} />
            ))}
        </CharacterList>
    )
}
