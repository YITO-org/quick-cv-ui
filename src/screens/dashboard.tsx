"use client"
import React , { useEffect ,  useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMyResume, deleteResume, editResume, getResumes, gotoOrginalState  } from "../actions/resumeActions";
import { Box, Card, CardHeader, Container, Stack , Avatar, CardActions, Button, Paper, Dialog, DialogTitle ,  DialogActions  , DialogContent , TextField } from "@mui/material";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
import {red , blue } from "@mui/material/colors";
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/info.css';
import 'react-simple-toasts/dist/theme/success.css';
import { clearLoader, setLoader } from "../actions";
// import ResumeCard from "../components/resumeCard";

let Dashboard : React.FC<any> = (props)=>{
    
    let [openCreateResumeModel , setCreateResumeModel] = useState(false);
    let [resumeName , setResumeName] = useState<string | null>(null);
    let nav = useNavigate();

    useEffect(()=>{
        props.dispatch(getResumes());
        props.dispatch(gotoOrginalState());
    },[]);

    function responsiveCallBack(res:any){
        // console.log(res);
        if(res?.status == 200){
            toast( res?.data?.data , {
                    theme : 'success',
                    duration : 2000,
                    position : 'bottom-center'
                });
            props.dispatch(getResumes());
            setResumeName("");
        }else{
            props.dispatch(clearLoader());
        }
    }


    function func_openCreateResumeModel(){
        setCreateResumeModel(true);
    }

    function func_closeCreateResumeModel(){
        setCreateResumeModel(false);
    }


    const dateConvertion = (date : any):any=>{
            let d = new Date(date) 
            return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
    }

    const createResume = ():void=>{
        props.dispatch(setLoader())
        props.dispatch(createMyResume(resumeName , responsiveCallBack));
//        console.log(resumeName);
    }

    const func_editResume = (e:any):void => {
        props.dispatch(editResume(e.id , redirectionCallBack));
    }

    const redirectionCallBack = (res : any)=>{
        if(res.status == 200){
            nav('/resumebuilder/detailes');
        }
    }

    const deleteRes = (resumeId : number , resumeName : string) => {
        props.dispatch(setLoader());
        props.dispatch(deleteResume(resumeId , resumeName , responsiveCallBack));
    }

    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{p : 2}}>
                <Box sx={{textAlign : 'right' , mb : 2 }}>
                  <Button variant='contained' startIcon={<MdAddCircle />} onClick={func_openCreateResumeModel} >Create</Button>
                </Box>
                <Box sx={{ width : '100%'}} >
                <Stack rowGap={2} direction='row' flexWrap='wrap'>
                    {
                        props?.resumes?.map((e : any,index : number)=>(
                            <Paper key={index} elevation={10} sx={{ width : '100%' }} >
                                    {/* <ResumeCard {...e} /> */}
                                    <Card variant='outlined'>
                                        <CardHeader 
                                            avatar={
                                                <Avatar sx={{ bgcolor: (index + 1 ) % 2 == 0 ? red[500] : blue[500] }} aria-label="recipe">
                                                {index + 1}
                                              </Avatar>
                                            }
                                            title={e?.resumeName}
                                            subheader={"Created : " + dateConvertion(e?.createdAt)}
                                        />
                                        <CardActions sx={{ml:2}} >
                                                <Button variant='contained' size='small' color='info' onClick={()=>{func_editResume(e)}} startIcon={<FaEdit />}>Edit</Button>
                                                <Button variant='contained' size='small' color='error' startIcon={<MdDelete />} onClick={()=>{deleteRes(e.id , e.resumeName)}} >Delete</Button>
                                                {/* <Button variant='contained' size='small' color='error' startIcon={<IoDuplicate />} > duplicate </Button> */}
                                        </CardActions>
                                    </Card>
                                </Paper>
                            ))
                        }


                </Stack>
                </Box>




            </Container>

                    <Dialog
                        open={openCreateResumeModel}
                        onClose={func_closeCreateResumeModel}
                        fullWidth={true}
                        maxWidth={'xs'}
                        PaperProps={{
                        component: 'form',
                        onSubmit: (event : React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
//                            console.log(resumeName)
                            func_closeCreateResumeModel();
                            createResume();
                        },
                        }}
                    >
                        <DialogTitle>Create New Resume</DialogTitle>
                        <DialogContent>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                label="Resume Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                value={resumeName}
                                onChange={(e : any)=>{setResumeName(e.target.value)}}
                            />
                        </DialogContent>
                        <DialogActions>
                        <Button variant='contained' size='small' type="submit">Create</Button>
                        <Button variant='contained' size='small' color='error' onClick={func_closeCreateResumeModel}>Cancel</Button>
                        </DialogActions>
                    </Dialog>

                
        </React.Fragment>
    )
}

let stateToProps = (state:any) => ({
    // cv : state.cvReducer
    resumes : state.storeUsers.resumes,
    // s : state
})

export default connect(stateToProps , (dispatch:any)=>({dispatch}))(Dashboard);