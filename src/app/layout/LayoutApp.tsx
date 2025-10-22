import {NavBar} from "@/app/layout/NavBar.tsx";
import {Outlet} from "react-router-dom";

export const LayoutApp = () => {
    return (
        <div className="min-h-screen">
            <NavBar />
            <main className="container mx-auto">
                <Outlet />
            </main>
        </div>
    )
}