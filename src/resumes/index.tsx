
import { Box, Paper } from "@mui/material";
import { connect } from "react-redux";
import React from "react";
import { styles } from "../styles/styles";
import style from "../styles/resumeOne.module.css";

let Res : React.FC<any> = (props)=>{
    
    const {details} = props;

    return(
        <Box>
            <Paper sx={styles.detailes_resume_box}>
            <div>
                <div className="container-fluid mt-2">
                    <div className="d-flex flex-column align-items-start">
                        {/* name */}
                      <div className="fs-5 fw-normal">{details.name || details.tempName}</div>
                        {/* details */}
                        <div  className={`lh-sm ${style.detailes_font_size}`}>
                            <div>{details.designation || details.tempDesignation}</div>
                            <div>{details.phoneNumber || details.tempPhoneNumber}</div>
                            <div>{details.email || details.tempEmail}</div>
                            <div className="fst-italic fw-bolder text-body">{details.github || details.tempGithub} | {details.linkdin || details.tempLinkdin}</div>
                            {/* <div>{details.linkdin || details.tempLinkdin}</div> */}
                        </div>
                    </div>
                </div>
            </div>
            </Paper>
        </Box>
    )
}

const mapStateToProps = (state : any ) => ({
    details : state.detailesReducer
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


