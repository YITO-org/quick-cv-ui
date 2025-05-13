import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
// import {useWidth} from "../layout";
import hairingimg from "../assets/hairingimg.avif";
import Button from '@mui/material/Button';

let LandingPage : React.FC<any> = (props)=>{


  useEffect(()=>{
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

    <nav className="navbar sticky-top navbar-dark bg-dark">
            <div className="container-fluid">
              <div className="navbar-brand mb-0 h1">Quick CV</div>
              <Button  sx={{backgroundColor:"white",color:"black",fontWeight:"700",paddingX:2, "&:hover": {
      backgroundColor: "white",
      color: "blue",
    },}} onClick={redirect}>Go to App 👉</Button>
            </div>
          </nav>
    
          {/* body  */}
           <div className="bg-light text-dark" style={{height:"90vh"}}>
               
               <div className="container">
                   <div className="row gx-5">
    
                       <div className="col">
                           <div className="p-3 mt-5">
                               <p className="display-6 fw-normal"> Welcome to, Free and Open 
                                   Source resume builder.</p>
                                   
                                   <div className="d-flex flex-column gap-2">
                                       <div className="fs-5">Create your ATC friendly resume, Just in five minutes.</div>
                                       <div className="fs-5">User-Friendly Interface</div>
                                       <div className="fs-5">Customizable Templates</div>
                                       <div className="fs-5">Real-Time Editing</div>
                                       <div className="fs-5">Export to PDF</div>
                                    </div>
    
                                    <div className="my-1 py-1 d-flex gap-2">
                                        <button className="btn btn-primary btn-sm" onClick={redirect}>Get Started</button>
                                        <button className="btn btn-primary btn-sm" onClick={redirectTOSignUp}>Signup</button>
                                    </div>
    
                                </div>
                            </div>
                            <div className="col mt-4 d-sm-none d-md-block">
                                 <img src={hairingimg} className="img-fluid mt-3 shadow-sm bg-body"/>
                            </div>
    
                        </div>
                    </div>
                    
                </div>
    
            </React.Fragment>
      )

  }

  const mapStateToProps = (state : any ) => ({
    cv : state.cvReducer,
    user: state.storeUsers
  });


  
export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(LandingPage);





