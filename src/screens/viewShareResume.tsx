


import React , {} from "react";
import Res from "../resumes";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { shareResume } from "../actions/resumeActions";
import { Backdrop, Button, CircularProgress, Grid, Stack, Typography } from "@mui/material";

import { RiDownloadCloudFill } from "react-icons/ri";
import { useSelector } from 'react-redux';
import { setLoader } from "../actions";

let ShareViewResume : React.FC<any> = (props)=>{

  let { resumeId } = useParams();

  let id : any , error : string = '';

  try{
    id = window.atob(String(resumeId));
  }catch(error){
    error = 'error';
  }

  if(error == 'error'){
    return(
      <>
        Error
      </>
    )
  }


  const selector = useSelector((sel:any)=>sel.loderReducer);

  React.useEffect(()=>{
    if(id){
      props.dispatch(shareResume(Number(id)))
    }
    return ()=>{
      props.dispatch({ type: 'ORGINAL_STATE' });
    }
  },[])


  let saveAndDownload = ()=>{
        let {cv} = props;
        props.dispatch(setLoader()) 
         cv.downloadFunction();
  }


  return(<>

    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={selector.loader}
      // onClick={()=>{}}
    >
          <Stack direction={'column'} justifyContent={'center'} alignItems={'center'} rowGap={1} >
              <CircularProgress color="primary" />
              <Typography>Download</Typography>
          </Stack>

    </Backdrop>

    <Grid container 
          columnGap={1} 
          padding={2} 
          rowGap={1}
          direction='row' 
          justifyContent={'center'}
          alignItems={'center'} 
    >
      <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
           <Button variant="contained" startIcon={<RiDownloadCloudFill />} onClick={()=>{saveAndDownload()}} >Download</Button>
      </Grid>

      <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
          <Res shareResume={true} />
      </Grid>

    </Grid>
  </>)
}



let stateToProps = (state: any) => ({
  cv: state.cvReducer
})

export default connect(stateToProps, (dispatch: any) => ({ dispatch }))(ShareViewResume);

