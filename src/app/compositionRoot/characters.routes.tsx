import { Outlet, type RouteObject } from 'react-router-dom'
import { CharactersService } from '@/entities/character/services/character.service.ts'
import { ROUTES } from '@/shared/consts/router.ts'
import { CharactersPage } from '@/pages/CharactersPage/CharactersPage.tsx'
import { FavoritesPage } from '@/pages/FavoritesPage/FavoritesPage.tsx'
import { createCharactersProvider } from '@/entities/character/store/CharactersStoreProvider.tsx'
import { CharacterApiRepository } from '@/entities/character/repository/characterApiRepository.ts'
import { InMemoryCache } from '@/shared/lib/storages/InMemoryCache.ts'
import { FavoritesCharactersStorage } from '@/entities/character/services/characterFavorites.service.ts'
import { CharacterModel } from '@/entities/character/model/character.model.ts'
import { LocalStorageRepository } from '@/shared/lib/storages/localStorageRepository.ts'

const CharactersProvider = createCharactersProvider({
    charactersService: new CharactersService(
        new CharacterApiRepository(new InMemoryCache()),
        new FavoritesCharactersStorage(new LocalStorageRepository()),
        new CharacterModel()
    ),
})

export const charactersRoutes: RouteObject = {
    element: (
        <CharactersProvider>
            <Outlet />
        </CharactersProvider>
    ),
    children: [
        {
            path: ROUTES.CHARACTERS,
            element: <CharactersPage />,
        },
        {
            path: ROUTES.CHARACTER_FAVORITES,
            element: <FavoritesPage />,
        },
    ],
}
