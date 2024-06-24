import React from "react";
import { Button, Grid, Paper , Box, Typography, TextField, InputLabel  } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ReactQuill from 'react-quill';
import { connect } from "react-redux";
import Res from "../resumes";
import { setInformation } from "../actions";
import { styles } from "../styles/styles";
import 'react-quill/dist/quill.snow.css';
// import styles from "../styles/detailes.module.css";


const modules : any = {
	toolbar: [
		// [{ header: '1' }, { header: '2' }, { font: [] }],
		// [{ size: [] }],
		['bold', 'italic', 'underline'],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' }
		]
		//['link', 'image', 'video'],
		// ['clean']
	]
}


let Detailes : React.FC<any> = (props)=>{

    let { cv } = props;
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


    return(
        <React.Fragment>
            {/* view Button => display in xs , sm , md screens only */}
            <Box sx={{ mb : 1 ,  display : { lg :'none' , xl : 'none' }}}>
                <Box sx={{display : 'flex' , justifyContent : 'flex-end'}} >
                    <Button size='small' variant='contained' color='success' onClick={viewResume}>View Resume</Button>
            </Box>
                </Box>

                <Grid container  columnGap={1} >
                    <Grid xs={12} sm={12} md={12} lg={5} xl={5}>
                            <Paper   sx={styles.detailes_box}>
                                <Typography sx={{mt : 1 , mb:1 }} textAlign='center' variant='h5' fontWeight='500' >{props.headerName}</Typography>
                                {  
                                   props.headerName == "Details" &&
                                        <Box sx={{p : 2}}>
                                            {
                                                ['name' , 'designation' , 'DOB' , 'phoneNumber' , 'email' , 'github' , 'linkdin'].map((e,index)=>(
                                                    <Box key={index}>
                                                        <InputLabel sx={styles.input_lable}>{e}</InputLabel>
                                                        <TextField type="text" size='small' placeholder={e} name={e} value={cv[e]}  onChange={change} sx={{marginBottom : 2 , width : '100%'}} />
                                                    </Box>
                                                ))
                                            }
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
                                            style={{ height : '20rem' , minHeight: '20rem' }}
			                             />
                                        {/* <textarea name="summary" rows={15} className="form-control" placeholder="Write About Youself..." value={cv["summary"]} onChange={change}  id="exampleFormControlTextarea1" /> */}
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

export default connect( stateToProps , (dispatch:any)=>({dispatch}))(Detailes);