import {Outlet, type RouteObject} from "react-router-dom";
import {createCharacterProvider} from "@/entities/character/store/createCharacterProvider.tsx";
import {CharacterService} from "@/entities/character/services/character.service.ts";
import {CharacterApiRepository} from "@/entities/character/repository/characterApiRepository.ts";
import {CharacterModel} from "@/entities/character/model/character.model.ts";
import {CharacterFavoritesService} from "@/entities/character/services/characterFavorites.service.ts";
import {ROUTES} from "@/shared/consts/router.ts";
import {CharactersPage} from "@/pages/CharactersPage/CharactersPage.tsx";
import {FavoritesPage} from "@/pages/FavoritesPage/FavoritesPage.tsx";
import {LocalStorageRepository} from "@/shared/lib/storages/localStorageRepository.ts";

const CharactersProvider = createCharacterProvider({
    characterService: new CharacterService(
        new CharacterApiRepository()
    ),
    characterModel: new CharacterModel(),
    characterFavoritesService: new CharacterFavoritesService(
        new LocalStorageRepository()
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
            element: <CharactersPage />
        },
        {
            path: ROUTES.CHARACTER_FAVORITES,
            element: <FavoritesPage />
        }
    ]
}