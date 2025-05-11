import React from "react";
import { Button, Grid, Paper , Box, Typography, TextField, InputLabel  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import { connect } from "react-redux";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import Res from "../resumes";
import { setInformation } from "../actions";
import { styles } from "../styles/styles";
import 'react-quill/dist/quill.snow.css';
import { detailesFieldsInterface } from "../interfaces/types";
import ResumeHeader from "../components/resumeHeader/ResumeHeader";
// import styles from "../styles/detailes.module.css";


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
		['link' /*, 'image', 'video' */ ],
		// ['clean']
	],
}


let Detailes : React.FC<any> = (props)=>{

    let { cv , nextButton } = props;
    let nav = useNavigate();

    let change = (e  : any /* React.ChangeEvent<HTMLInputElement>*/)=>{
        props.dispatch(setInformation(e.target.name , e.target.value))
    }

    //const [convertedText, setConvertedText] = React.useState<string>('')

	let setText = (e : any) => {
        if(e == "<p><br></p>") {
            props.dispatch(setInformation('summary' , '' ))
		}else{
            props.dispatch(setInformation('summary' , e))
		}
	}

    let viewResume = ()=>{
        nav("/resumebuilder/ViewResume")
    }

  let fildes: detailesFieldsInterface[] = [/*'name'*/ { 'displayNameAndPlaceholder': 'Name', orginalName: 'name' }, { displayNameAndPlaceholder: 'Designation', orginalName: 'designation' }, { displayNameAndPlaceholder: 'DOB', orginalName: 'DOB' }, { displayNameAndPlaceholder: 'Phone Number', orginalName: 'phoneNumber' }, { displayNameAndPlaceholder: 'Email', orginalName: 'email' }, { displayNameAndPlaceholder: 'Github', orginalName: 'github' }, { displayNameAndPlaceholder: 'Linkedin', orginalName: 'linkedin' }]

    return(
        <React.Fragment>
            {/* view Button => display in xs , sm , md screens only */}
            
            <ResumeHeader />

            <Box sx={{ mb : 1 ,  display : { lg :'none' , xl : 'none' }}}>
                <Box sx={{display : 'flex' , justifyContent : 'flex-end'}} >
                    <Button size='small' variant='contained' color='success' onClick={viewResume}>View Resume</Button>
            </Box>
                </Box>

                <Grid container  columnGap={1} >
                    <Grid xs={12} sm={12} md={12} lg={5} xl={5}>
                            <Paper sx={styles.detailes_box}>
                                <Typography sx={{mt : 1 /* , mb:0.5 */ }} textAlign='center' variant='h5' fontWeight='500' >{props.headerName}</Typography>
                                {  
                                   props.headerName == "Details" &&
                                        <Box sx={{ flexGrow: 1 , p : 1 }}>
                                          <Grid container columnGap={0.6} rowGap={0.5} direction='row'>
                                              {
                                                fildes.map((e, index) => (
                                                  <Grid xl={5.9} lg={5.9} md={12} sm={12} xs={12} key={index}>
                                                    <InputLabel
                                                      sx={styles.input_lable}
                                                    >{e['displayNameAndPlaceholder']}</InputLabel>
                                                    <TextField type="text" size='small' 
                                                        // placeholder={e['displayNameAndPlaceholder']} 
                                                        name={e.orginalName} value={cv[e.orginalName]} onChange={change} sx={{ marginBottom: 2, width: '100%' }} />
                                                  </Grid>
                                                ))
                                              }
                                          </Grid>
                                        </Box>
                                }
                                {
                                    props.headerName == "Summary" &&
                                    <Box sx={{p : 2}}>
                                        <ReactQuill
                                            theme="snow"
                                            // value={convertedText}
                                            value={cv["summary"]}
                                            onChange={setText}
                                            placeholder="Write About Youself..."
                                            modules={modules}
                                            style={{ height : '20rem' , minHeight: '20rem' , marginBottom : 35 }}
			                             />
                                        {/* <textarea name="summary" rows={15} className="form-control" placeholder="Write About Youself..." value={cv["summary"]} onChange={change}  id="exampleFormControlTextarea1" /> */}
                                    </Box>
                                }    

                {
                    //  next button
                    nextButton &&
                    <Box sx={{ textAlign : 'center' , marginBottom : 1  }} >
                        <Button sx={{width : '95%' }} variant="contained" color="secondary" startIcon={ <IoIosArrowDroprightCircle /> } onClick={()=>{nav("/resumebuilder/" + nextButton)}} > <Typography fontWeight='bold' variant="body1" >Next</Typography> </Button>
                    </Box>
                }
                            </Paper>
                    </Grid> 

                    <Grid lg={6.9} xl={6.9} sx={{display : {sm : 'none' , xs : 'none' , md : 'none' , lg: 'block' , xl: 'block'}}} >
                        <Res />
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}

let stateToProps = (state:any) => ({
    cv : state.cvReducer
})

export default connect(stateToProps , (dispatch:any)=>({dispatch}))(Detailes);