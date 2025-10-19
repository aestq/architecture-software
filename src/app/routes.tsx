import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { CharactersPage } from "@/pages/CharactersPage";
import { FavoritesPage } from "@/pages/FavoritesPage";

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
