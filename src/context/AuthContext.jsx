import { createContext, useEffect, useState, useContext } from "react";
import { supabase } from "../supabaseClient"

const AuthContext = createContext() ;

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)

    //Sign Up

    const signUpNewUser = async ( email , password ) => {
        const { data , error } = await supabase.auth.signUp({
            email: email, 
            password: password,
        });

        if(error) {
            console.error("There was a problem signing up: ", error);
            return { success: false, error}; 
        }
        return{success: true, data}
    }

    //Sign Up

    const signInUser = async ( email, password ) => {
        try {
        const { data , error } = await supabase.auth.signInWithPassword({
            email: email, 
            password: password,
        });

        if(error){
            console.error("Error occures(Sign In): ", error) 
            return { success: false, error: error.message }
        }

        console.log("Sign in success!");
        return { success: true, data}
        }
        catch(error){
            console.error("There was a problem signing in: ", error);
        }
        return{success: true, data}
    }

    useEffect(() => {
        supabase.auth.getSession().then(({ data : { session } }) => {
            setSession(session)
        })

        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        })
    }, []);

    //Sign Out 
    const signOut = () => {
        const { error } = supabase.auth.signOut(); 

        if(error){
            console.error("There was a problem signing out: ", error);
        }
    }

    return (
        <AuthContext.Provider value={{session, signUpNewUser, signOut, signInUser}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}