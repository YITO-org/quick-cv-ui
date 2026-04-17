import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
// import {useWidth} from "../layout";
// import hairingimg from "../assets/hairingimg.avif";
import Button from '@mui/material/Button';
import { styles } from "../styles/styles";
import { Alert, Box, Container, CssBaseline , Dialog, DialogContent, DialogTitle, Grid, Stack, Typography } from "@mui/material";
import AppBar from '@mui/material/AppBar';
import { IoNewspaperOutline } from "react-icons/io5";
import { PiTimerDuotone } from "react-icons/pi";
import { LiaUserFriendsSolid } from "react-icons/lia";
import { FiEdit } from "react-icons/fi";
import { FaRegFilePdf } from "react-icons/fa6";
import { MdOutlineLockPerson } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import resumeOneImage from "../utils/images/resumeOneImage.png"
import resumeTwoImage from "../utils/images/resumeTwoImage.png"
import resumeThreeImage from "../utils/images/resumeThreeImage.png"
// import resumeFourImage from "../../../public/images/resumeFourImage.png"
import resumeFourImage from "../utils/images/resumeFourImage.png"

// video
import dashboardVideo from "../utils/images/dashboard-video_.mp4"
import "../utils/images/resumeFourImage.png";
import { landingPageResumeCount } from "../actions/landingPageActions";
import ResumeFileUpload from "../components/ResumeFileUpload";

