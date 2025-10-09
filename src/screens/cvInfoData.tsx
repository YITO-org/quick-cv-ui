// test new
import React from "react";
import { Button, Grid, Paper , Box, Typography, TextField, FormControl , MenuItem , InputLabel, Select /* InputLabel, FormControl */ } from "@mui/material";
import { styles } from "../styles/styles";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Res from "../resumes";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import ReactQuill from 'react-quill';
import { BiSolidDownload } from "react-icons/bi";
import { addNewRecord, setLoader } from "../actions";
import { resumeInfoConvertJsonToString, typeOfOfObjects } from "../utils";
import { setInformation } from "../actions";
import Ordering from "./ordering";
import { holdCustomeAccordianNumber, updateResume } from "../actions/resumeActions";
import 'react-quill/dist/quill.snow.css';
import CustomeAccordion from "../components/Accordion";
import ResumeHeader from "../components/resumeHeader/ResumeHeader";


const modules : any = {
	toolbar: [
		// [{ header: '1' }, { header: '2' }, { font: [] }],
		// [{ size: [] }],
		['bold', 'italic', 'underline'],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			// { indent: '-1' },
			// { indent: '+1' }
		],
		['link'/*, 'image', 'video'*/],
		// ['clean']
	],
}

let CVInfoData : React.FC<any> = (props)=>{

    let { cv , screenName , nextButton  } = props;
    let nav = useNavigate();

    React.useEffect(()=>{
      setExpanded(props.holdCustomeAccordianNumber)
    }, [props.holdCustomeAccordianNumber])

    let [expanded, setExpanded] = React.useState<boolean | null | undefined | number>(props.holdCustomeAccordianNumber);

  let holdCustomeAccordinanIndex = (index : number | boolean)=>{
    props.dispatch(holdCustomeAccordianNumber(index))
  }


    let add = ()=>{

        let addRecord = {...typeOfOfObjects[screenName]};
        let name = [...cv[screenName]];
        name.push(addRecord);
        props.dispatch(addNewRecord(name , screenName , 'ADD_REMOVE_RECORD'));
        setExpanded(name.length - 1);
    }

    let remove = (index : number)=>{
        let name = [...cv[screenName]];
        if(index > 0){
            name.splice(/*name.length - */ index , 1)
        }else{
            name.splice(0,1)
        }
        props.dispatch(addNewRecord(name , screenName , 'ADD_REMOVE_RECORD'));
        setExpanded(name.length - 1);
    }

    let change = (e : any , index : number)=>{
        let data = [...props.cv[screenName]];
        data[index][e.target.name] = e.target.value;
        props.dispatch(addNewRecord(data , screenName , 'ADD_REMOVE_RECORD'));
    }

    let htmlTextChange = (e : any , name : any , index : number)=>{
        let data = [...props.cv[screenName]];
        data[index][name] = e == "<p><br></p>" ? '' : e;
        props.dispatch(addNewRecord(data , screenName , 'ADD_REMOVE_RECORD'));
    }

    // console.log({ cv });


    let selectTempleate = (e : any):void=>{
        props.dispatch(setInformation(e.target.name , e.target.value))
    }

  let selectTempleate2 = (name :string , template : string): void => {
    props.dispatch(setInformation(name , template))
  }

    // let viewResume = ()=>{
    //     nav("/resumebuilder/ViewResume")
    // }

    let saveAndDownload = ()=>{
        let {cv} = props;

       props.dispatch(setLoader()); 
       if(cv.resumeId){
           props.dispatch(updateResume(resumeInfoConvertJsonToString(cv)))
        }
        cv.downloadFunction();
    
    }

    let accordionOpenClose = (index:boolean | number | null | undefined) : void=>{
      setExpanded(index)
    }


    return(
        <React.Fragment>
              
        <ResumeHeader saveAndDownload={saveAndDownload} 
                      cv={cv} 
                      selectedTemplate={selectTempleate2}
                      />

            <Grid container  columnGap={1} >
             <Grid xs={12} sm={12} md={12}  lg={5} xl={5}>
              <Paper sx={styles.detailes_box}>
                    <Typography sx={{mt : 1 , mb:1 }} textAlign='center' variant='h6' fontWeight='500' >{props.headerName}</Typography>
                        {
                            props.headerName != "Template" && props.headerName != "Ordering" &&
                            <Button variant='contained' size='small' color='success' onClick={add} startIcon={<MdAddCircle />} sx={{ ml : 1 , mb : 0.5 }} >Add</Button>   
                        }
                    
                        <Box sx={{m:0.9}}>
                        { screenName == "education" &&  cv?.education?.map((e : any  , index : number)=>{
                            return(
                              <CustomeAccordion index={index} expanded={expanded} remove={remove} accordionOpenClose={accordionOpenClose} accordionHeaderName={"Education"} holdCustomeAccordinanIndex={holdCustomeAccordinanIndex} >
                                  <Box sx={{border : 2 , borderRadius : 2 , p : 0.8  , borderColor : 'lightgray' , mb : 1.2 }}  key={index}>
                                                  <TextField size='small' fullWidth placeholder="School/University" name="School/University" value={e["School/University"]} onChange={(e)=>{ change(e , index ) }} />
                                                  <div className="row g-1 mt-1">                                                 
                                                      <div className="col"><TextField size='small' sx={{fontSize : "10px"}} fullWidth name="startDate" value={e["startDate"]} placeholder="Start Date" onChange={(e)=>{ change(e , index ) }} /></div>
                                                      <div className="col"><TextField size='small' fullWidth placeholder="End Date" name="endDate" value={e["endDate"]} onChange={(e)=>{ change(e , index ) }} /></div>
                                                      <div className="col"><TextField size='small' fullWidth placeholder="CGPA" name="CGP" value={e["CGP"]} onChange={(e)=>{ change(e , index ) }} /></div>
                                                  </div>

                                                  <TextField size='small' fullWidth placeholder="Course" name="course" value={e["course"]} sx={{mt : 0.5}} onChange={(e)=>{ change(e , index ) }} />

                                                  <TextField size='small' fullWidth placeholder="Location" sx={{mt : 0.5}} name="location" value={e["location"]} onChange={(e)=>{ change(e , index ) }} />

                                                  <Box sx={{p : 0 , mt :0.5 , mb : 0.5}}>
                                                      <textarea name="description" rows={3} className="form-control" placeholder="Description" id="exampleFormControlTextarea1" value={e["description"]} onChange={(e)=>{ change(e , index ) }} />
                                                  </Box>

                                                  {/* <div className='row m-2'> 
                                                      <Button variant='contained' size='small' onClick={()=>{remove(index)}} color='error' startIcon={<RiDeleteBin5Line />}>Remove</Button>
                                                  </div> */}
                                          </Box>
                                </CustomeAccordion>
                                )
                            })
                        }

                        { screenName == "work_history" &&  cv?.work_history?.map((e : any  , index : number)=>{
                            return(
                              // <Accordion expanded={expanded === index} key={index}
                              //   sx={{
                              //     backgroundColor: "#f5f5f5",border: "1px solid #ccc",boxShadow: "none",
                              //     "&:before": { display: "none" }, // Removes the default shadow line
                              //     "&.Mui-expanded": { margin: "0px" }, // Removes extra spacing when expanded
                              //   }}
                              // >

                              //   <AccordionSummary
                              //     expandIcon={<FaArrowDown color='black' fontSize={15} />} aria-controls="panel1bh-content" id="panel1bh-header"
                              //   >
                              //     <Typography component="span" sx={{ width: '93%', flexShrink: 0 }} fontWeight={500} onClick={() =>
                              //     { expanded === index ? accordionOpenClose(false) : accordionOpenClose(index) }} 
                              //     >
                              //       {"Work History" + " " + (Number(index) + 1)}
                              //     </Typography>
                              //     <IconButton onClick={() => { remove(index) }} > 
                              //       <FaTrash color='red' fontSize={15} />
                              //     </IconButton>
                              //   </AccordionSummary>


                              //   <AccordionDetails sx={{backgroundColor: 'white',/* p: -20 */ }}>
                                 
                              <CustomeAccordion index={index} expanded={expanded} remove={remove} accordionOpenClose={accordionOpenClose} accordionHeaderName={"Work History"} holdCustomeAccordinanIndex={holdCustomeAccordinanIndex} >
                                 <Box sx={{border : 2 , borderRadius : 2 , p : 0.5  , borderColor : 'lightgray'  }} >
                                            <TextField size='small' fullWidth placeholder="Employer" name="employer" value={e["employer"]}  onChange={(e)=>{ change(e , index ) }} />
                                            <div className="row g-1 mt-1">
                                                <div className="col"><TextField size='small' sx={{fontSize : "10px"}} fullWidth value={e["startDate"]} name="startDate" placeholder="Start Date"  onChange={(e)=>{ change(e , index ) }}/></div>
                                                <div className="col"><TextField size='small' fullWidth placeholder="End Date" value={e["endDate"]} name="endDate" onChange={(e)=>{ change(e , index ) }} /></div>
                                            </div>

                                            <TextField size='small' fullWidth name="role" value={e["role"]} placeholder="Role" sx={{mt : 0.5}} onChange={(e)=>{ change(e , index ) }} />

                                            <TextField size='small' fullWidth name="location" value={e["location"]} placeholder="Location" sx={{mt : 0.5}} onChange={(e)=>{ change(e , index ) }} />

                                            <Box sx={{p : 0 , mt :0.5 , mb : 6}}>

                                            <ReactQuill
                                            theme="snow"
                                            // value={convertedText}
                                            value={e["description"]}
                                            // onChange={setText}
                                            onChange={(e:any)=>{htmlTextChange(e , 'description' , index)}}
                                            placeholder="Write About Youself..."
                                            modules={modules}
                                            style={{ height : '10rem' , minHeight: '10rem' }}
                                            />
                                            </Box>
                                        </Box>
                                        </CustomeAccordion>

                                // </AccordionDetails>

                                //       </Accordion>
                                )
                            })
                        }

                        { screenName == "projects" &&  cv?.projects?.map((e : any  , index : number)=>{
                            return(
                              <CustomeAccordion index={index} expanded={expanded} remove={remove} accordionOpenClose={accordionOpenClose} accordionHeaderName={"Project"} holdCustomeAccordinanIndex={holdCustomeAccordinanIndex}>
                                  <Box sx={{border : 2 , borderRadius : 2 , borderColor : 'lightgray' , p : 0.5  }}  key={index}>
                                                  <TextField size='small' fullWidth placeholder="Project Name" value={e["projectName"]} name="projectName" onChange={(e)=>{ change(e , index ) }} />

                                                  <TextField size='small' fullWidth name="role" placeholder="Role" sx={{mt : 0.5}} value={e['role']} onChange={(e)=>{ change(e , index ) }} />

                                                  <Box sx={{p : 0 , mt :0.5 , mb : 6}}>

                                                  <ReactQuill
                                                      theme="snow"
                                                      // value={convertedText}
                                                      value={e["description"]}
                                                      // onChange={setText}
                                                      onChange={(e:any)=>{htmlTextChange(e , 'description' , index)}}
                                                      placeholder="Write About Project..."
                                                      modules={modules}
                                                      style={{ height : '10rem' , minHeight: '10rem' }} />
                                                  </Box>


                                          </Box>
                                </ CustomeAccordion>
                                )
                            })
                        }

                        { screenName == "skills" &&  cv?.skills?.map((e : any  , index : number)=>{
                              return(<Box sx={{border : 2 , borderRadius : 2 , p : 0.8  , borderColor : 'lightgray' , mb : 1.2 }}  key={index}>
                                            <TextField size='small' fullWidth placeholder="Skill Title" value={e["name"]} name="name" onChange={(e)=>{ change(e , index ) }} />

                                            <Box sx={{p : 0 , mt :0.5 , mb : 0.5}}>
                                                <textarea name="skill set" rows={3} className="form-control" placeholder="Skill Set" value={e['skill set']} id="exampleFormControlTextarea1" onChange={(e)=>{ change(e , index ) }} />
                                            </Box>

                                            <div className='row m-2'> 
                                                <Button variant='contained' size='small' onClick={()=>{remove(index)}} color='error' startIcon={<RiDeleteBin5Line />}>Remove</Button>
                                            </div>


                                    </Box>
                                )
                            })
                        }


                        {
                            screenName == "template" &&
                            <Box>
                                    <FormControl fullWidth>
                                        <InputLabel>Resume Template</InputLabel>
                                        <Select name="selectedTemplate" label="Resume Template" value={cv.selectedTemplate} onChange={(e)=>{ selectTempleate(e) /* console.log(e.target.value) */ }} >
                                            {
                                                cv?.templates?.map((e:string,index:number)=>(<MenuItem key={index} value={e}>{e}</MenuItem>))
                                            }
                                        </Select>
                                        <Button variant='contained' sx={{mt : '5%'}} color='primary' startIcon={<BiSolidDownload />} onClick={saveAndDownload}>Download </Button>
                                    </FormControl>
                            </Box>
                        }

                        {
                            screenName == "ordering" &&
                            <Ordering />
                        }

                        {
                                            //  next button
                                            nextButton &&
                                            <Box sx={{ textAlign : 'center' , marginBottom : 1 , marginTop : 1  }} >
                                                <Button sx={{width : '95%' }} variant="contained" color="secondary" startIcon={ <IoIosArrowDroprightCircle /> } onClick={()=>{ props.dispatch(holdCustomeAccordianNumber(0)) ;nav("/resumebuilder/" + nextButton)}} > 
                                                  <Typography fontWeight='bold' variant="body1" >Next</Typography>
                                                </Button>
                                            </Box>
                         }

                    </Box>
              </Paper>
             </Grid> 
 
             <Grid /* xs={12} sm={12} md={12} */ lg={6.9} xl={6.9} sx={{display : {sm : 'none' , xs : 'none' , md : 'none' , lg: 'block' , xl: 'block'}}}>
                        <Res />
             </Grid>
           </Grid>
        </ React.Fragment>
    )
}



let stateToProps = (state:any) => ({
  cv : state.cvReducer,
  holdCustomeAccordianNumber: state.cvReducer.holdCustomeAccordianNumber
})

export default connect( stateToProps , (dispatch:any)=>({dispatch}))(CVInfoData);