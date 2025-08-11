import { Link } from "react-router-dom";
import "./HomeNavbar.css"

export function HomeNavbar(){
    return(

        <>
        <div className="home-navbar">
            <Link to="/dashboard"><botton>Home</botton></Link>
            <Link to="/gallery"><botton>Gallery</botton></Link>
            <Link to="/members"><botton>Members</botton></Link>
            <Link to="/profile"><botton>Profile</botton></Link>

        </div>
       </>
    )
}