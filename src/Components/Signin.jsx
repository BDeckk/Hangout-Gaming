import react, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signin = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(''); 

    const { session, signInUser } = UserAuth();
    const navigate = useNavigate();
    console.log(session);

    const handleSignIn = async (e) => {
        e.preventDefault() 
        setLoading(true)
        setError('') 

         if (!email || !password ) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            setLoading(false);
            return;
        }

        try{
            const result = await signInUser(email, password) 

        if(result.success) {
            navigate('/dashboard')
        }

        }catch(error) {
            setError("There's an error signing in");
        }
        finally{
            setLoading(false)
        }
    }
    return (
    <div>
        <form onSubmit={handleSignIn}>
            <h2>
                Sign In!
            </h2>
            <p>
                Don't have an account? <Link to="/signup">Sign up!</Link>
            </p>

            <div>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email"/>
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password"/>
                <button type="submit" disabled={loading} >
                    Submit
                </button>
                {error && <p>{error}</p>}
            </div>
            
        </form>

    </div>
    
    )
}

export default Signin; 