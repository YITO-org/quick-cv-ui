"use client"
import React , { useEffect } from "react";
import { connect } from "react-redux";
import { getResumes } from "../actions/resumeActions";
import { Box } from "@mui/material";
import ResumeCard from "../components/resumeCard";

let Dashboard : React.FC<any> = (props)=>{
    
    useEffect(()=>{
        props.dispatch(getResumes())
    },[])

    return(
        <React.Fragment>
            {
                props?.resumes?.map((e : any,index : number)=>(
                    <Box key={index}>
                        <ResumeCard {...e} />
                    </Box>
                ))
            }
        </React.Fragment>
    )
}

let stateToProps = (state:any) => ({
    // cv : state.cvReducer
    resumes : state.storeUsers.resumes

})

export default connect(stateToProps , (dispatch:any)=>({dispatch}))(Dashboard);