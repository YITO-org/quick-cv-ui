// test new
import React from "react";
import { Button, Grid, Paper , Box, Typography, TextField, FormControl , MenuItem , InputLabel, Select, /* InputLabel, FormControl */ } from "@mui/material";
import { styles } from "../styles/styles";
import Res from "../resumes";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { addNewRecord } from "../actions";
import { typeOfOfObjects } from "../utils";
import { setInformation } from "../actions";
import { BiSolidDownload } from "react-icons/bi";

let CVInfoData : React.FC<any> = (props)=>{

    let { cv , screenName } = props;
    let nav = useNavigate();


    let add = ()=>{

        let addRecord = {...typeOfOfObjects[screenName]};
        let name = [...cv[screenName]];
        name.push(addRecord);
        props.dispatch(addNewRecord(name , screenName , 'ADD_REMOVE_RECORD'));

    }

    let remove = (index : number)=>{
        let name = [...cv[screenName]];
        if(index > 0){
            name.splice(name.length - index , 1)
        }else{
            name.splice(0,1)
        }

        

        props.dispatch(addNewRecord(name , screenName , 'ADD_REMOVE_RECORD'));
    }

    let change = (e : any , index : number)=>{
        let data = [...props.cv[screenName]];
        data[index][e.target.name] = e.target.value;
        props.dispatch(addNewRecord(data , screenName , 'ADD_REMOVE_RECORD'));
    }

    // console.log({ cv });


    let selectTempleate = (e : any):void=>{
        props.dispatch(setInformation(e.target.name , e.target.value))
    }

    let viewResume = ()=>{
        nav("/resumebuilder/ViewResume")
    }


    return(
        <React.Fragment>
        {/* view Button => display in xs , sm , md screens only */}
            <Box sx={{ mb : 1 ,  display : { lg :'none' , xl : 'none' }}}>
                <Box sx={{display : 'flex' , justifyContent : 'flex-end'}} >
                    <Button size='small' variant='contained' color='success' onClick={viewResume} >View Resume</Button>
                </Box>
            </Box>


            <Grid container  columnGap={1} >
             <Grid xs={12} sm={12} md={12}  lg={5} xl={5}>
              <Paper sx={styles.detailes_box}>
                    <Typography sx={{mt : 1 , mb:1 }} textAlign='center' variant='h5' fontWeight='500' >{props.headerName}</Typography>
                        {
                            props.headerName != "Template" &&
                            <Button variant='contained' size='small' color='success' onClick={add} startIcon={<MdAddCircle />} sx={{ ml : 1 , mb : 0.5 }} >Add</Button>   
                        }
                    
                        <Box sx={{m:0.9}}>
                        { screenName == "education" &&  cv?.education?.map((e : any  , index : number)=>{
                            return(<Box sx={{border : 2 , borderRadius : 2 , p : 0.8  , borderColor : 'lightgray' , mb : 1.2 }}  key={index}>
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

                                            <div className='row m-2'> 
                                                <Button variant='contained' size='small' onClick={()=>{remove(index)}} color='error' startIcon={<RiDeleteBin5Line />}>Remove</Button>
                                            </div>


                                    </Box>
                                )
                            })
                        }

                        { screenName == "work_history" &&  cv?.work_history?.map((e : any  , index : number)=>{
                            return(<Box sx={{border : 2 , borderRadius : 2 , p : 0.8  , borderColor : 'lightgray' , mb : 1.2 }}  key={index}>
                                            <TextField size='small' fullWidth placeholder="Employer" name="employer" value={e["employer"]}  onChange={(e)=>{ change(e , index ) }} />
                                            <div className="row g-1 mt-1">
                                                <div className="col"><TextField size='small' sx={{fontSize : "10px"}} fullWidth value={e["startDate"]} name="startDate" placeholder="Start Date"  onChange={(e)=>{ change(e , index ) }}/></div>
                                                <div className="col"><TextField size='small' fullWidth placeholder="End Date" value={e["endDate"]} name="endDate" onChange={(e)=>{ change(e , index ) }} /></div>
                                            </div>

                                            <TextField size='small' fullWidth name="role" value={e["role"]} placeholder="Role" sx={{mt : 0.5}} onChange={(e)=>{ change(e , index ) }} />

                                            <TextField size='small' fullWidth name="location" value={e["location"]} placeholder="Location" sx={{mt : 0.5}} onChange={(e)=>{ change(e , index ) }} />

                                            <Box sx={{p : 0 , mt :0.5 , mb : 0.5}}>
                                                <textarea name="description" rows={3} value={e["description"]} className="form-control" placeholder="Description" id="exampleFormControlTextarea1" onChange={(e)=>{ change(e , index ) }} />
                                            </Box>

                                            <div className='row m-2'> 
                                                <Button variant='contained' size='small' onClick={()=>{remove(index)}} color='error' startIcon={<RiDeleteBin5Line />}>Remove</Button>
                                            </div>


                                    </Box>
                                )
                            })
                        }

                        { screenName == "projects" &&  cv?.projects?.map((e : any  , index : number)=>{
                            return(<Box sx={{border : 2 , borderRadius : 2 , p : 0.8  , borderColor : 'lightgray' , mb : 1.2 }}  key={index}>
                                            <TextField size='small' fullWidth placeholder="Project Name" value={e["projectName"]} name="projectName" onChange={(e)=>{ change(e , index ) }} />

                                            <TextField size='small' fullWidth name="role" placeholder="Role" sx={{mt : 0.5}} value={e['role']} onChange={(e)=>{ change(e , index ) }} />

                                            <Box sx={{p : 0 , mt :0.5 , mb : 0.5}}>
                                                <textarea name="description" rows={3} className="form-control" placeholder="Role and Responsibilities" value={e['description']} id="exampleFormControlTextarea1" onChange={(e)=>{ change(e , index ) }} />
                                            </Box>

                                            <div className='row m-2'> 
                                                <Button variant='contained' size='small' onClick={()=>{remove(index)}} color='error' startIcon={<RiDeleteBin5Line />}>Remove</Button>
                                            </div>


                                    </Box>
                                )
                            })
                        }

                        { screenName == "skills" &&  cv?.skills?.map((e : any  , index : number)=>{
                              return(<Box sx={{border : 2 , borderRadius : 2 , p : 0.8  , borderColor : 'lightgray' , mb : 1.2 }}  key={index}>
                                            <TextField size='small' fullWidth placeholder="Name" value={e["name"]} name="name" onChange={(e)=>{ change(e , index ) }} />

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

                                        <Button variant='contained' sx={{mt : '5%'}} color='primary' startIcon={<BiSolidDownload />} onClick={()=>{ cv.downloadFunction()}} > Download </Button>

                                    </FormControl>
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
    cv : state.cvReducer
})

export default connect( stateToProps , (dispatch:any)=>({dispatch}))(CVInfoData);