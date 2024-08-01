import React from "react";
import { Box, Typography , Button, AppBar, Container, Grid} from "@mui/material";
import { useNavigate } from "react-router-dom";

let LandingPage : React.FC = ()=>{
  
  let nav = useNavigate();

  let redirect = ()=>{
    nav("/resumebuilder/detailes")
  }

  let redirectTOSignUp = ()=>{
    nav("/createaccount")
  }

  
  // return(
  //     <React.Fragment>
  //         <div className="p-5 m-4">
  //               <Box>
  //               <Typography variant='h3' fontWeight={600}>Quick CV</Typography>
  //                 <Typography>Create Your ATC Friendly Resume, Just in five minutes.</Typography>
  //                 <Typography>Free and Open Source Resume Builder.</Typography>
  //                 <Button variant='contained'  sx={{mt : 1 , backgroundColor : 'black' , fontWeight : '800' }} onClick={redirect}>GET STARTED</Button>
  //               </Box>
  //         </div>
  //     </React.Fragment>
  //   )


  return(
        <React.Fragment>
          <AppBar position='static' elevation={0} color='transparent'>
            <Container maxWidth='xl'>
              {/* <Toolbar disableGutters /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                Quick CV
          </Typography>
            </Container>
          </AppBar>
          

                <Container maxWidth='xl'>
                    {/* <Box sx={{ display : 'flex' , justifyContent : 'left' , mt : '5%' }} >
                          <Box>
                            <Typography variant='h6'>Create your ATC friendly resume, Just in five minutes.</Typography>
                            <Typography variant='h4' >Free and Open Source resume builder.</Typography>
                            <Button variant='contained'  sx={{mt : 1 , backgroundColor : 'black' , fontWeight : '800' }} onClick={redirect}>GET STARTED</Button>
                        </Box>
                    </Box> */}
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={10} sm={10} md={10} lg={5} xl={5} >
                      <Box sx={{ display : 'flex' , justifyContent : 'left' , mt : '5%' }} >
                          <Box>
                            <Typography variant='h6'>Create your ATC friendly resume, Just in five minutes.</Typography>
                            <Typography variant='h4' >Free and Open Source resume builder.</Typography>
                            <Button variant='contained'  sx={{mt : 2 , backgroundColor : 'black' , fontWeight : '800' }} onClick={redirect}>GET STARTED</Button>
                            <Button variant='contained'  sx={{mt : 2 , ml : 2, backgroundColor : 'black' , fontWeight : '800' }} onClick={redirectTOSignUp}>Create Account</Button>
                        </Box>
                    </Box> 
                      </Grid>
                    </Grid>
            </Container>

        </React.Fragment>
      )

  }
export default LandingPage;
