
import { Box, Paper } from "@mui/material";
import { connect } from "react-redux";
import React from "react";
import { styles } from "../styles/styles";
import style from "../styles/resumeOne.module.css";

let Res : React.FC<any> = (props)=>{
    
    const {cv} = props;

    return(
        <Box>
            <Paper sx={styles.detailes_resume_box}>
            <div>

                {/* details */}
                <div className="container-fluid mt-2">
                    <div className="d-flex flex-column align-items-start">
                        {/* name */}
                      <div className="fs-5 fw-normal">{cv.name || cv.tempName}</div>
                        {/* cv */}
                        <div  className={`lh-sm ${style.detailes_font_size}`}>
                            <div>{cv.designation || cv.tempDesignation}</div>
                            <div>{cv.phoneNumber || cv.tempPhoneNumber}</div>
                            <div>{cv.email || cv.tempEmail}</div>
                            <div> DOB : {cv.dob || cv.tempDob}</div>
                            <div className="fst-italic fw-bolder text-body">{cv.github || cv.tempGithub} | {cv.linkdin || cv.tempLinkdin}</div>
                            {/* <div>{cv.linkdin || cv.tempLinkdin}</div> */}
                        </div>

                    </div>

                    <div className='mt-2'>
                        <MainCV {...props.cv}/>
                    </div>
                </div>


            </div>
            </Paper>
        </Box>
    )
}

let MainCV : React.FC<any> = (props)=>{

    //console.log(props);

    return(
        <div>
            {
                props.resumeArrangment.map((e : string , index:number)=>{
                    return (<div key={index}>
                            <Heading heading={e} />
                              <div className="p-1" >
                                    <GenerateContent content={props[e]}  />
                              </div>
                           </div>)
                })

            }

        </div>
    )
}

let Heading : React.FC<any> = (props)=>{

        let { heading } = props;

    return(
        <div className={`fw-bold py-2 ${style.heading_first_letter} ${style.heading_font} `}>
            { heading }
            <div className={`w-100 bg-dark ${style.heading_line}`}></div>
        </div>
    )
}


let GenerateContent : React.FC<any> = (props)=>{

    let { content } = props;
//    console.log({content})

    let flag : boolean = content && Array.isArray(content) &&  content.length && content.length > 0 ? true : false;

    return(
        <div>
            {
                flag == true ?
                <GenerateContentArrayContent content={content} /> : content
                    
            }
            {/* { content } */}
        </div>
    )
}


let GenerateContentArrayContent : React.FC<any> = (props) => {
    
    // console.log(props);

    return(
        <div>
            done
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


