
import React from "react";
import { Link } from "react-router-dom";

let LandingPage : React.FC = ()=>{
    return(
      <div>
        <Link to="/resumebuilder/detailes">sun</Link>
        <br />
        <Link to="/createaccount">Create account</Link>
      </div>
    )
  }
export default LandingPage;