import React from "react";
// import { Box, Typography , Button, AppBar, Container, Grid} from "@mui/material";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { useNavigate } from "react-router-dom";
// import {useWidth} from "../layout";
import "../styles/landingpage2.css";

let LandingPage2 : React.FC = ()=>{
  
  let nav = useNavigate();

  let redirect = ()=>{
    nav("/resumebuilder/detailes")
  }

  let redirectTOSignUp = ()=>{
    nav("/createaccount")
  }

  // let screenSize = useWidth();
  
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
        <nav className="navbar navbar-light bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand  tes fw-bolder fs-3 text-white">QUICK CV</a>
         <button className="btn btn-warning btn-sm fw-bolder">DONATE</button>
          </div>
        </nav>
      <div className="container-sm">
        <div className="row p-3">
            <div className="col-sm-12 col-md-6 col-lg-6 col-xl-7 col-xxl-6 d-block justify-content-center  align-items-center">
                <div className="display-6 fw-bolder tes">Welcome to, Free and <br />Open Source resume builder.</div>
                <div className="d-flex flex-column fs-4 tes subline">
                  <div> Create your ATC friendly resume, Just in five minutes.</div>  
                  <div>User-Friendly Interface</div> 
                  <div>Customizable Templates</div>
                  <div>Real-Time Editing</div>
                  <div>Export to PDF</div>
                </div>
                <div className="d-flex flex-row gap-3 mt-3">
                    <button className="btn btn-dark btn-sm tes fw-bold" onClick={redirect} >Get Started</button>
                    <button className="btn btn-dark btn-sm tes fw-bold" onClick={redirectTOSignUp} >Sign up</button>
                </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-6 d-none d-sm-block d-md-none d-lg-block border border-dark">
                <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="Resume" />
                      </div>
                      <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="Resume" />
                      </div> 
                    </div>
                  </div>
            </div>
            
        </div>
      </div>
        </React.Fragment>
      )

  }
export default LandingPage2;
