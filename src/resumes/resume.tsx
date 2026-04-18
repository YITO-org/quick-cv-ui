
// import { Box, Typography } from "@mui/material";
import React from "react";
import DashboardResumeTemplateOne from "./DashboardResumes/DashboardResumeTemplateOne";



// let _name : number = 18 , _f : number = 10


export const Templates : React.FC<any> = (props) => {
    
    // console.log({props});

    let templates : any = {
        "Template-1" : <DashboardResumeTemplateOne resumeInfo={props.resumeInfo} />,
        "Template-2" : <DashboardResumeTemplateOne resumeInfo={props.resumeInfo} />,
        "Template-3" : <DashboardResumeTemplateOne resumeInfo={props.resumeInfo} />,
        "Template-4" : <DashboardResumeTemplateOne resumeInfo={props.resumeInfo} />
    }

    return(
        <React.Fragment>
            {templates[props.resumeInfo.template]}
        </React.Fragment>
    )
} 


// export const DashboardResumeTemplateOne : React.FC<any> = (props)=>{
//     return(
//         <React.Fragment>
//             temp-1
//         </React.Fragment>
//     )
// }

export const DashboardResumeTemplateTwo : React.FC<any> = (_props)=>{
    return(
        <React.Fragment>
            temp-2
        </React.Fragment>
    )
}

export const DashboardResumeTemplateThree : React.FC<any> = (_props)=>{
    return(
        <React.Fragment>
            temp-3
        </React.Fragment>
    )
}

export const DashboardResumeTemplateFour : React.FC<any> = (_props)=>{
    return(
        <React.Fragment>
            temp-4
        </React.Fragment>
    )
}


