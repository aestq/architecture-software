import {RouterProvider} from "react-router-dom";
import {setupRouter} from "@/app/compositionRoot/setupRouter.tsx";

const router = setupRouter()

export function App() {
  return <RouterProvider router={router} />
}
