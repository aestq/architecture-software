import { CharacterList } from '@/entities/character/ui/CharacterList.tsx'
import { useDI } from '@/features/characterCatalog/di.ts'
import { CatalogCard } from '@/features/characterCatalog/ui/CatalogCard.tsx'
import { For } from '@preact/signals-react/utils'

export const CatalogList = () => {
    const { charactersStore } = useDI()

    return (
        <CharacterList>
            <For each={charactersStore.characters}>{(character) => <CatalogCard key={character.id} character={character} />}</For>
        </CharacterList>
    )
}
