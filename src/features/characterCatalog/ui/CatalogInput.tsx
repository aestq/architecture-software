import { Input } from '@/shared/ui/input.tsx'
import { useCatalogForm } from '@/features/characterCatalog/model/useCatalogForm.ts'

export const CatalogInput = () => {
    const { setSearchQuery, searchQuery } = useCatalogForm()

    return <Input placeholder='search...' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
}
