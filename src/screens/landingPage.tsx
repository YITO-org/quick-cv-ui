import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
// import {useWidth} from "../layout";
// import hairingimg from "../assets/hairingimg.avif";
import Button from '@mui/material/Button';
import { styles } from "../styles/styles";
import { Box, Container, CssBaseline , Grid, Stack, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import { IoNewspaperOutline } from "react-icons/io5";
import { PiTimerDuotone } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { TbTemplate } from "react-icons/tb";
import { FiEdit } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa6";
import resumeOneImage from "../utils/images/resumeOneImage.png"
import resumeTwoImage from "../utils/images/resumeTwoImage.png"
import resumeThreeImage from "../utils/images/resumeThreeImage.png"
// import resumeFourImage from "../../../public/images/resumeFourImage.png"
import resumeFourImage from "../utils/images/resumeFourImage.png"

// video
import dashboardVideo from "../utils/images/dashboard-video_.mp4"
import { landingPageResumeCount } from "../actions/landingPageActions";


let LandingPage : React.FC<any> = (props)=>{

  useEffect(()=>{
    props.dispatch(landingPageResumeCount())
  },[])
  
  let nav = useNavigate();
  
  let redirect = ()=>{
    if(props.user.userTokken){
      nav("/resumebuilder/dashboard");
    }else{
      nav("/resumebuilder/detailes");
    }
  }

  let redirectTOSignUp = ()=>{
    nav("/createaccount")
  }

  let templates: any = {
    'Template-1': resumeOneImage,
    'Template-2': resumeTwoImage,
    'Template-3': resumeThreeImage,
    'Template-4': resumeFourImage
  }

 //  let screenSize = useWidth();
  
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
     {/* <Box sx={styles.navbar_container} > */}
       <AppBar sx={styles.navbar} position="static">
              <Typography variant="h6" sx={styles.navbar_title}>
                           Quick CV
              </Typography>
          <Button sx={styles.navbar_go_app_button} size='small' onClick={redirect}>
            Go to App 👉
            </Button>
       </AppBar>
       {/* </Box> */}

          <CssBaseline />

          {/* body  */}

            {/* <Button variant='contained' color='inherit' ></Button> */}

          <Container maxWidth='xl'>
          <Typography mt={2.5} mb={0.5} textAlign='center' variant='h4' fontWeight={900} color='#333'> Create Job-Winning CVs, in Minutes 😎 </Typography>

           {/* <Typography textAlign='center' color='#888' variant='subtitle2'>Create your ATC friendly resume, Just in five minutes.</Typography>
           <Typography textAlign='center' color='#888' variant='subtitle2' >User-Friendly Interface , Customizable Templates</Typography>
           <Typography textAlign='center' color='#888' variant='subtitle2' >Real-Time Editing , Export to PDF</Typography> */}

          <Typography textAlign='center' color='#888' variant='subtitle2' >
            A fast, easy-to-use resume builder for crafting modern CVs.
             <br />
            Perfect for freshers, professionals, and techies alike.
          </Typography>


           <Stack direction='row' justifyContent='center' alignItems='center' my={2} >
              <Box py={0.8} px={0.8} bgcolor='#ececec' width={250} textAlign='center' borderRadius={2.4}>
                <Typography variant='overline' fontStyle='unset' fontWeight='600' >
                  Over {props.landingPageCount?.resumeCount} resumes created
                </Typography>
              </Box>
            </Stack>
            

            <Stack direction='row' justifyContent='center' alignItems='center' mt={1} gap={2} flexWrap='wrap' >
              <Box bgcolor='#373c44' width={200} textAlign='center' color='white' pr={2.5} pl={2.5} pt={1.5} pb={1.5} borderRadius={1} fontWeight={600} onClick={redirect} sx={{  cursor: 'pointer' }}>
                  Create your Resume
              </Box>
             <Box bgcolor='white' width={200} textAlign='center' color='#373c44' pr={2.5} pl={2.5} pt={1.5} pb={1.5} border={2} borderRadius={1} fontWeight={600}  onClick={redirectTOSignUp} sx={{ cursor: 'pointer' }}>
                Signup
             </Box>
            </Stack>

            {/* Need to add video */}



            {/* why QuickCV */}


          </Container>
      <CssBaseline />


            <Container>
              <Box display='flex' justifyContent='center' alignItems='center' mt={5} >
                <video 
            autoPlay
            muted
            loop
            playsInline
                style={{borderRadius : 10, width : "80%" }}>
                    <source src={dashboardVideo} type="video/mp4"></source>
                </video>
              </Box>
            </Container>


      <Container maxWidth='lg' sx={{my : 5 }} >

        <Typography mt={2.5} mb={0.5} textAlign='center' variant='h4' fontWeight={900} color='#333' > Free Resume Templates </Typography>
        
        <Typography textAlign='center' color='#888' variant='subtitle2' mb={4} >
          Stop worrying about formatting—our modern, ATS-ready templates help 
           <br />
          you create a professional resume that stands out at any career level.
        </Typography>



        <Stack
            flexWrap="wrap"
            useFlexGap
            direction={{ xs: 'column', sm: 'column' , md : 'row' , lg : 'row' , xl : 'row'  }}
            spacing={{ xs: 1, sm: 2, md: 12 }}
            justifyContent={{ xs : 'center' , sm : 'center' , md : 'flex-start' , lg : 'flex-start' , xl : 'flex-start' }}
            alignItems={{ xs: 'center', sm: 'center', md: 'flex-start', lg: 'flex-start', xl: 'flex-start' }}
        >

            <img src={templates['Template-1']}
              width={320} height={350}
              className="img-fluid rounded" style={{ border: "1px solid black", borderWidth: '1px' }} />


            <img src={templates['Template-2']}
              width={320} height={350}
              className="img-fluid rounded" style={{ border: "1px solid black", borderWidth: '1px' }} />

            
            <img src={templates['Template-3']}
              width={320} height={350}
              className="img-fluid rounded" style={{ border: "1px solid black", borderWidth: '1px' }} />

            <img src={templates['Template-4']}
              width={320} height={350}
              className="img-fluid rounded" style={{ border: "1px solid black", borderWidth: '1px' }} />

            </Stack>

            {/* old code */}

        {/* <Grid container rowSpacing={4} 
        // justifyContent='center' alignItems='center' 
        direction='row' >

            <Grid item lg={4} xl={4} >
                <img src={templates['Template-1']}
                  width={320} height={350}
                  className="img-fluid rounded" style={{ border:  "1px solid black",borderWidth: '1px' }} />
          </Grid>

          <Grid item lg={4} xl={4}>
                <img src={templates['Template-2']}
                  width={320} height={350}
                  className="img-fluid rounded" style={{ border: "1px solid black", borderWidth: '1px' }} />
          </Grid>

          <Grid item lg={4} xl={4} >
                <img src={templates['Template-3']}
                  width={320} height={350}
                  className="img-fluid rounded" style={{ border: "1px solid black", borderWidth: '1px' }} />
          </Grid>


          <Grid item lg={4} xl={4} >
            <img src={templates['Template-4']}
              width={320} height={350}
              className="img-fluid rounded" style={{ border: "1px solid black", borderWidth: '1px' }} />
          </Grid>

          </Grid> */}

        </Container>

      <CssBaseline />


            <Container 
                sx={{
                  maxWidth: {
                    xs: '100%',     // extra-small devices
                    sm: '540px',    // small devices
                    md: '720px',    // medium devices
                    lg: '960px',    // large devices
                    xl: '1140px',   // extra-large devices
                  }
                }}
            >
        <Typography mt={5} mb={4} textAlign='center' variant='h4' fontWeight={900} color='#333'> Why Quickcv.site 😌 </Typography>
              <Grid container columnSpacing={12} mb={10} >
                  <Grid item xl={6} sm={12} md={12} lg={6} xs={12} >
                      <Box bgcolor='white' color='#373c44' pr={2.5} pl={2.5} pt={1.5} pb={1.5} borderRadius={1} fontWeight={500} display='flex' gap={2} >
                              <IoNewspaperOutline style={{ fontSize: 60 }} />
                              <Typography variant='h6' my={2} ml={1}>Create your ATC friendly resume</Typography>
                            </Box>
                  </Grid>

                  <Grid item xl={6} sm={12} md={12} lg={6} xs={12} >
                    <Box bgcolor='white' color='#373c44' pr={2.5} pl={2.5} pt={1.5} pb={1.5} borderRadius={1} fontWeight={500} display='flex' gap={2} >
                            <PiTimerDuotone style={{ fontSize: 60 }} />
                            <Typography variant='h6' my={2} ml={1}>Create your ATC friendly resume</Typography>
                    </Box>
                  </Grid>

                  <Grid item xl={6} sm={12} md={12} lg={6} xs={12} >
                  <Box bgcolor='white' color='#373c44' pr={2.5} pl={2.5} pt={1.5} pb={1.5} borderRadius={1} fontWeight={500} display='flex' gap={2} >
                    <LiaUserFriendsSolid style={{ fontSize: 60 }} />
                    <Typography variant='h6' my={2} ml={1}>User-Friendly Interface</Typography>
                  </Box>
                </Grid>

          <Grid item xl={6} sm={12} md={12} lg={6} xs={12} >
            <Box bgcolor='white' color='#373c44' pr={2.5} pl={2.5} pt={1.5} pb={1.5} borderRadius={1} fontWeight={500} display='flex' gap={2} >
                      <TbTemplate style={{ fontSize: 60 }} />
                      <Typography variant='h6' my={2} ml={1}>User-Friendly Interface</Typography>
                    </Box>
                </Grid>


          <Grid item xl={6} sm={12} md={12} lg={6} xs={12} >
            <Box bgcolor='white' color='#373c44' pr={2.5} pl={2.5} pt={1.5} pb={1.5} borderRadius={1} fontWeight={500} display='flex' gap={2} >
                   <FiEdit style={{ fontSize: 60 }} />
                   <Typography variant='h6' my={2} ml={1}>Real-Time Editing</Typography>
                  </Box>
                </Grid>

          <Grid item xl={6} sm={12} xs={12} md={12} lg={6} >
                  <Box bgcolor='white' color='#373c44' pr={2.5} pl={2.5} pt={1.5} pb={1.5} borderRadius={1} fontWeight={500} display='flex' gap={2}  >
                    <FaRegFilePdf style={{ fontSize: 60 }} />
                    <Typography variant='h6' my={2} ml={1}>Export to PDF</Typography>
                  </Box>
                </Grid>

              </Grid>


            </Container>

    
            </React.Fragment>
      )

  }


  // Create Job - Winning CVs, in Minutes.


  const mapStateToProps = (state : any ) => ({
    cv : state.cvReducer,
    user: state.storeUsers,
    landingPageCount: state.landingReducer
  });


  
export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(LandingPage);





