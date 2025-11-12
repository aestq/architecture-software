import { Outlet, type RouteObject } from 'react-router-dom'
import { ROUTES } from '@/shared/consts/router.ts'
import { CharactersPage } from '@/pages/CharactersPage'
import { FavoritesPage } from '@/pages/FavoritesPage'

export const charactersRoutes: RouteObject = {
    element: <Outlet />,
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
