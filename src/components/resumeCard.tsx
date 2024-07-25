"use client"
import React , { useEffect } from "react";
// import { connect } from "react-redux";

let ResumeCard : React.FC<any> = (props)=>{
    
    useEffect(()=>{
        console.log(props)    
        // props.dispatch(getResumes())
    
    },[])

    return(
        <React.Fragment>
            
        </React.Fragment>
    )
}

export default ResumeCard;

// let stateToProps = (state:any) => ({

//     resumes : state.storeUsers.resumes

// })

// export default connect(stateToProps , (dispatch:any)=>({dispatch}))(ResumeCard);