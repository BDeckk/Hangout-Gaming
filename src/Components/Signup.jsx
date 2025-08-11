import react, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 

    const { session, signUpNewUser } = UserAuth();
    const navigate = useNavigate();
    console.log(session);

    const handleSignUp = async (e) => {
        e.preventDefault() 
        setLoading(true)
        setError('') 

         if (!email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            setLoading(false);
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            setLoading(false);
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            setLoading(false);
            return;
        }

        try{
            const result = await signUpNewUser(email, password) 

        if(result.success) {
            navigate('/dashboard')
        }

        }catch(error) {
            setError("There's an error signing up");
        }
        finally{
            setLoading(false)
        }
    }
    return (
    <div>
        <form onSubmit={handleSignUp}>
            <h2>
                Sign up!
            </h2>
            <p>
                Already have an account? <Link to="/signin">Sign in!</Link>
            </p>

            <div>
                <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} type="email"/>
                <input placeholder="Password" onChange={(e) => setPassword(e.target.value)} type="password"/>
                <input placeholder="Confirm-Password" onChange={(e) => setConfirmPassword(e.target.value)} type="password"/>
                <button type="submit" disabled={loading} >
                    Submit
                </button>
                {error && <p>{error}</p>}
            </div>
            
        </form>

    </div>
    
    )
}

export default Signup; 