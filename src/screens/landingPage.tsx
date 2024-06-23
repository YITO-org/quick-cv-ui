import React from "react";
import { Box, Typography , Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

let LandingPage : React.FC = ()=>{
  
  let nav = useNavigate();

  let redirect = ()=>{
    nav("/resumebuilder/detailes")
  }

  
  return(
      <React.Fragment>
          <div className="p-5 m-4">
                <Box>
                <Typography variant='h3' fontWeight={600}>Quick CV</Typography>
                  <Typography>Create Your ATC Friendly Resume, Just in five minutes.</Typography>
                  <Typography>Free and Open Source Resume Builder.</Typography>
                  <Button variant='contained'  sx={{mt : 1 , backgroundColor : 'black' , fontWeight : '800' }} onClick={redirect}>GET STARTED</Button>
                </Box>
          </div>
      </React.Fragment>
    )
  }
export default LandingPage;