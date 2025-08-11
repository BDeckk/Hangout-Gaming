import "./WelcomeNavbar.css"
import { NavLink } from "react-router-dom"

export function WelcomeNavbar() {
    return (
        <>
        <div  className="welcome-navbar"> 
            <NavLink to="/about" ><button>About</button></NavLink>
        </div>
        </>
    )
}