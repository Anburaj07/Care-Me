import {createContext, useState} from "react";
export const AuthContext=createContext()
export const AuthContextProvider = (props) => {  
    const[authState,setAuthState]=useState({ isAuth: false, userDetails: null })
    const loginUser=(name,accountType,age,email,phoneNo,gender,height,weight)=>{
    //   console.log(name,accountType,age,email,phoneNo,gender,height,weight,'in auth')
      setAuthState({isAuth: true, userDetails: {name:name,accountType:accountType,age:age,email:email,phoneNo:phoneNo,gender:gender,height:height,weight:weight}})
    }
    const logoutUser=()=>{
      setAuthState({ isAuth: false, userDetails: null })
    }
    let providerState = {
      authState,
      loginUser,
      logoutUser
    };
    return(
      <AuthContext.Provider value={providerState}>
        {props.children}
      </AuthContext.Provider>
    )
  };