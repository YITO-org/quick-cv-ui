"use client"
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
import Dashboard from "./screens/dashboard";
import LandingPage2 from "./screens/landingPage2";

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
              <Route path="/" element={
              // <LandingPage />
                <LandingPage2 />
            }></Route>
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
    
  let selector :any = localStorage.getItem("tokken"); 
  //useSelector((state:any)=>state.storeUsers);
    
  console.log({selector});
  return <div>
    {
      selector ? props.children : <Navigate to='/login' replace />
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

const mapStateToProps = (state : any ) => ({
  // risedQueres : state.projectReducer.risedQueres_,
  // notesAndPartner: state.patientDocumentReducer.notesAndPartner,    
  sidebarData : state.sidebarStore
});


export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(App);

































