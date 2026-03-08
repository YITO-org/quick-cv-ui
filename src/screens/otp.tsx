"use client";
import React, { useEffect } from "react";
import { Box, Button , /* Card, CardContent,*/ Grid, InputLabel , TextField, Typography , Paper , Stack , Alert} from "@mui/material";
import { CreateAndLoginProps } from "../interfaces/types";
import { useNavigate , Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { styles } from "../styles/styles";
import { otpAuthendation, storeOrResetTokken } from "../actions";

let Otp : React.FC<CreateAndLoginProps>= (props)=>{

   // console.log(props.storeUsers)

    let { headerName , buttonName , redirectionScreen , storeUsers } = props
    let nav = useNavigate();

    let [otp , setOtp] = React.useState<string|null|any>("")
    let [alertMessage , setAlertMessage] = React.useState<String|null>("")
    let [alertMessageColor , setAlertMessageColor] = React.useState<String | any>("")

    // if(!storeUsers.userId){
    //     return <Navigate to={"/createaccount"} />
    // }


    let navgate = (path : string | any):void=>{
        nav(path)
    }

    useEffect(()=>{
         setOtp("")
        // setPassword("")
    },[buttonName])


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
            if(res.data.message == "Account activated successfull"){
                localStorage.setItem("tokken" , res.data.tokken);
                props.dispatch(storeOrResetTokken(res.data.tokken));
                setTimeout(()=>{navgate(redirectionScreen)},2000)
            }
        }else{
            setAlertMessageColor("error")
            setAlertMessage(res.data.message)
        }
        removeAlertMessage()
    }

    const submitOtp = ()=>{

        if(!otp){
            setAlertMessageColor("error")
            setAlertMessage("Please enter OTP")
            removeAlertMessage()
        }else{  
            props.dispatch(otpAuthendation({otp : Number(otp) , userid : storeUsers.userId}, responceCallBack))
        }
    }

    //   "proxy" : "http://127.0.0.1:8008/apis",

    return(
        <React.Fragment>
            {/* <Box sx={styles.cardPosition} > */}

                  <Grid
                    container
                    spacing={1}
                    justifyContent="center"
                    alignItems="center"
                    sx={{ minHeight: "100vh" }}
                  >

              {/* <Grid container spacing={1} justifyContent="center" alignItems="center">
              <Grid item  xs={12} sm={10} md={6} lg={4} xl={4}> */}
                {/* <Card>
                    <CardContent> */}
                    <Paper sx={{ p : 4 , borderRadius : 5 }} elevation={15} >
                    <Typography variant='h4' component="div" align="center" fontWeight={600} sx={{marginBottom : 2}} >{ headerName }</Typography>
                        {
                            alertMessage &&
                            <Stack sx={{width : '100%' , mb : 1 }} spacing={2}>
                                <Alert variant='filled' severity={alertMessageColor}>{alertMessage}</Alert>
                            </Stack>
                        }    
                        <Box>
                            <InputLabel>OTP</InputLabel>
                            <TextField
                                type="text"
                                size="small"
                                placeholder="OTP"
                                fullWidth={true}
                                value={otp}
                                sx={{marginBottom : 2}}
                                onChange={(e)=>{setOtp(e.target.value)}}
                                />
                            <Button variant="contained" color="secondary" sx={styles.loginOrCreateButton} onClick={submitOtp}>
                                <Typography fontWeight={800} >{ buttonName }</Typography>
                            </Button>

                            <Box sx={{display : 'flex' , flexDirection : 'column' , alignItems : 'center' , gap : 1 }}>
                                {/* <Typography color='blue' onClick={()=>navgate(redirectionScreen)} >{redirectionScreen == "/login" ? "Login" : "Create Account"}</Typography>
                                <Typography color='blue'>Forget Password</Typography> */}
                            </Box>

                        </Box>
                     </Paper>
                    {/* </CardContent>
                </Card> */}
              {/* </Grid>
              </Grid> */}

            {/* </Box> */}

            </Grid>
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
    
    storeUsers : state.storeUsers
  });


  export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(Otp);