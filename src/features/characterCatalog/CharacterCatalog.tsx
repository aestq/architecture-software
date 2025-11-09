import { CatalogInput } from '@/features/characterCatalog/ui/CatalogInput.tsx'
import { useDI } from '@/features/characterCatalog/di.ts'
import { CatalogList } from '@/features/characterCatalog/ui/CatalogList.tsx'
import { Spinner } from '@/shared/ui/spinner.tsx'
import { selectIsError, selectIsLoading } from '@/entities/character/store/characters.selectors.ts'

export const CharacterCatalog = () => {
    const { charactersStore } = useDI()
    const isCharactersError = charactersStore.use(selectIsError)
    const isCharactersLoading = charactersStore.use(selectIsLoading)

    return (
        <div className='p-4'>
            <div className='mb-4'>
                <CatalogInput />
            </div>

            {isCharactersLoading && <Spinner className='flex justify-center mx-auto mt-5' />}

            {isCharactersError ? <div className='text-sm text-muted-foreground mt-4'>Таких персонажей нет</div> : <CatalogList />}
        </div>
    )
}
