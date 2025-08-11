import { Outlet, useLocation } from "react-router-dom"
import { HomeNavbar } from "./HomeNavbar";
import { WelcomeNavbar } from "./WelcomeNavbar";

export function Layout() {
    const location = useLocation(); 
    const isWelcomepage = location.pathname == "/";

    return (
        <>
        
            { isWelcomepage ? <WelcomeNavbar /> : <HomeNavbar />}
            <main>
                <Outlet />
            </main>
        </>
    )
}