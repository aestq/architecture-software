import type { Signal } from '@preact/signals-react'

export interface Character {
    id: number
    name: string
    image: string
    status: string
    species: string
    isFavorite: Signal<boolean>
}
