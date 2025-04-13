"use client"
import React from "react";
import {Navigate} from "react-router-dom";

// col stands form c=>create account , o => otp , l => login , screens

export let ProtectedRoutes_col : React.FC<any> = ({children})=>{

    if(localStorage.getItem("tokken")){
        return <Navigate to="/resumebuilder/dashboard" replace />
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}

export let ProtectedRoutes_dashboard : React.FC<any> = ({children})=>{

    if(!localStorage.getItem("tokken")){
        return <Navigate to="/login" replace />
    }

    return (
        <React.Fragment>
            {children}
        </React.Fragment>
    )
}


// export default ProtectedRoutes_col