
import React from "react";
import { Button, Grid, Paper , Box, Typography, TextField, InputLabel, FormControl } from "@mui/material";
import { styles } from "../styles/styles";
import Res from "../resumes";
import { connect } from "react-redux";
import { MdAddCircle } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { addNewRecord } from "../actions";
import { typeOfOfObjects } from "../utils";
// import { setInformation } from "../actions";


let CVInfoData : React.FC<any> = (props)=>{


    let { cv , screenName } = props;
    // console.log({cv});

    let add = ()=>{

        let addRecord = typeOfOfObjects[screenName];
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

    return(
        <React.Fragment>
        {/* view Button => display in xs , sm , md screens only */}
            <Box sx={{ mb : 1 ,  display : { lg :'none' , xl : 'none' }}}>
                <Box sx={{display : 'flex' , justifyContent : 'flex-end'}} >
                    <Button size='large' variant='contained' color='success'>View Resume</Button>
                </Box>
            </Box>


            <Grid container  columnGap={1} >
             <Grid xs={12} sm={12} md={12}  lg={5} xl={5}>
              <Paper sx={styles.detailes_box}>
                    <Typography sx={{mt : 1 , mb:1 }} textAlign='center' variant='h5' fontWeight='500' >{props.headerName}</Typography>
                     <Button variant='contained' size='small' color='success' onClick={add} startIcon={<MdAddCircle />} sx={{ ml : 1 , mb : 0.5 }} >Add</Button>   
                        <Box sx={{m:0.9}}>
                        { screenName == "education" &&  cv?.education?.map((e : any  , index : number)=>{
                            return(<Box sx={{border : 2 , borderRadius : 2 , p : 0.8  , borderColor : 'lightgray' , mb : 1.2 }}  key={index}>
                                            <TextField size='small' fullWidth placeholder="School/University" />
                                            <div className="row g-1 mt-1">
                                                <div className="col"><TextField size='small' sx={{fontSize : "10px"}} fullWidth placeholder="Start Date" /></div>
                                                <div className="col"><TextField size='small' fullWidth placeholder="End Date" /></div>
                                                <div className="col"><TextField size='small' fullWidth placeholder="CGPA" /></div>
                                            </div>

                                            <TextField size='small' fullWidth placeholder="Course" sx={{mt : 0.5}} />

                                            <TextField size='small' fullWidth placeholder="Location" sx={{mt : 0.5}} />

                                            <Box sx={{p : 0 , mt :0.5 , mb : 0.5}}>
                                                <textarea name="summary" rows={3} className="form-control" placeholder="Description" id="exampleFormControlTextarea1" />
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
                                            <TextField size='small' fullWidth placeholder="Employer" />
                                            <div className="row g-1 mt-1">
                                                <div className="col"><TextField size='small' sx={{fontSize : "10px"}} fullWidth placeholder="Start Date" /></div>
                                                <div className="col"><TextField size='small' fullWidth placeholder="End Date" /></div>
                                            </div>

                                            <TextField size='small' fullWidth placeholder="Role" sx={{mt : 0.5}} />

                                            <TextField size='small' fullWidth placeholder="Location" sx={{mt : 0.5}} />

                                            <Box sx={{p : 0 , mt :0.5 , mb : 0.5}}>
                                                <textarea name="summary" rows={3} className="form-control" placeholder="Description" id="exampleFormControlTextarea1" />
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
                                            <TextField size='small' fullWidth placeholder="Project Name" />

                                            <TextField size='small' fullWidth placeholder="Role" sx={{mt : 0.5}} />

                                            <Box sx={{p : 0 , mt :0.5 , mb : 0.5}}>
                                                <textarea name="summary" rows={3} className="form-control" placeholder="Description" id="exampleFormControlTextarea1" />
                                            </Box>

                                            <div className='row m-2'> 
                                                <Button variant='contained' size='small' onClick={()=>{remove(index)}} color='error' startIcon={<RiDeleteBin5Line />}>Remove</Button>
                                            </div>


                                    </Box>
                                )
                            })
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