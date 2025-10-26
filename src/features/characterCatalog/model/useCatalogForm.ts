import { useDidUpdate } from '@/shared/lib/hooks/useDidUpdate.ts'
import { useDebounceValue } from '@/shared/lib/hooks/useDebounceValue.ts'
import { useState } from 'react'

export const useCatalogForm = <Value>(request: (value: string) => Promise<Value>) => {
    const [searchQuery, setSearchQuery] = useState('')
    const debouncedQuery = useDebounceValue(searchQuery.toLowerCase(), 400)

    useDidUpdate(() => {
        request(debouncedQuery)
    }, [debouncedQuery])

    return { searchQuery, setSearchQuery }
}
