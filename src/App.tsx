// Hey Hey
"use client"
import React, { useEffect } from "react";
import {BrowserRouter, Route, Routes , Outlet} from "react-router-dom";
import Layout from "./layout";
import CreateAndLoginAccount from "./screens/createAccount";
import Otp from "./screens/otp";
import AuthProvider from "./context/secureContext";
import { /*useSelector  ,*/ connect } from "react-redux";
import { storeOrResetTokken } from "./actions";
import Detailes from "./screens/detailes";
import CVInfoData from "./screens/cvInfoData";
import ViewResume from "./screens/viewResume";
import LandingPage from "./screens/landingPage"
import Dashboard from "./screens/dashboard";
import axios from "axios";
import {ProtectedRoutes_col , ProtectedRoutes_dashboard } from "./middlewares/authentication";
import ForgerPassword from "./screens/forgerPassword";
import ResetPassword from "./screens/resetPassword";
//import LandingPage2 from "./screens/landingPage2";

const App : React.FC<any>  = (props)=>{


  useEffect(()=>{
    if(localStorage.getItem("tokken")){
      checkAuthendation()
    }
     // alert(localStorage.getItem("tokken"));
    // alert("surya");
  },[])
  
  let checkAuthendation = async ()=>{

    // console.log(localStorage.getItem("tokken"))

    let tokken = localStorage.getItem("tokken")

    let config = {
      headers : { "Authorization" : tokken}
    }
    
    try{
      let result = await axios.post('/apis/checkValiedUserOrNot' , {} , config);
      // console.log({result});
      if(result.status == 200){
         props.dispatch(storeOrResetTokken(localStorage.getItem("tokken")))
      }
    }catch(e){
      localStorage.removeItem("tokken")
      props.dispatch(storeOrResetTokken(null));
    }
    
  }


  return (
    <React.Fragment>
      <AuthProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={ <ProtectedRoutes_col> <LandingPage /> </ProtectedRoutes_col> }></Route>
              <Route path="/createaccount" element={<ProtectedRoutes_col> <CreateAndLoginAccount headerName="Create Account" buttonName="Create" redirectionScreen="/login" forgetPasswordScreen="/forget_password" /></ProtectedRoutes_col> }></Route>
              <Route path="/login" element={<ProtectedRoutes_col> <CreateAndLoginAccount headerName="Login" buttonName="Login" redirectionScreen="/createaccount" forgetPasswordScreen="/forget_password" /> </ProtectedRoutes_col> }></Route>
              <Route path="/otp" element={ <ProtectedRoutes_col> <Otp headerName="OTP" buttonName="Submit" redirectionScreen="/login"  /> </ProtectedRoutes_col> } />
              <Route path="/forget_password" element={<ProtectedRoutes_col> <ForgerPassword headerName="Forget Password" buttonName="Submit" loginScreen="/login" createAccountAcreen="/createaccount" redirectionScreen={""} /> </ProtectedRoutes_col>} />
              <Route path="/reset-password/:tokken" element={<ProtectedRoutes_col> <ResetPassword headerName="Reset Password" buttonName="Submit" redirectionScreen={""} /> </ProtectedRoutes_col>}  />

              <Route path="/resumebuilder" element={<MainApp />}>
                  <Route index path="dashboard" element={ <ProtectedRoutes_dashboard> <Dashboard /> </ProtectedRoutes_dashboard> } />
                  <Route index path="detailes" element={ <Detailes headerName="Details" nextButton="summary" /> } />
                  <Route  path="summary" element={<Detailes headerName="Summary" nextButton="education" />} />
                  <Route  path="education" element={<CVInfoData headerName="Education" screenName="education" nextButton="workHistory" /> } />
                  <Route  path="workHistory" element={<CVInfoData headerName="Work History" screenName="work_history" nextButton="projects" /> } />
                  <Route  path="projects" element={<CVInfoData headerName="Projects" screenName="projects" nextButton="skills"  /> } />
                  <Route  path="skills" element={<CVInfoData headerName="Skills" screenName="skills" nextButton="ordering" /> } />
                  <Route  path="ordering" element={<CVInfoData headerName="Ordering" screenName="ordering" nextButton="template" /> } />
                  <Route  path="template" element={<CVInfoData headerName="Template" screenName="template" /> } />
                  {/* <Route  path="ordering" element={<CVInfoData headerName="Template" screenName="template" /> } /> */}

                  <Route  path="ViewResume" element={<ViewResume/>} />
                  

                  {/* <Route  path="addSection" element={<CVInfoData headerName="Add Section" screenName="custome" /> } /> */}

              </Route>
            </Routes>
        </BrowserRouter>
      </AuthProvider>
    </React.Fragment>
  )
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

const mapStateToProps = (state : any ) => ({
  sidebarData : state.sidebarStore
});


export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(App);

































