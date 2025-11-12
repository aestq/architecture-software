import { useDidUpdate } from '@/shared/lib/hooks/useDidUpdate.ts'
import { useDebounceValue } from '@/shared/lib/hooks/useDebounceValue.ts'
import { useState } from 'react'
import { useDI } from '@/features/characterCatalog/di.ts'

export const useCatalogForm = () => {
    const { charactersStore } = useDI()
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedQuery = useDebounceValue(searchQuery.toLowerCase(), 400)

    useDidUpdate(() => {
        charactersStore.fetchCharacters(debouncedQuery)
    }, [debouncedQuery])

    return { searchQuery, setSearchQuery }
}
