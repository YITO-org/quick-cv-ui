
"use client"
import React from "react";
import { dashboardResumesInterface } from "../../interfaces/types";
// import DashboardTemplateOne from "./DashboardTemplateOne";
import {  Card , CardActions, CardContent, IconButton, Tooltip, Typography, Zoom } from "@mui/material";
import { BsPencilFill, BsTrashFill } from "react-icons/bs";
import { PiShareFatFill } from "react-icons/pi";
import { FaClone } from "react-icons/fa";


let DashboardResumes: React.FC<dashboardResumesInterface> = (props)=>{


      // console.log({ props });

  const dateConvertion = (date: any): any => {
    let d = new Date(date)
    return d.getDate() + "-" + d.getMonth() + "-" + d.getFullYear();
  }

  // let resumeObject : any = {
  //   "Template-3": <DashboardTemplateOne resumeInfo={props.resumeInfo[0]} />
  // }



  let { resumeName, func_editResume, handelDeleteModel, cloneResume, createdAt , copyShareLink } = props;

  return (
    <React.Fragment>

      <Card sx={{ width: 300 , borderRadius : 2 }} variant='elevation' elevation={4}>

          <CardContent>

            <Typography variant='h6' color='purple'>{resumeName}</Typography>
           <Typography variant="caption" fontWeight={600} color='GrayText'> Create At : {dateConvertion(createdAt)}</Typography>

            {/* {resumeObject[props?.resumeInfo[0]?.template]} */}
          </CardContent>
          <CardActions>

          {/* <IconButton color='info' size='small' >
            <BsShareFill />
          </IconButton> */}

            <Tooltip title='Edit' placement='bottom' TransitionComponent={Zoom}>
              <IconButton color='secondary' size='small' onClick={() => { func_editResume(props.resumeId) }} >
                <BsPencilFill />
              </IconButton>
            </Tooltip>


          <Tooltip title='Delete' placement='bottom' TransitionComponent={Zoom}>
            <IconButton color='error' size='small' onClick={() => {handelDeleteModel?.(true , props.resumeId , props.resumeName)}}>
              <BsTrashFill />
            </IconButton>
          </Tooltip>

          
          <Tooltip title='Clone Resume' placement='bottom' TransitionComponent={Zoom}>
            <IconButton color='success' size='small' onClick={() => {cloneResume?.(props.resumeId, props.resumeName)}}>
              <FaClone />
            </IconButton>
          </Tooltip>

          <Tooltip title='Share' placement='bottom' TransitionComponent={Zoom}>
            <IconButton color='primary' size='small' onClick={() => { copyShareLink?.(props.resumeId) }}>
              <PiShareFatFill />
            </IconButton>
          </Tooltip>          



            {/* <Button>Share</Button> 
            <Button onClick={() => { func_editResume(props.resumeId) }} >Edit</Button> */}
          </CardActions>
      </Card>


      {/* {resumeObject[props?.resumeInfo[0]?.template]} */}
    </React.Fragment>
  )
}



export default DashboardResumes;


