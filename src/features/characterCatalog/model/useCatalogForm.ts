import { useDidUpdate } from '@/shared/lib/hooks/useDidUpdate.ts'
import { useDebounceValue } from '@/shared/lib/hooks/useDebounceValue.ts'
import { useState } from 'react'
import { useDI } from '@/features/characterCatalog/di.ts'
import { selectActions } from '@/entities/character/store/characters.selectors.ts'

export const useCatalogForm = () => {
    const { charactersStore } = useDI()
    const actions = charactersStore.use(selectActions)
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedQuery = useDebounceValue(searchQuery.toLowerCase(), 400)

    useDidUpdate(() => {
        actions.fetchCharacters(debouncedQuery)
    }, [debouncedQuery])

    return { searchQuery, setSearchQuery }
}
