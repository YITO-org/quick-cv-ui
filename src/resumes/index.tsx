
import { connect } from "react-redux";
import React, { useEffect } from "react";
// import { styles } from "../styles/styles";
// import style from "../styles/resumeOne.module.css";
import ResumeOne from "./resumeOne";


// @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
let Res : React.FC<any> = ( /* props */ )=>{
    
    // const {cv} = props;

    return(
        <div>
            <ResumeOne />
        </div>
    )
}

const mapStateToProps = (state : any ) => ({
    cv : state.cvReducer
});
  
export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(Res);


//   name : null,
//   tempName : 'krishna',
//   designation : null,
//   tempDesignation : 'Software Engineers',
//   dob : '',
//   tempDob : '09-Jan-1998',
//   phoneNumber : null,
//   tempPhoneNumber : 12345678910,
//   email : null,
//   tempEmail : 'krishna@email.com',
//   github : null,
//   tempGithub : 'krishna@github.com',
//   linkdin : null,
//   tempLinkdin : 'krishna@linkdin.com',
//   summary : null


