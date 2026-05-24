import { AppBar, Box, Button, IconButton, InputLabel, TextField, Toolbar , Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoChevronBackCircle } from "react-icons/io5";
import { styles } from "../styles/styles";
import { useWidth } from "../layout";

let ProfileScreen : React.FC<any> = (_props)=>{
        

    const screenSize = useWidth();
    let nav = useNavigate();

    return(
        <React.Fragment>
                <AppBar
                    position='fixed'
                     sx={{  zIndex: (theme) => theme.zIndex.drawer + 1 ,  backgroundColor : /*Grey*/ "#3C4B64" }}
                     elevation={1}
                >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.appbarIcon}>
                            <FaBarsStaggered color="white" />
                        </IconButton>

                        <Typography variant={(screenSize == "md" || screenSize == "sm" || screenSize == "xs") ? "h6" : "h4"}  fontWeight={800} noWrap 
                        // component="div" 
                            // sx={{ flexGrow: 1 , display : { xs : 'none' , sm : 'block' } }}
                                sx={{flexGrow : 1 , cursor : 'pointer' }}
                            >Quick CV</Typography>
                        
                    </Toolbar>

                </AppBar>

                        <Toolbar />

            <Box m={3} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <Typography variant='h4'>Profile</Typography>
                <Button variant='contained' startIcon={<IoChevronBackCircle />} size='small' onClick={()=>{nav('/resumebuilder/dashboard');}} >Back</Button>
            </Box>


            <Box m={3}>
                <InputLabel>Name</InputLabel>
                <TextField
                  type="text"
                  size="small"
                  placeholder="Name"
                  fullWidth={true}
                  sx={{ marginBottom: 2 }}
                />

                <InputLabel>Role</InputLabel>
                    <TextField
                        type="text"
                        size="small"
                        placeholder="Name"
                        fullWidth={true}
                        sx={{ marginBottom: 2 }}
                    />

                
                <InputLabel>Comments</InputLabel>
                <textarea className="form-control mb-3" id="exampleFormControlTextarea1" rows={5}  ></textarea>




                <Button fullWidth={true} variant={'contained'} >Sumbit</Button>

            </Box>



        </React.Fragment>
    )
}

let stateToProps = (_state:any) => ({
    // resumes : state.storeUsers.resumes,
    // userInfoWithResumes: state.cvReducer.userInfoWithResumes
})

export default connect(stateToProps , (dispatch:any)=>({dispatch}))(ProfileScreen);

