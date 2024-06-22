"use client"
// import { Button, Container,  FormLabel,  Grid,  StepLabel,  TextField, Typography } from '@mui/material';
// import {makeStyles} from "@mui/styles"
// //import './App.css'

// const useStyles = makeStyles({
//   field : {
//     marginTop : 5,
//     marginBottom : 5
//   },
// });

// function App() {

//   let s = useStyles()


//   const click = ()=>{

//   }

//   return (
//     <>
//       <Grid container rowGap={3}>
//         <Grid md={4} sm={3}  xs={12}>
//             Surya
//         </Grid>
//         <Grid md={4} sm={3} xs={12}>
//             Surya-2
//         </Grid>
//         <Grid md={4} sm={3} sx={{ display: { xs: 'none', sm: 'block' } }}>
//             Surya-3
//         </Grid>
//       </Grid>
//     </>
//   )
// }

// export default App



import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes , Outlet, Navigate} from "react-router-dom";
import Layout from "./layout";
import CreateAndLoginAccount from "./screens/createAccount";
import Otp from "./screens/otp";
import AuthProvider from "./context/secureContext";
import { useSelector  , connect } from "react-redux";
import { storeOrResetTokken } from "./actions";
import Detailes from "./screens/detailes";
import CVInfoData from "./screens/cvInfoData";
import ViewResume from "./screens/viewResume";
import LandingPage from "./screens/landingPage"

const App : React.FC<any>  = (props)=>{


  useEffect(()=>{
    if(localStorage.getItem("tokken")){
      props.dispatch(storeOrResetTokken(localStorage.getItem("tokken")))
    }
  },[])



  return (
    <React.Fragment>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/createaccount" element={<CreateAndLoginAccount headerName="Create Account" buttonName="Create" redirectionScreen="/login" />}></Route>
              <Route path="/login" element={<CreateAndLoginAccount headerName="Login" buttonName="Login" redirectionScreen="/createaccount" />}></Route>
              <Route path="/otp" element={<Otp headerName="OTP" buttonName="Submit" redirectionScreen="/resumebuilder"  />} />

              <Route path="/resumebuilder" element={<MainApp />}>
                  <Route index path="dashboard" element={ <PR> <Dashboard /> </PR> } />
                  <Route index path="detailes" element={ <Detailes headerName="Details"  /> } />
                  <Route  path="summary" element={<Detailes headerName="Summary" />} />
                  <Route  path="education" element={<CVInfoData headerName="Education" screenName="education" /> } />
                  <Route  path="workHistory" element={<CVInfoData headerName="Work History" screenName="work_history" /> } />
                  <Route  path="projects" element={<CVInfoData headerName="Projects" screenName="projects" /> } />
                  <Route  path="skills" element={<CVInfoData headerName="Skills" screenName="skills" /> } />
                  <Route  path="template" element={<CVInfoData headerName="Template" screenName="template" /> } />
                  {/* <Route  path="ordering" element={<CVInfoData headerName="Template" screenName="template" /> } /> */}

                  <Route  path="ordering" element={<CVInfoData headerName="Re-Ordering" screenName="ordering" /> } />
                  <Route  path="ViewResume" element={<ViewResume/>} />
                  

                  {/* <Route  path="addSection" element={<CVInfoData headerName="Add Section" screenName="custome" /> } /> */}

              </Route>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.Fragment>
  )
}


let PR :React.FC<any> = (props)=>{

//  console.log(props.children)

    // let getAuthContext = useContext(AuthContext);
    let selector :any = useSelector((state:any)=>state.storeUsers);
    //&& document.cookie.split(";")[1].split("=")[1];  

    // console.log({getAuthContext})

  return <div>
    {
      selector?.userTokken ? props.children : <Navigate to='/login' replace />
    }
  </div>


}


// main App
let MainApp : React.FC = ()=>{
  return(
    <React.Fragment>
      <Layout>
        <Outlet />
      </Layout>
    </React.Fragment>
  )
}

let Dashboard = ()=>{
  return(
    <React.Fragment>
      dashboard
    </React.Fragment>
  )
}


// let LandingPage : React.FC = ()=>{
//   return(
//     <div>
//       <Link to="/resumebuilder/detailes">sun</Link>
//       <br />
//       <Link to="/createaccount">Create account</Link>
//     </div>
//   )
// }



// let Details : React.FC = ()=>{
//   return(
//     <div>
//       Details
//     </div>
//   )
// }


// let Education : React.FC = ()=>{
//   return(
//     <div>
//       Education
//     </div>
//   )
// }


const mapStateToProps = (state : any ) => ({
  // risedQueres : state.projectReducer.risedQueres_,
  // notesAndPartner: state.patientDocumentReducer.notesAndPartner,    
  sidebarData : state.sidebarStore
});


export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(App);

