let LandingPage : React.FC<any> = (props)=>{


  let [openCreateResumeModel , setOpenCreateResumeModel] = React.useState(false);
  let [createPopUpAlert , setCreatePopUpAlert  ] = React.useState('');
  let [selectedImageIndex , setSelectedImageIndex ] = React.useState<number | null>(null);

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

  let selectTempletAndDashBoard = (template : string)=>{
      props.dispatch({ type : "SET_TEMPLATE_FROM_DASHBOARD" , selectedTemplate : template })
      nav("/resumebuilder/detailes");
  }

  let templates: any = {
    'Template-1': resumeOneImage,
    'Template-2': resumeTwoImage,
    'Template-3': resumeThreeImage,
    'Template-4': resumeFourImage
  }

 //  let screenSize = useWidth();



  return(
    <React.Fragment>
     {/* <Box sx={styles.navbar_container} > */}
       <AppBar sx={styles.navbar} position="static">
              <Typography variant="h6" sx={styles.navbar_title}>
                           Quick CV
              </Typography>
              <Box sx={{ display : 'flex' , gap : 2 }} >

                  <Button sx={styles.navbar_go_app_button} size='small' onClick={redirect}>
                      Go to App 👉
                    </Button>

                    {/* <Button sx={{ bgcolor : "#feac32" , color : "black" ,  fontWeight : 'bold' , border : '3px solid #feac32' , "&:hover": {backgroundColor: "#feac32" } }} size='small' onClick={()=>{nav("/donate")}} >
                        Donate
                    </Button> */}

              </Box>
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
              <Box bgcolor='#373c44' width={200} textAlign='center' color='white' pr={2.5} pl={2.5} pt={1.5} pb={1.5} borderRadius={1} fontWeight={600} onClick={()=>{ setOpenCreateResumeModel(true) }} sx={{  cursor: 'pointer' }}>
                  Create your Resume
              </Box>
             <Box bgcolor='white' width={200} textAlign='center' color='#373c44' pr={2.5} pl={2.5} pt={1.5} pb={1.5} border={2} borderRadius={1} fontWeight={600}  onClick={redirectTOSignUp} sx={{ cursor: 'pointer' }}>
                Signup
             </Box>
              {/* <ResumeFileUpload /> */}
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
              {
                Object.keys(templates).map((e:any,index:number)=>
                      <img key={index} src={templates[e]} width={320} height={350}
                            onClick={()=>{selectTempletAndDashBoard(e)}}
                        onMouseEnter={() => setSelectedImageIndex(index)}
                        onMouseLeave={() => setSelectedImageIndex(null)}
                      className="img-fluid rounded" style={{ border: index == selectedImageIndex ? "4px solid" : "1px solid black", borderWidth: '1px' , borderColor : index == selectedImageIndex ? 'lightblue' : ''  }} />
                )
              }
        </Stack>

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

        <Typography mt={5} mb={4} textAlign='center' variant='h4' fontWeight={900} color='#333'> Why Quickcv 😌 </Typography>
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
                            <Typography variant='h6' my={2} ml={1}>Create CV in 5 Minutes</Typography>
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
                      <MdOutlineLockPerson style={{ fontSize: 60 }} />
                      <Typography variant='h6' my={2} ml={1}>Secure Data</Typography>
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

                <CssBaseline />

              <Typography mt={20} mb={1} textAlign='center' variant='h4' fontWeight={900} color='#333'> About Us 🤟 </Typography>

                <Typography textAlign='center'mb={1} fontSize={18} >
                  ❤️ Our goal is to make resume building <strong>  fast , simple, and accessible </strong> for everyone. 🚀
                </Typography>

                  <Typography textAlign={'center'} color={'gray'}>
                    Quick CV is an easy online resume builder that helps students and professionals create professional CVs in minutes.
                  </Typography>

                <Typography textAlign={'center'} color={'gray'} mb={8} >
                  With modern templates and simple editing, users can quickly build and download their resumes without any design skills.
                </Typography>

            </Container>


                
                                    <Dialog
                                        open={openCreateResumeModel}
                                        onClose={()=>setOpenCreateResumeModel(false)}
                                        fullWidth={true}
                                        maxWidth={'lg'}
                                        PaperProps={{
                                        
                                        component: 'form',
                                        // onSubmit: (event : React.FormEvent<HTMLFormElement>) => {
                                        //     event.preventDefault();
                                        //     if(clone){
                                        //         createCloneResume();
                                        //     }else{
                                        //         createResume();
                                        //     }
                                       // },
                                        }}
                                    >
                                      <Box sx={{ backgroundColor : '#f8f7f9ff' }} >

                                        <DialogTitle 
                                            variant='h5'
                                            fontWeight='bold'
                                            align='center'
                                        >
                                            Upload Your Existing Resume Or Create From Scratch
                                        </DialogTitle>
                                        <DialogContent>

                                                {
                                                  createPopUpAlert &&
                                                  <Box display={'flex'} justifyContent={'center'} mt={2} mb={2} >
                                                    <Box maxWidth={1000} width={500} >
                                                      <Alert severity="error" variant="filled" >{createPopUpAlert}</Alert>
                                                    </Box>
                                                  </Box>
                                                
                                                }


                                                      <Box
                                                         sx={{display : 'flex' , flexWrap : 'wrap' , gap : 2 , justifyContent : 'center' }}
                                                      >

                                                          <ResumeFileUpload setCreatePopUpAlert={setCreatePopUpAlert}  />

                                                                    <Box   
                                                                     width={450} height={200} 
                                                                     textAlign='center' pr={2.5} pl={2.5} 
                                                                     pt={1.5} pb={1.5} border={2}
                                                                     borderRadius={1} fontWeight={600} 
                                                                     display={'flex'}  
                                                                     flexDirection={'column'}
                                                                     gap={2} 
                                                                     justifyContent={'center'} 
                                                                     alignItems={'center'}
                                                                     onClick={redirect}
                                                                      sx={{ cursor: 'pointer' , backgroundColor : 'white' }}>

                                                                          <IoCreate size={70} />


                                                                        <Typography variant="inherit">Create New Resume From Scratch</Typography>
                                                                        <Typography variant="body2" fontWeight={'bold'} color='#3686d8'>Build a standout resume with expert tips and real examples.</Typography>
                                                                    </Box>


                                                      </Box>                                          

                                        </DialogContent>
                                        {/* <DialogActions>
                                        <Button variant='contained' size='small' type="submit">Create</Button>
                                        <Button variant='contained' size='small' color='error' onClick={func_closeCreateResumeModel}>Cancel</Button>
                                        </DialogActions> */}
                                        </Box>
                                    </Dialog>



    
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





