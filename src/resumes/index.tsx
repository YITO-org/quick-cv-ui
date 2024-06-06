
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

let Summary : React.FC<any> = (props)=>{

    if(!props[props.name]){
        return;
    }

    return(<>
            <Heading heading={props.name} />
            <div className="p-1">
                {props[props.name]}
            </div>
            </>);
}

let Education : React.FC<any> = (props)=>{

    let { name } = props;

    React.useEffect(()=>{
         console.log(props)
    },[props])


    if(!props?.education[0]["School/University"]){
        return;
    }

    return(
        <React.Fragment>
            <Heading heading={props.name} />
            {
                props?.education?.map((e : any , index : number )=>{

                    console.log(e);

                    if(!e["School/University"]){
                        return;
                    }

                    return(
                        <div className="mb-1 px-1" >
                            <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
                                <div className="d-flex gap-2"> <div className="fw-bold">{e["School/University"]}</div> <div>{ e['location'] ? e['location'] : ''}</div> </div>
                                <div style={{fontSize : "13.5px"}}>{ e.startData && e.endDate && e.startData + ' - ' + e.endDate}</div>
                            </div>
                            <div style={{fontSize : "12.6px"}}>{e.course ? "Course : " + e.course + '.' : ''}</div>
                            <div style={{fontSize : "12.6px"}}>{e.CGP ? "CGP : " + e.CGP + '.' : ''}</div>
                            <div style={{fontSize : "11.2px"}}>{e.description ? e.description + '.' : ''}</div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}




let Heading : React.FC<any> = (props)=>{

    let { heading } = props;

return(
    <div className={`fw-bold mt-3 ${style.heading_first_letter} ${style.heading_font}`}>
        { heading }
        <div className={`w-100 ${style.heading_line}`}></div>
    </div>
 )
}

let MainCV : React.FC<any> = (props)=>{
    
    let compounds : any = {
        "summary" : <Summary {...props} name="summary" />,
        "education" : <Education {...props} name="education" />
    }

    return(
        <div>
            {
                props.resumeArrangment.map((e : string , index:number)=>{
                    return (<div key={index}>
                              {compounds[e]}
                           </div>)
                })

            }

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


