import { type ReactNode } from 'react'

interface Props {
    isEmpty?: boolean
    children: ReactNode
}

export const CharacterList = ({ isEmpty, children }: Props) => {
    if (isEmpty) {
        return <div className='text-sm text-muted-foreground mt-4'>No results</div>
    }

    return <div className='grid grid-cols-1 md:grid-cols-4 gap-4 mt-4'>{children}</div>
}
