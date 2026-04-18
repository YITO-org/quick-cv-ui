
import React from "react";
import { Box, styled, Typography } from "@mui/material";
import { RiFileUploadFill } from "react-icons/ri";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
// import toast from "react-simple-toasts";
import 'react-simple-toasts/dist/theme/info.css';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/dark.css';
import '../styles/toastfy.css';
import axios from "axios";

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

let ResumeFileUpload : React.FC<any> = (props)=>{
    

  let nav = useNavigate();

  let fileUpload = async (file : any )=>{
    
    if(file.target.files && file.target.files[0] && file.target.files[0]?.['type'] == 'application/pdf'  ){
      
      try {


        
        const formData = new FormData();
        formData.append("file", file.target.files[0]); // The key name must match your backend (it's "resume")
        
        console.log({ file : formData , file_ : file.target.files[0] });


      const response : any = await axios.post<any>(
        "/apis/extract-resume", // Your backend endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // axios sets this automatically
          },
        }
      );

    console.log({ response : response.data.data });

     props.dispatch({
        type : 'GET_RESUME_FROM_SERVICE',
        resumeData : response.data.data
    });

     nav('/resumebuilder/detailes');

      // setData(response.data.data);
      // setFile(null);



      // Clear input
      // const fileInput = document.getElementById('resume-input') as HTMLInputElement;
      // if (fileInput) fileInput.value = '';

      
     // console.log({response})

    } catch (err) {
      console.log({ err });
      // setError(err instanceof Error ? err.message : "Upload failed");
    } finally {
      // setLoading(false);
    }




    }else{
            props.setCreatePopUpAlert("Invalid file format");
            setTimeout(()=>{ props.setCreatePopUpAlert("");  },3000)
    }
  
  }
  
  
  return(
        <React.Fragment>
            <Box width={450} height={200} textAlign='center' pr={2.5} pl={2.5} pt={1.5} pb={1.5} border={2}
             borderRadius={1} fontWeight={600} 
             display={'flex'}  
             flexDirection={'column'}
             component="label"
             gap={2} 
             justifyContent={'center'} 
             alignItems={'center'}
              sx={{ cursor: 'pointer' , backgroundColor : 'white' }}>
                
                <RiFileUploadFill size={70} />


     
      <VisuallyHiddenInput
        type="file"
        onChange={(event) => {fileUpload(event)}}
        multiple
      />

                <Typography variant="inherit">Upload File (PDF)</Typography>
                <Typography variant="body2" fontWeight={'bold'} color='#3686d8'>Upload your resume and we’ll make it look professional</Typography>
            </Box>

        </React.Fragment>
    )   
}

let stateToProps = (_state:any) => ({
    // cv : state.cvReducer
  //   resumes : state.storeUsers.resumes,
  // userInfoWithResumes: state.cvReducer.userInfoWithResumes
    // s : state
})

export default connect(stateToProps , (dispatch:any)=>({dispatch}))(ResumeFileUpload);

// export default ResumeFileUpload;
