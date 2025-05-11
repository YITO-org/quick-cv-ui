'use client'
import { Box, Button, Grid, IconButton, Tooltip, Zoom } from "@mui/material";
import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { ImInsertTemplate } from "react-icons/im";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

let ResumeHeader : React.FC<{}> = ()=>{

  let nav = useNavigate();

  let viewResume = () => {
    nav("/resumebuilder/ViewResume")
  }

  return(
    <React.Fragment>
      <Box sx={{ pb: 0.5, ml: 1 }} >
        <Grid container >

          <Grid xs={8} sm={10} md={10} lg={10} xl={11}>
            <Tooltip title='Change Template' placement='right' TransitionComponent={Zoom} >
              <Button variant='text' color='primary' size='small' startIcon={<ImInsertTemplate />} >Templates</Button>
            </Tooltip>
          </Grid>

          <Grid xs={4} sm={2} md={2} lg={1} xl={1}>
            <Tooltip title='Download' placement='right' TransitionComponent={Zoom} >
              <IconButton>
                <FaCloudDownloadAlt color='#673ab7' />
              </IconButton>
            </Tooltip>

            <Tooltip   title='View Resume' placement='bottom' TransitionComponent={Zoom} >
              <IconButton sx={{ display: { xl: 'none', lg: 'none' } }} >
                <FiEye onClick={viewResume} color='#3f51b5' />
              </IconButton>
            </Tooltip>
          </Grid>

        </Grid>
      </Box>
    </React.Fragment>
  )
}


let stateToProps = ( _state: any ) => ({
  // cv: state.cvReducer,
  // holdCustomeAccordianNumber: state.cvReducer.holdCustomeAccordianNumber
})

export default connect(stateToProps, (dispatch: any) => ({ dispatch }))(ResumeHeader);
