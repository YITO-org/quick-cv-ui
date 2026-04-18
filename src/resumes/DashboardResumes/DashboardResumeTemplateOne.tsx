import { Box, Paper } from "@mui/material"
import {grey  } from "@mui/material/colors"
import React from "react"
// import { styles } from "../../styles/styles"

let Gray2 = grey[400]

const DashboardResumeTemplateOne : React.FC<any> = (props)=>{
    return(
        <React.Fragment>
            <ResumeOne resumeInfo={props.resumeInfo} />
        </React.Fragment>
    )
}

let ResumeOne : React.FC<any> = (props)=>{

    let {resumeInfo} = props;

    return(
        <Box>
            <Paper sx={{ backgroundColor: 'white', border: 0.5, borderColor: Gray2 , height: '40vh', overflow: 'scroll', scrollbarWidth: 'none' }}>
            <div id="template">

                {/* details */}
                <div className="container-fluid p-3">
                    <div className="d-flex flex-column align-items-start">
                        {/* name */}
                      <div className="fw-normal" style={{fontSize : 13}}>{resumeInfo.name || resumeInfo.tempName}</div>
                        {/* cv */}
                        <div  className={`lh-sm detailes_font_size`}>
                            <div>{resumeInfo.designation || resumeInfo.tempDesignation}</div>
                            <div>{resumeInfo.phoneNumber || resumeInfo.tempPhoneNumber}</div>
                            <div>{resumeInfo.email || resumeInfo.tempEmail}</div>
                            <div> DOB : {resumeInfo.DOB || resumeInfo.tempDob}</div>

                            <div className="d-flex gap-1">
                                
                                {
                                    resumeInfo && resumeInfo.linkedin &&
                                    <a href={resumeInfo.linkedin} target="_blank">Linkedin</a>
                                }

                                {
                                    resumeInfo && resumeInfo.linkedin && resumeInfo.github &&
                                    "|"
                                }
                                {
                                    resumeInfo && resumeInfo.github &&
                                    <a href={resumeInfo.github} target="_blank">Github</a>
                                }
                            </div>
                        </div>

                    </div>

                    <div className='mt-2'>
                        <MainCV resumeInfo={resumeInfo} />
                    </div>



                </div>


            </div>
            </Paper>
        </Box>
    )
}

let Summary : React.FC<any> = (props)=>{

    if(!props.resumeInfo[props.name]){
        return;
    }

    return(<>
            <Heading heading={props.name} />
            <div style={{fontSize : "12px"}} className="react-text-editer mt-3"  dangerouslySetInnerHTML={{ __html : props.resumeInfo[props.name]  }} ></div>
            </>);
}

// let Education : React.FC<any> = (props)=>{

//     // let { name } = props;


//     if(props.resumeInfo.education.length == 0){
//         return;
//     }
//     if(!props?.education[0]["School/University"]){
//         return;
//     }

//     return(
//         <React.Fragment>
//             <Heading heading={props.name} />
//             {
//                 props?.education?.map((e : any , index : number )=>{

//                     if(!e["School/University"]){
//                         return;
//                     }

//                     return(
//                         <div className="mb-1 px-1" key={index}>
//                             <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
//                                 <div className="d-flex gap-2"> <div className="fw-bold">{e["School/University"]}</div> <div>{ e['location'] ? e['location'] : ''}</div> </div>
//                                 <div style={{fontSize : "13.5px"}}>{ e.startDate && e.endDate && e.startDate + ' - ' + e.endDate}</div>
//                             </div>
//                             <div style={{fontSize : "12.6px"}}>{e.course ? "Course : " + e.course + '.' : ''}</div>
//                             <div style={{fontSize : "12.6px"}}>{e.CGP ? "CGP : " + e.CGP + '.' : ''}</div>
//                             <div style={{fontSize : "11.2px"}}>{e.description ? e.description + '.' : ''}</div>
//                         </div>
//                     )
//                 })
//             }
//         </React.Fragment>
//     )
// }

// let Projects : React.FC<any> = (props)=>{
//     // let { name } = props;

//     useEffect(()=>{

//     },[props])


//     if(props.projects.length == 0){
//         return;
//     }
//     if(!props?.projects[0]["projectName"]){
//         return;
//     }

//     return(
//         <React.Fragment>
//             <Heading heading={props.name} />
//             {
//                 props?.projects?.map((e : any , index : number )=>{

//                     if(!e["projectName"]){
//                         return;
//                     }

