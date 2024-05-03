import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";

export  const AuthContext=createContext(null);
const AuthProviders = ({children}) => {
  const [user,setUser]=useState(null)
    const auth=getAuth(app);
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    
    const authInfo={
      createUser,
        signIn,
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