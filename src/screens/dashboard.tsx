"use client"
import React , { useEffect ,  useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMyResume, deleteResume, editResume, editResumeTesting, getResumes , createMyCloneResume, gotoOrginalState, myResumes  } from "../actions/resumeActions";
import { Box, Container, Stack , Button, Dialog, DialogTitle ,  DialogActions  , DialogContent , TextField, Typography, Divider } from "@mui/material";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
// import { FaClone } from "react-icons/fa";
// import {red , blue } from "@mui/material/colors";
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/info.css';
import 'react-simple-toasts/dist/theme/success.css';
import { clearLoader, setLoader } from "../actions";
import DashboardResumes from "../components/dashboardResumes/DashboardResumes";
import { dashboardResumesInterface } from "../interfaces/types";
// import ResumeCard from "../components/resumeCard";

let Dashboard : React.FC<any> = (props)=>{
    
    let [openCreateResumeModel , setCreateResumeModel] = useState<boolean>(false);
    let [resumeName , setResumeName] = useState<string | null>(null);
    let [clone , setClone] = useState<boolean>(false);
    let [cloneResumeName ,  setCloneResumeName] = useState<string | null>('');
    let [cloneResumeId , setCloneResumeId] = useState<number | null>(null);

    let [deleteModel , setDeleteModel] = useState<boolean>(false);

  let { userInfoWithResumes } = props;

    let nav = useNavigate();

    useEffect(()=>{
         props.dispatch(getResumes());
         props.dispatch(myResumes())
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
                setResumeName("");setCreateResumeModel(false);setCloneResumeId(null);setCloneResumeName(null);
                props.dispatch(editResumeTesting(res.data.resumeInfo))
                props.dispatch(clearLoader());
                nav('/resumebuilder/detailes');
        }else{
            props.dispatch(clearLoader());
        }
    }

    function responsiveCallBackForDelete(res:any){
        // console.log(res);
        if(res?.status == 200){
            toast( res?.data?.data , {
                    theme : 'success',
                    duration : 2000,
                    position : 'bottom-center'
                });
                setResumeName("");
                setDeleteModel(false);
                // props.dispatch(getResumes());
                props.dispatch(myResumes())
          }else{
            props.dispatch(clearLoader());
        }
    }


    function func_openCreateResumeModel(){
        setResumeName("");
        setCreateResumeModel(true);
    }

    function func_closeCreateResumeModel(){
        setCreateResumeModel(false);setClone(false);setCloneResumeId(null);setCloneResumeName(null);
    }

    const createResume = ():void=>{
        props.dispatch(setLoader())
        props.dispatch(createMyResume(resumeName , responsiveCallBack));
    }

    const createCloneResume = ():void=>{
        props.dispatch(setLoader());
        props.dispatch(createMyCloneResume(cloneResumeId, resumeName ,responsiveCallBack));
    }


    const func_editResume = (e:any):void => {
        props.dispatch(editResume(e , redirectionCallBack));
    }

    const redirectionCallBack = (res : any)=>{
        if(res.status == 200){
            nav('/resumebuilder/detailes');
        }
    }

    const deleteRes = (resumeId : number | null , resumeName : string | null ) => {
        props.dispatch(setLoader());
        props.dispatch(deleteResume(resumeId , resumeName , responsiveCallBackForDelete));
    }

    const cloneResume = (id : number | null , name:string | null)=>{
        setClone(true);setCreateResumeModel(true);setResumeName("");
        setCloneResumeId(id);setCloneResumeName(name);
    }

    const handelDeleteModel = (showOrClose : boolean , resumeId? : number , resumeName? : string )=>{
        setDeleteModel(showOrClose);
        if(resumeId && resumeName){
            setCloneResumeId(resumeId);
            setCloneResumeName(resumeName);
        }
    }



    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{p : 2}}>
              <Box>
                <Typography variant={'h3'} >Welcome back,{" "}{userInfoWithResumes?.name}! 🎉</Typography>
                <Typography variant='subtitle1' >Ready to build your QuickCV?</Typography>
              </Box>

             <Divider sx={{my : 2 , width : '98%' }}  />

          <Box display='flex' justifyContent='right' mt={1} >
            <Button variant='contained' size='small' startIcon={<MdAddCircle />} onClick={func_openCreateResumeModel} >Create</Button>
          </Box>



            <Stack direction='row' spacing={3} useFlexGap sx={{flexWrap : 'wrap'}}>
            {
              userInfoWithResumes?.resumes?.map((e: dashboardResumesInterface) => <DashboardResumes 
                                                                                    resumeId={e.id} 
                                                                                    resumeName={e.resumeName} 
                                                                                    createdAt={e.createdAt} 
                                                                                    resumeInfo={e.resumeInfo} 
                                                                                    func_editResume={func_editResume} 
                                                                                    handelDeleteModel={handelDeleteModel}
                                                                                    cloneResume={cloneResume} />)
            }
            </Stack>

            </Container>

                    <Dialog
                        open={openCreateResumeModel}
                        onClose={func_closeCreateResumeModel}
                        fullWidth={true}
                        maxWidth={'sm'}
                        PaperProps={{
                        component: 'form',
                        onSubmit: (event : React.FormEvent<HTMLFormElement>) => {
                            event.preventDefault();
                            if(clone){
                                createCloneResume();
                            }else{
                                createResume();
                            }
                        },
                        }}
                    >
                        <DialogTitle sx={{ fontSize : 18 }}>{clone ? `Do want to clone ${cloneResumeName} resume ?` : 'Create New Resume'}</DialogTitle>
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




                    <Dialog
                        open={deleteModel}
                        onClose={()=>{handelDeleteModel(false)}}
                        fullWidth={true}
                        maxWidth={'sm'}
                        // PaperProps={{
                        // component: 'form',
                        // onSubmit: (event : React.FormEvent<HTMLFormElement>) => {
                        //     event.preventDefault();
                        //     if(clone){
                        //         createCloneResume();
                        //     }else{
                        //         createResume();
                        //     }
                        // },
                        // }}
                    >
                        <DialogTitle sx={{ fontSize : 18 }}>{`Are you sure you want to delete this resume?`}</DialogTitle>
                        <DialogActions>
                        <Button variant='contained' size='small' type="submit" onClick={()=>{deleteRes(cloneResumeId , cloneResumeName)}} >Yes, delete it</Button>
                        <Button variant='contained' size='small' color='error' onClick={()=>{handelDeleteModel(false)}}>Cancel</Button>
                        </DialogActions>
                    </Dialog>

                
        </React.Fragment>
    )
}

let stateToProps = (state:any) => ({
    // cv : state.cvReducer
    resumes : state.storeUsers.resumes,
  userInfoWithResumes: state.cvReducer.userInfoWithResumes
    // s : state
})

export default connect(stateToProps , (dispatch:any)=>({dispatch}))(Dashboard);