//                     return(
//                         <div className="mb-1 px-1" key={index}>
//                             <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
//                                 <div className="d-flex gap-2"> <div className="fw-bold">{e["projectName"]}</div></div>
//                             </div>
//                             <div style={{fontSize : "12.6px"}}>{e.role ? "Role : " + e.role + '.' : ''}</div>
//                             <div>
//                               {
//                                 e.description &&
//                                 <>
//                                     {/* <div style={{fontSize : "12.6px"}} className="fw-bold"> description: </div> */}
//                                     {/* <div style={{fontSize : "12px"}}>{ e.description }</div> */}
//                                     <div style={{fontSize : "12px"}} className="react-text-editer mx-1"  dangerouslySetInnerHTML={{ __html : e.description  }} ></div>
//                                 </>
//                               }
                            
//                             </div>
//                         </div>
//                     )
//                 })
//             }
//         </React.Fragment>
//     )
// }


// let Skills : React.FC<any> = (props)=>{

//     // let { name } = props;
    
//     useEffect(()=>{

//     },[])

//     if(props.skills.length == 0){
//         return;
//     }
//     if(!props?.skills[0]["name"]){
//         return;
//     }


//     return(
//         <React.Fragment>
//             <Heading heading={props.name} />
//             {
//                 props?.skills?.map((e : any , index : number )=>{

//                     // console.log(e);

//                     if(!e["name"]){
//                         return;
//                     }

//                     return(
//                         <div className="mb-1 px-1" key={index} >
//                             <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
//                                 {/* <div className="d-flex gap-2"> */}
//                                      <div className="fw-bold">{e["name"]}</div> 
//                                 {/* </div> */}
//                             </div>
//                             <div style={{fontSize : "12.6px"}}>{e["skill set"] ? e["skill set"]  : ''}</div>
//                         </div>
//                     )
//                 })
//             }
//         </React.Fragment>
//     )


// }


// let WorkHistory : React.FC<any> = (props)=>{
    
//     // let { name } = props;


//     if(props.work_history.length == 0){
//         return;
//     }
//     if(!props?.work_history[0]["employer"]){
//         return;
//     }

//     return(
//         <React.Fragment>
//             <Heading heading={props.name} />
//             {
//                 props?.work_history?.map((e : any , index : number )=>{

//                     // console.log(e);

//                     if(!e["employer"]){
//                         return;
//                     }

//                     return(
//                         <div className="mb-1 px-1" key={index} >
//                             <div className="d-flex justify-content-between" style={{fontSize : "13.5px"}} >
//                                 <div className="d-flex gap-2"> <div className="fw-bold">{e["employer"]}</div> <div>{ e['location'] ? e['location'] : ''}</div> </div>
//                                 <div style={{fontSize : "13.5px"}}>{ e.startDate && e.endDate && e.startDate + ' - ' + e.endDate}</div>
//                             </div>
//                             <div style={{fontSize : "12.6px"}}>{e.role ? "Role : " + e.role + '.' : ''}</div>
//                             {/* <div style={{fontSize : "11.2px"}}>{e.description ? e.description + '.' : ''}</div> */}

//                             {/* <div style={{fontSize : "12px"}}>{ e.description }</div> */}

//                             <div style={{fontSize : "12px"}} className="react-text-editer mt-2"  dangerouslySetInnerHTML={{ __html : e.description  }} ></div>
//                         </div>
//                     )
//                 })
//             }
//         </React.Fragment>
//     )
// }

let Heading : React.FC<any> = (props)=>{

    let { heading } = props;

    // console.log({ heading })

return(
    <div className={`fw-bold mt-3 heading_first_letter heading_font`}>
        { heading }
        <div className={`w-100 heading_line`}></div>
    </div>
 )
}

let MainCV : React.FC<any> = (props)=>{

    // console.log(props);
    
    let compounds : any = {
        "summary" : <Summary resumeInfo={props.resumeInfo} name="summary" />,
        // "education" : <Education resumeInfo={props.resumeInfo} name="education" />,
        // "work_history" : <WorkHistory {...props} name="work History" />,
        // "projects" : <Projects {...props} name="projects" />,
        // "skills" : <Skills {...props} name="skills" />
    }

    return(
        <div>
            {
                JSON.parse(props.resumeInfo.resumeArrangment).map((e : string , index:number)=>{
                    return (<div key={index}>
                              {compounds[e]}
                           </div>)
                })

            }

        {/* {custome } */}
            {
               props?.custome?.map((e: any,index:number)=>
                    <div key={index} >
                        <Heading heading={e.sectionName} />
                        <div style={{ fontSize: "12px" }} className="react-text-editer mt-3" dangerouslySetInnerHTML={{ __html: e.sectionInformation }} ></div>
                    </div>
              )
            }

        </div>
    )
}

export default DashboardResumeTemplateOne