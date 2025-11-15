
import React from "react";
import { connect } from "react-redux";
import { Grid, Paper, Typography } from "@mui/material";
import Res from "../resumes";
import { styles } from "../styles/styles";

let DynamicSections : React.FC<any> = (props)=>{

    return(
        <React.Fragment>
              
        {/* <ResumeHeader saveAndDownload={saveAndDownload} 
                      cv={cv} 
                      selectedTemplate={selectTempleate2}
                      /> */}

          <Grid container  columnGap={1} >
             <Grid xs={12} sm={12} md={12}  lg={5} xl={5}>
            <Paper sx={styles.detailes_box} >
              <Typography sx={{ mt: 1, mb: 1 }} textAlign='center' variant='h6' fontWeight='500' >{props.headerName}</Typography>
              Dynamic Sections

            </Paper>
             </Grid> 
 
             <Grid /* xs={12} sm={12} md={12} */ lg={6.9} xl={6.9} sx={{display : {sm : 'none' , xs : 'none' , md : 'none' , lg: 'block' , xl: 'block'}}}>
                        <Res />
             </Grid>
           </Grid>
        </ React.Fragment>
  )
}


  const mapStateToProps = (state : any ) => ({
    // cv : state.cvReducer,
    // user: state.storeUsers,
    // landingPageCount: state.landingReducer
  });  
export default connect(mapStateToProps, (dispatch: any) => ({ dispatch }))(DynamicSections);


