"use client";
import React, { useEffect } from "react";
import { Box, Button , /* Card, CardContent,*/ Grid, InputLabel , TextField, Typography , Paper , Stack , Alert} from "@mui/material";
import { CreateAndLoginProps, CreateAndLoginRequestObj } from "../interfaces/types";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { styles } from "../styles/styles";
import { clearUser, createAccount, storeOrResetTokken } from "../actions";

let CreateAndLoginAccount : React.FC<CreateAndLoginProps>= (props)=>{
   
    let { headerName , buttonName , redirectionScreen } = props
    let nav = useNavigate();

    let [email , setEmail] = React.useState<string|null>("")
    let [password , setPassword] = React.useState<string|null>("")
    let [alertMessage , setAlertMessage] = React.useState<String|null>("")
    let [alertMessageColor , setAlertMessageColor] = React.useState<String | any>("")

    //let x :any = document.cookie && document.cookie.split("=").length > 0 && document.cookie.split("=")[1] 

    useEffect(()=>{
        setEmail("");setPassword("");setAlertMessage("");setAlertMessageColor("")
        props.dispatch(clearUser())
    },[buttonName])

    let navgate = (path : string | any):void=>{
        nav(path)
    }



    function removeAlertMessage(){
        setTimeout(()=>{
            setAlertMessage("")
            setAlertMessageColor("")
        },9000)
    }

    function responceCallBack(res:any):void{
            if(res.status >= 200 && res.status <=299){
                setAlertMessageColor("success")
                setAlertMessage(res.data.message)
                if(res.data.message == "Account created succefully,Please check your email to Active your account." || res.data.message == "Please check your email,Otp has resend"){
                    setTimeout(()=>{
                        nav("/otp")
                    },2000)
                }else if(res.data.message == "login success"){
                    localStorage.setItem("tokken" , res.data.id);
                    props.dispatch(storeOrResetTokken(res.data.id))
                    setTimeout(()=>{
                        nav("/resumebuilder/dashboard")
                    },2000)

                }
            }else{
                setAlertMessageColor("error")
                setAlertMessage(res.data.message)
            }
        removeAlertMessage()

    }

    const createOrLoginAccount = ()=>{

        let data : CreateAndLoginRequestObj = {email , password};


        if((!email && !password) || !email || !password){
            setAlertMessage("Please enter email and password.")
            setAlertMessageColor("error")
            removeAlertMessage()
        }
        // else if(buttonName == "Login"){
        //     // login serives
        //     // this.props.d
            
        // }
        else{
            // create account and login
          props.dispatch(createAccount(buttonName == "Login" ? "apis/login" : "apis/createaccount",data,responceCallBack))
        }
    }

    //   "proxy" : "http://127.0.0.1:8008/apis",

    return(
        <React.Fragment>
            {/* <Box sx={styles.cardPosition} > */}
              <Grid container spacing={1} justifyContent="center" alignItems="center" sx={{ minHeight : '100vh' }} >
              {/* <Grid item  xs={12} sm={10} md={6} lg={4} xl={4}> */}
                {/* <Card>
                    <CardContent> */}
                    <Paper sx={{ p : 4 , borderRadius : 3 }} elevation={20} >
                    <Typography variant='h5' component="div" align="center" fontWeight={600} sx={{marginBottom : 2}} >{ headerName }</Typography>
                        {
                            alertMessage &&
                            <Stack sx={{width : '100%' , mb : 1 }} spacing={2}>
                                <Alert variant='filled' severity={alertMessageColor}>{alertMessage}</Alert>
                            </Stack>
                        }    
                        <Box>
                            <InputLabel>Email</InputLabel>
                            <TextField
                                type="text"
                                size="small"
                                placeholder="Email"
                                fullWidth={true}
                                value={email}
                                sx={{marginBottom : 2}}
                                onChange={(e)=>{setEmail(e.target.value)}}
                                />

                            <InputLabel>Password</InputLabel>
                            <TextField
                                type="password"
                                size="small"
                                placeholder="Password"
                                fullWidth={true}
                                value={password}
                                sx={{marginBottom : 2}}
                                onChange={(e)=>{setPassword(e.target.value)}}
                             />
                            <Button variant="contained" color="secondary" sx={styles.loginOrCreateButton} onClick={createOrLoginAccount}>
                                <Typography fontWeight={800} >{ buttonName }</Typography>
                            </Button>

                            <Box sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'center' , gap : 1 }} >
                                <Typography sx={{ cursor : 'pointer' }}  color='blue' onClick={()=>navgate(redirectionScreen)} >{redirectionScreen == "/login" ? "Login" : "Create Account"}</Typography>
                                <Typography sx={{ cursor : 'pointer' }} color='blue'>Forget Password</Typography>
                            </Box>

                        </Box>
                     </Paper>
                    {/* </CardContent>
                </Card> */}
              {/* </Grid> */}
              </Grid> 
            {/* </Box> */}
        </React.Fragment>
    )
}

// import React from 'react';
// import { Card, CardContent, CardMedia, Typography, Grid, useMediaQuery, useTheme } from '@mui/material';

// const CreateAccount = () : React.FC => {
//   // Use MUI's theme to determine screen size
//   const theme = useTheme();
//   const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Grid container spacing={2}>
//       <Grid item xs={12} sm={6} md={4}>
//         <Card>
//           <CardMedia
//             component="img"
//             height="140"
//             image="https://via.placeholder.com/150" // Sample image
//             alt="Card image"
//           />
//           <CardContent>
//             <Typography variant="h5" component="div">
//               Responsive Card
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               This is a simple card with a responsive layout.
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//     </Grid>
//   );
// };


const mapStateToProps = (state : any ) => ({
    // risedQueres : state.projectReducer.risedQueres_,
    // notesAndPartner: state.patientDocumentReducer.notesAndPartner,   
    
    sidebarData : state.sidebarStore
  });


  export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(CreateAndLoginAccount);