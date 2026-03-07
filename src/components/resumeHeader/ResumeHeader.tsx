'use client'
import { Box, Button, Typography , Dialog , DialogContent, DialogTitle, Grid, IconButton, Stack, Tooltip, Zoom, Divider } from "@mui/material";
import React, { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { IoIosCloseCircle } from "react-icons/io";
import { ImInsertTemplate } from "react-icons/im";
import { FaSave } from "react-icons/fa";
// import { FaSave } from "react-icons/fa";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import resumeOneImage from "../../utils/images/resumeOneImage.png"
import resumeTwoImage from "../../utils/images/resumeTwoImage.png"
import resumeThreeImage from "../../utils/images/resumeThreeImage.png"
// import resumeFourImage from "../../../public/images/resumeFourImage.png"
import resumeFourImage from "../../utils/images/resumeFourImage.png"


let ResumeHeader : React.FC<any> = (props)=>{

  let { saveAndDownload, cv, selectedTemplate , saveResume } = props;

  let _selectedTemplate : string

  if (cv && !cv.selectedTemplate) {
    _selectedTemplate = "Template-1"
  }else{
    _selectedTemplate = cv.selectedTemplate
  }

  let nav = useNavigate();

  let [state , setState] = useState({
    showChangeTemplate : false
  })

  let viewResume = () => {
    nav("/resumebuilder/ViewResume")
  }

  let openCloseChangeTemplate = ()=>{
    setState({...state , showChangeTemplate : !state.showChangeTemplate });
  }

  // let temp: any = ['temp-1', 'temp-1', 'temp-1', 'temp-4', 'temp-4', 'temp-4']

  let templates : any = {
    'Template-1': resumeOneImage,
    'Template-2' : resumeTwoImage,
    'Template-3': resumeThreeImage,
    'Template-4': resumeFourImage
  }


  return(
    <React.Fragment>
      <Box sx={{ pb: 0.5, ml: 1  , mb : -1}} >
        <Grid container >

          <Grid xs={8} sm={10} md={10} lg={11} xl={11}>
            <Tooltip title='Change Template' placement='right' TransitionComponent={Zoom} >
              <Button variant='text' color='primary' size='small' startIcon={<ImInsertTemplate />} onClick={openCloseChangeTemplate}  >Templates</Button>
            </Tooltip>
          </Grid>

          <Grid xs={4} sm={2} md={2} lg={1} xl={1}>

            {/* <Tooltip title='Save' placement='bottom' TransitionComponent={Zoom}  >
              <IconButton onClick={saveAndDownload} >
                <FaSave color='gray' />
              </IconButton>
            </Tooltip> */}

{         
      cv.resumeId &&  
           <Tooltip title='Save' placement='bottom' TransitionComponent={Zoom}  >
              <IconButton onClick={saveResume} >
                <FaSave color='#673ab7' />
              </IconButton>
            </Tooltip>
            }

            <Tooltip title='Download' placement='bottom' TransitionComponent={Zoom}  >
                  <IconButton onClick={saveAndDownload} >
                    <FaCloudDownloadAlt color='#673ab7' />
                  </IconButton>
            </Tooltip>

            <Tooltip   title='View Resume' placement='bottom' TransitionComponent={Zoom} >
              <IconButton sx={{ display: { xl: 'none', lg: 'none' }}} >
                <FiEye onClick={viewResume} color='#3f51b5' />
              </IconButton>
            </Tooltip>
          </Grid>

        </Grid>
      </Box>


    <Dialog
          open={state.showChangeTemplate}
          onClose={openCloseChangeTemplate}
          fullWidth={true}
        maxWidth={'lg'}
        PaperProps={{
        component: 'form',
        onSubmit: (_event : React.FormEvent<HTMLFormElement>) => {
            // event.preventDefault();
            // if(clone){
            //     createCloneResume();
            // }else{
            //     createResume();
            // }
        },
        }}
      >

                             <DialogTitle>
                              <Stack direction='row' 
                               alignItems='center' 
                               spacing={60}
                               justifyContent='flex-end'
                               flexWrap='wrap'
                               // justifyContent='space-between'
                              >
                               <Typography variant='h5' fontFamily='revert' fontWeight='bold'> Select Template </Typography>
                                <IconButton onClick={openCloseChangeTemplate} color='error' >
                                    <IoIosCloseCircle size={30} />
                                </IconButton>
                              </Stack>
                            </DialogTitle>
                            <Divider />
                            <DialogContent>
                              <Stack direction='row' columnGap={2} flexWrap='wrap' rowGap={2} justifyContent='start'>
                            {
                              cv?.templates?.map((e:string,_index:number)=>(
                                <>
                                 <Box>

                                    <img src={templates[e]}
                                      width={368} height={560}
                                    className="img-fluid rounded"
                                      onClick={() => { selectedTemplate('selectedTemplate', e); openCloseChangeTemplate() }} 
                                      style={{
                                        border: _selectedTemplate == e ? "1px solid #b1e1fa" : "1px solid black",
                                        borderWidth: _selectedTemplate == e ? '5px' : '1px' 
                                                }} />
                                        <Typography textAlign='center' mt={0.5} >{e}</Typography>
                                 </Box>
                                    </>
                                ))
                              }
                              </Stack>
                            </DialogContent>
                            {/* <DialogActions>
                            <Button variant='contained' size='small' type="submit">Create</Button>
                            <Button variant='contained' size='small' color='error' onClick={()=>{}}>Cancel</Button>
                            </DialogActions> */}
                        </Dialog>



    </React.Fragment>
  )
}


let stateToProps = ( _state: any ) => ({
  // cv: state.cvReducer,
  // holdCustomeAccordianNumber: state.cvReducer.holdCustomeAccordianNumber
})

export default connect(stateToProps, (dispatch: any) => ({ dispatch }))(ResumeHeader);



// sx = {
//   cv.selectedTemplate == e ?
//     {
//       width: '10%',
//       px: 1,
//       border: 3,
//       borderColor: 'lightblue',
//       borderRadius: 2,
//       //boxShadow : 2

//       boxShadow: '24px 24px 50px 20px lightblue',
//     } : {}
// }


{/* <Box
sx={{
  width : "300px",
  height : '450px',
  borderRadius : 1,
  border: _selectedTemplate == e ? "1px solid blue" : "1px solid black",
  borderWidth : '0.5px',
  // justifyItems : 'center',
  // alignContent : 'center',
  display : 'flex',
  justifyContent : 'center',
  alignItems : 'center'
}}
onClick={() => { selectedTemplate('selectedTemplate', e); openCloseChangeTemplate() }}
>
  {
  _selectedTemplate == e &&
    <Chip label='Selected' color='success' variant='filled' />
  // <Typography textAlign='center' >{e}</Typography>
  }
</Box>
<Typography textAlign='center' marginTop={1}>{e}</Typography> */}