import {createBrowserRouter} from "react-router-dom";
import {charactersRoutes} from "@/app/compositionRoot/characters.routes.tsx";
import {LayoutApp} from "@/app/layout/LayoutApp.tsx";

export const setupRouter = () => {
    return createBrowserRouter([
        {
            element: <LayoutApp />,
            children: [
                charactersRoutes
            ]
        }
    ])
}