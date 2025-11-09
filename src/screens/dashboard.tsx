"use client"
import React , { useEffect ,  useState , useRef } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createMyResume, deleteResume, editResume, editResumeTesting, getResumes , createMyCloneResume, gotoOrginalState, myResumes  } from "../actions/resumeActions";
import { Box, Container, Stack , Button, Dialog, DialogTitle ,  DialogActions  , DialogContent , TextField, Typography, Divider, IconButton /* ,  Tooltip*/ } from "@mui/material";
// import { FaEdit } from "react-icons/fa";
// import { MdDelete } from "react-icons/md";
import { MdAddCircle } from "react-icons/md";
// import { TbCopy } from "react-icons/tb";
// import { BsCheckCircleFill } from "react-icons/bs";
// import { FaClone } from "react-icons/fa";
// import {red , blue } from "@mui/material/colors";
import toast from 'react-simple-toasts';
import 'react-simple-toasts/dist/theme/info.css';
import 'react-simple-toasts/dist/theme/success.css';
import { clearLoader, setLoader } from "../actions";
import DashboardResumes from "../components/dashboardResumes/DashboardResumes";
import { dashboardResumesInterface } from "../interfaces/types";
import { IoIosCloseCircle } from "react-icons/io";
// import ResumeCard from "../components/resumeCard";

let Dashboard : React.FC<any> = (props)=>{
    
    let [openCreateResumeModel , setCreateResumeModel] = useState<boolean>(false);
    let [resumeName , setResumeName] = useState<string | null>(null);
    let [clone , setClone] = useState<boolean>(false);
    let [cloneResumeName ,  setCloneResumeName] = useState<string | null>('');
    let [cloneResumeId , setCloneResumeId] = useState<number | null>(null);

    let [deleteModel , setDeleteModel] = useState<boolean>(false);
    let [shareModel , setShareModel] = useState<boolean>(false);
    let [_shareTitle , _setShareTitle] = useState<string | null | undefined>(null);

    let read = useRef<HTMLInputElement>(null)

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
        setCreateResumeModel(false);setClone(false);setCloneResumeId(null);setCloneResumeName(null);setShareModel(false);
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

  let copyShareLink = (resumeId : number | undefined | any ) => {
      setShareModel(true)
    setCloneResumeId(resumeId);
  }


  // let showAndHideShareTitle = async () => {
  //   // console.log(read?.current?.innerText)
  //   let value : string = read?.current?.innerText || '';
  //  await navigator?.clipboard?.writeText(value);
  //  // document.execCommand(value);
  //  // console.log(location);

  //   // const textarea = document.createElement("textarea");
  //   // textarea.value = value;
  //   // document.body.appendChild(textarea);
  //   // textarea.select();
  //   // document.execCommand('Surya teja');
  //   // document.body.removeChild(textarea);
   
  //   setShareTitle('share')

  //   setTimeout(()=>{setShareTitle(null)},2000)
  // }

  //  let showAndHideShareTitle = async () => {

  //    let value: string = read?.current?.innerText || '';

  //    if (navigator.clipboard && window.isSecureContext) {
  //      // Modern API
  //      await navigator?.clipboard?.writeText(value);
  //      console.log("Copied using Clipboard API");
  //    } else {
  //      // Fallback for non-HTTPS or old browsers
  //      const textarea = document.createElement("textarea");
  //      textarea.value = value;
  //      textarea.style.position = "fixed";
  //      textarea.style.top = "0";
  //      textarea.style.left = "0";
  //      document.body.appendChild(textarea);
  //      textarea.focus();
  //      textarea.select();

  //      try {
  //        // @ts-ignore: execCommand is deprecated, used only as fallback
  //        document.execCommand("copy");
  //        console.log("Copied using fallback");
  //      } catch (err) {
  //        console.error("Fallback copy failed:", err);
  //      } finally {
  //        document.body.removeChild(textarea);
  //        setShareTitle('share')
  //        setTimeout(()=>{setShareTitle(null)},2000)
  //       }
  //    }

     
  //   }



    return(
        <React.Fragment>
            <Container maxWidth='xl' sx={{p : 2}}>
              <Box>
                <Typography sx={{
                  fontSize : {
                    xs: '2.2rem',   // 0px and up
                    sm: '3rem', // 600px and up
                    md: '3rem',  // 900px and up
                    lg: '3rem',    // 1200px and up
                  }
                }} >Welcome back,{" "}{userInfoWithResumes?.name}! 🎉</Typography>
                <Typography variant='subtitle1' >Ready to build your QuickCV?</Typography>
              </Box>

             <Divider sx={{my : 2 , width : '98%' }} variant='middle' />

          <Box display='flex' justifyContent='right' my={2}>
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
                                                                                    cloneResume={cloneResume} 
                                                                                    copyShareLink={copyShareLink}
                                                                                    />)
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




        <Dialog
          open={shareModel}
          onClose={func_closeCreateResumeModel}
          fullWidth={true}
          maxWidth={'md'}
          >
          <DialogTitle sx={{ fontSize: 18 }} display='flex' justifyContent='space-between' alignItems='center'>
            <Typography variant='h5' fontFamily='revert' fontWeight='bold' >
                Are you sure you want to share this resume ?
              </Typography>
            <IconButton color='error' onClick={func_closeCreateResumeModel}>
              <IoIosCloseCircle size={30} />
            </IconButton>
            </DialogTitle>
          <Divider/>
          <DialogContent>

              <Typography sx={{ml : 1 , mb : 1.5 }} >Kindly copy the URL and share it</Typography>

              <Box sx={{ height : 50 , bgcolor : 'lightgray', borderRadius : 1  }} display='flex' justifyContent={'space-between'}  alignItems={'center'} padding={2} >

              <Box ref={read}>{location.origin}/share-resume/{window.btoa(String(cloneResumeId))}</Box>
                {/* <Tooltip title={shareTitle} placement="top" >
                  {
                  shareTitle ?
                    <IconButton size="large">
                      <BsCheckCircleFill fontSize={20} color="green"/>
                    </IconButton> 
                    :
                  <IconButton size="large" onClick={showAndHideShareTitle} >
                      <TbCopy fontSize={20} color="black" />
                    </IconButton>
                  }
                </Tooltip> */}
              </Box>
          </DialogContent>
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