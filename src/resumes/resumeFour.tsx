import { Box, Paper } from "@mui/material";
import { connect } from "react-redux";
import React, { useEffect } from "react";
// import FileDownload from "js-file-download";
import { styles } from "../styles/styles";
import "../styles/resumeOne.css";
import { clearLoader, getPdf } from "../actions";

let ResumeFour: React.FC<any> = (props)=>{
    const {cv}=props;
      useEffect(()=>{
            props.dispatch({
                type : 'DOWNLOAD_FUNCTION',
                method : DownloadPdf
    
            })
        },[])
    
        function removeSpecialChar(data:any){
    
            let d = String(data);
    
            let newData = "";
    
            for(let i of d){
                if(i == '"'){
                    i = "'"
                }
                newData = newData + i;
            }
            
            let htmlData = {
                "htmlData" :  newData,
                "template" : cv.selectedTemplate || cv.defaultTemplate
            }
    
            props.dispatch(getPdf(htmlData , resposseCallBack));
    
        }    
    
        async function resposseCallBack(response:any){
            const url = window.URL.createObjectURL(new Blob([response.data]));
            const link = document.createElement('a');
            link.href = url;
            // console.log({link : link.href });
            link.setAttribute('download', 'Resume.pdf');
            document.body.appendChild(link);
            link.click();
            link.remove();
            props.dispatch(clearLoader())
    
        }
    
    
        function DownloadPdf(){
            let data : any = document.querySelector("#template")?.innerHTML;
            removeSpecialChar(data);
        }
    
    return (
     <Box>
               <Paper sx={styles.detailes_resume_box}>
               <div id="template">
   
                   {/* details */}
                   <div className="container-fluid p-3">
                       <div className="d-flex flex-column align-items-center">
                           {/* name */}
                            <div className="fs-2 fw-medium">{cv.name || cv.tempName}</div>
                           {/* cv */}
                           <div  className={`lh-sm text-center detailes_font_size`}>
                               <div>{cv.designation || cv.tempDesignation}</div>


                                <div className="d-flex gap-2" >
                                  <div>{cv.phoneNumber || cv.tempPhoneNumber}</div>   <div className="fw-medium" >|</div>
                                  <div>{cv.email || cv.tempEmail}</div>               <div className="fw-bold" >|</div>
                                  <div> DOB : {cv.DOB || cv.tempDob}</div>            
                      </div>

                               
                               {/* <div className="fst-italic fw-bolder text-body">
                                   {( cv && cv.github)} {(cv.github && cv.linkedin && "|")} {(cv && cv.linkedin)}
                                   </div> */}
                               {/* <div>{cv.linkedin || cv.templinkedin}</div> */}
                               
                               <div className="">
                                   {
                                       cv && cv.linkedin &&
                                       <a href={cv.linkedin} target="_blank" className="m-2">Linkedin</a>
                                   }
   
                                   {
                                       cv && cv.linkedin && cv.github &&
                                       "|"
                                   }
                                   {
                                       cv && cv.github &&
                                       <a href={cv.github} target="_blank" className="m-2">Github</a>
                                   }
                               </div>
   
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
            {/* <div className={`p-1 fw-normal summary_styles`} style={{fontSize : '13px'}}>
                {props[props.name]}
            </div> */}
            <div style={{fontSize : "12px"}} className=" mt-3" dangerouslySetInnerHTML={{ __html : props[props.name]  }} ></div>
            </>);
}

