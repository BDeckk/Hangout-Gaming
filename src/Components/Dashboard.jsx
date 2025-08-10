import react from "react"; 
import { UserAuth } from "./context/AuthContext";
import { useNavigate } from "react-router-dom";

 const Dashboard = () => {

    const {session , signOut} = UserAuth();
    const navigate = useNavigate();

    const handleSignOut = async(e) => {
        e.preventDefault();
        try{
         await signOut();
        navigate('/');
        }
        catch(err){
            console.error(err);
        }
        
    }

    return (
        <>
        <p>Welcome User!</p>
        <p>{session?.user?.email}</p>
        <button onClick={handleSignOut}>
            Sign Out
        </button>
        </>
    )
}

export default Dashboard;