import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export  const AuthContext=createContext(null);
const AuthProviders = ({children}) => {
  const [user,setUser]=useState(null);
  const [loading,setLoading]=useState(true);    
    const auth=getAuth(app);

    const createUser=(email,password)=>{
        setLoading(true);
    
        return createUserWithEmailAndPassword(auth,email,password);
        
    }
    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };
    const logout=()=>{
        return signOut(auth);
    }
    useEffect(()=>{
        const unsubscribed=onAuthStateChanged(auth,(user)=>{
            setUser(user);
            console.log(user);
            setLoading(false);
        })
        return ()=> unsubscribed();
    })
    const authInfo={
      createUser,
        signIn,
        signInWithGoogle,
        logout,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
{
    children
}
        </AuthContext.Provider>
    );
};

export default AuthProviders;