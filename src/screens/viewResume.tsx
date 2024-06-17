import React from "react";
import Res from "./../resumes";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button , Box } from "@mui/material";

let ViewResume : React.FC<any> = ()=>{

    let nav = useNavigate();


    let viewResume = ()=>{
        nav(-1)
    }

    return(
        <React.Fragment>
                <Box sx={{ display : 'flex' , justifyContent : 'flex-end' , mb : 1}}>
                    <Button startIcon={<IoIosArrowBack />} size='small' variant="contained" onClick={viewResume}>Back</Button>
                </Box>
                <Res />
        </React.Fragment>
    )
}

export default ViewResume;