let Education : React.FC<any> = (props)=>{

    // let { name } = props;


    if(props.education.length == 0){
        return;
    }
    if(!props?.education[0]["School/University"]){
        return;
    }

    return(
        <React.Fragment>
            <Heading heading={props.name} />
            {
                props?.education?.map((e : any , index : number )=>{



                    if(!e["School/University"]){
                        return;
                    }

                    return(
                        <div className="mb-1 px-1" key={index} >
                            <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
                                <div className="d-flex gap-2"> <div className="fw-bold">{e["School/University"]}</div> <div>{ e['location'] ? e['location'] : ''}</div> </div>
                                <div style={{fontSize : "13.5px"}}>{ e.startDate && e.endDate && e.startDate + ' - ' + e.endDate}</div>
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

let Projects : React.FC<any> = (props)=>{
    // let { name } = props;

    useEffect(()=>{
        
    },[props])


    if(props.projects.length == 0){
        return;
    }
    if(!props?.projects[0]["projectName"]){
        return;
    }

    return(
        <React.Fragment>
            <Heading heading={props.name} />
            {
                props?.projects?.map((e : any , index : number )=>{


                    if(!e["projectName"]){
                        return;
                    }

                    return(
                        <div className="mb-1 px-1" key={index} >
                            <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
                                <div className="d-flex gap-2"> <div className="fw-bold">{e["projectName"]}</div></div>
                            </div>
                            <div style={{fontSize : "12.6px"}}>{e.role ? "Role : " + e.role + '.' : ''}</div>
                            <div>
                              {
                                e.description &&
                                <>
                                    {/* <div style={{fontSize : "12.6px"}} className="fw-bold"> Role And Responsibilities: </div> */}
                                    {/* <div style={{fontSize : "12px"}}>{ e.description }</div> */}
                                    <div style={{fontSize : "12px"}} className="react-text-editer mx-1"  dangerouslySetInnerHTML={{ __html : e.description  }} ></div>
                                </>
                              }
                            
                            </div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )
}


let Skills : React.FC<any> = (props)=>{

    // let { name } = props;
    
    useEffect(()=>{
        console.log(props.skills)
    },[])

    if(props.skills.length == 0){
        return;
    }
    if(!props?.skills[0]["name"]){
        return;
    }


    return(
        <React.Fragment>
            <Heading heading={props.name} />
            {
                props?.skills?.map((e : any , index : number )=>{

                    // console.log(e);

                    if(!e["name"]){
                        return;
                    }

                    return(
                        <div className="mb-1 px-1" key={index} >
                            <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
                                {/* <div className="d-flex gap-2"> */}
                                     <div className="fw-bold">{e["name"]}</div> 
                                {/* </div> */}
                            </div>
                            <div style={{fontSize : "12.6px"}}>{e["skill set"] ? e["skill set"]  : ''}</div>
                        </div>
                    )
                })
            }
        </React.Fragment>
    )


}


let WorkHistory : React.FC<any> = (props)=>{
    
    // let { name } = props;


    if(props.work_history.length == 0){
        return;
    }
    if(!props?.work_history[0]["employer"]){
        return;
    }

    return(
        <React.Fragment>
            <Heading heading={props.name} />
            {
                props?.work_history?.map((e : any , index : number )=>{

                    // console.log(e);

                    if(!e["employer"]){
                        return;
                    }

                    return(
                        <div className="mb-1 px-1" key={index} >
                            <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
                                <div className="d-flex gap-2"> <div className="fw-bold">{e["employer"]}</div> <div>{ e['location'] ? e['location'] : ''}</div> </div>
                                <div style={{fontSize : "13.5px"}}>{ e.startDate && e.endDate && e.startDate + ' - ' + e.endDate}</div>
                            </div>
                            <div style={{fontSize : "12.6px"}}>{e.role ? "Role : " + e.role + '.' : ''}</div>
                            {/* <div style={{fontSize : "11.2px"}}>{e.description ? e.description + '.' : ''}</div> */}

                            <div style={{fontSize : "12px"}} className="react-text-editer mt-2"  dangerouslySetInnerHTML={{ __html : e.description  }} ></div>
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
        <div className="d-flex align-items-center">
        <div className="me-1 heading_first_letter heading_font fw-medium fs-5">{ heading }</div>
        <hr className="flex-fill mt-4"
            style={{
              "height":"3px",
              "borderWidth":0,
              "color":"black",
              "backgroundColor":"black"
            }}
            // style={{height:"2px",color:"black"}} 
            />
        </div>
     )
}

let MainCV : React.FC<any> = (props)=>{
    
    let compounds : any = {
        "summary" : <Summary {...props} name="summary" />,
        "education" : <Education {...props} name="education" />,
        "work_history" : <WorkHistory {...props} name="work History" />,
        "projects" : <Projects {...props} name="projects" />,
        "skills" : <Skills {...props} name="skills" />
    }

    return(
        <div>
            {
                props.resumeArrangment.map((e : string , index:number)=>{
                    return (
                    <div key={index}>
                              {compounds[e]}
                    </div>
                    )
                })

            }

        </div>
    )
}


const mapStateToProps = (state : any ) => ({
    cv : state.cvReducer
  });
  
export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(ResumeFour);