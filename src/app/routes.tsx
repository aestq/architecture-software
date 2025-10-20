import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CharactersPage } from "@/pages/CharactersPage/CharactersPage.tsx";
import { FavoritesPage } from "@/pages/FavoritesPage/FavoritesPage.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <CharactersPage /> },
      { path: "favorites", element: <FavoritesPage /> },
    ],
  },
]);
