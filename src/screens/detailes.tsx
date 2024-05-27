import { Button, Grid, Paper , Box, Typography, TextField, InputLabel } from "@mui/material";
import React from "react";
import {grey} from "@mui/material/colors"; 
import { styles } from "../styles/styles";
// import styles from "../styles/detailes.module.css";






let Detailes : React.FC = ()=>{
    return(
        <React.Fragment>

            {/* view Button => display in xs , sm , md screens only */}
            <Box sx={{ mb : 1 ,  display : { lg :'none' , xl : 'none' }}}>
                <Box sx={{display : 'flex' , justifyContent : 'flex-end'}} >
                    <Button size='large' variant='contained' color='success'>View Resume</Button>
                </Box>
            </Box>

                <Grid container  columnGap={1} >
                    <Grid xs={12} sm={12} md={12} lg={5} xl={5}>
                            <Paper   sx={styles.detailes_box}>
                                <Typography sx={{mt : 1 , mb:1 }} textAlign='center' variant='h5' fontWeight='600'>Detailes</Typography>
                                
                                <Box sx={{p : 2}}>
                                    {
                                        ['name' , 'designation' , 'dob' , 'phoneNumber' , 'email' , 'github' , 'linkdin'].map((e,index)=>(
                                            <Box key={index}>
                                                <InputLabel sx={styles.input_lable}>{e}</InputLabel>
                                                <TextField type="text" size="small" placeholder={e} sx={{marginBottom : 2 , width : '100%'}} />
                                            </Box>
                                        ))
                                    }
                                    </Box>

                            
                            </Paper>
                    </Grid> 
                    <Grid lg={6.9} xl={6.9} sx={{display : {sm : 'none' , xs : 'none' , md : 'none' , lg: 'block' , xl: 'block'}}} >
                        <Paper sx={styles.detailes_resume_box}></Paper>
                    </Grid>
                </Grid>
        </React.Fragment>
    )
}

export default Detailes;