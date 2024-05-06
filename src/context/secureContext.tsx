
import React, { createContext , useState } from "react";
 import { AuthContextType } from "../interfaces/types";


export let AuthContext = createContext<AuthContextType |undefined>(undefined) 

const AuthProvider : React.FC<any> = ({children})=>{
   
     // console.log(children)

     const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
     const [tokken , setTokken] = useState<string|undefined|any>("");
      

  // Functions to change authentication state
  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const storeTokken = (value:string)=>{
    setTokken(value)
  }



  const value: AuthContextType = {
    isAuthenticated,
    tokken,
    login,
    logout,
    storeTokken
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}


export default AuthProvider;


