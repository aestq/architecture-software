import { CatalogInput } from '@/features/characterCatalog/ui/CatalogInput.tsx'
import { useDI } from '@/features/characterCatalog/di.ts'
import { CatalogList } from '@/features/characterCatalog/ui/CatalogList.tsx'
import { Show } from '@preact/signals-react/utils'
import { Spinner } from '@/shared/ui/spinner.tsx'

export const CharacterCatalog = () => {
    const { charactersStore } = useDI()

    return (
        <div className='p-4'>
            <div className='mb-4'>
                <CatalogInput />
            </div>

            <Show when={charactersStore.isCharactersLoading}>
                <Spinner className='flex justify-center mx-auto mt-5' />
            </Show>

            <Show
                when={charactersStore.characters}
                fallback={<div className='text-sm text-muted-foreground mt-4'>Таких персонажей нет</div>}
            >
                <CatalogList />
            </Show>
        </div>
    )
}
