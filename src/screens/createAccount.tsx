"use client";
import React, { useEffect  } from "react";
import {
  Box,Button,Grid,InputLabel,TextField,Typography,Paper,Stack,Alert,InputAdornment
} from "@mui/material";
import { IoEye , IoEyeOff  } from "react-icons/io5";
import {
  CreateAndLoginProps,
  CreateAndLoginRequestObj,
} from "../interfaces/types";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import toast from 'react-simple-toasts';
import { styles } from "../styles/styles";
import { createAccount, storeOrResetTokken } from "../actions";
import 'react-simple-toasts/dist/theme/info.css';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/dark.css';
import '../styles/toastfy.css';
import { fieldValidation } from "../utils";
// import 'react-simple-toasts/dist/theme/.css';

let CreateAndLoginAccount: React.FC<CreateAndLoginProps> = (props) => {
  let { headerName, buttonName, redirectionScreen, forgetPasswordScreen } = props;
  let nav = useNavigate();

  let [name, setName] = React.useState<string | null>("");
  let [email, setEmail] = React.useState<string | null>("");
  let [password, setPassword] = React.useState<string | null>("");
  let [alertMessage, setAlertMessage] = React.useState<String | null>("");
  let [alertMessageColor, setAlertMessageColor] = React.useState<String | any>("");
  let [showPassword , setShowPassword] = React.useState<Boolean>(true);
  let [loginOrCreateAccountButtonDisible , setLoginOrCreateAccountButtonDisible] = React.useState<Boolean | any>(false);

  //let x :any = document.cookie && document.cookie.split("=").length > 0 && document.cookie.split("=")[1]

  useEffect(() => {
    setName("");
    setEmail("");
    setPassword("");
    setAlertMessage("");
    setAlertMessageColor("");
    setShowPassword(true);
    // props.dispatch(clearUser());
  }, [buttonName]);

  let navgate = (path: string | any): void => {
    nav(path);
  };


  function responceCallBack(res: any): void {
    if (res.status >= 200 && res.status <= 299) {
      setLoginOrCreateAccountButtonDisible(false);


      toast(res.data.message , { duration : 1500 , position : 'top-center' ,  theme : 'success'})
      
      if (
        res.data.message ==
          "Account created succefully,Please check your email to Active your account." ||
        res.data.message == "Please check your email,Otp has resend"
      ) {
        setTimeout(() => {
          nav("/otp");
        }, 2000);
      } else if (res.data.message == "login success") {
        localStorage.setItem("tokken", res.data.id);
        props.dispatch(storeOrResetTokken(res.data.id));
        setTimeout(() => {
          nav("/resumebuilder/dashboard");
        }, 2000);
      }
    } else {
      toast(res.data.message , { duration : 1500 , position : 'top-center' ,  theme : 'my-toast-fail'  })

      setLoginOrCreateAccountButtonDisible(false);
    }
  }

  const createOrLoginAccount = () => {
    let data: CreateAndLoginRequestObj = { email, password, name };
    
    if (
      (buttonName == "Login" && ((!email && !password) || !email || !password)) || // login
      (buttonName == "Create" && (!name || !email || !password)) // create-account
    ) {
      toast(buttonName == "Login" ? "Please enter Email and Password" : "Please enter Email, Password and Name" , 
        { position : 'top-center' ,  duration : 1500 , theme : "my-toast-fail" }  )
    }
    else if(!fieldValidation(email , 'email')){
      toast( 'Please enter valid Email.' , { position: 'top-center', duration: 1500, theme: "my-toast-fail" })
    }
    else {
      // create account and login
      setLoginOrCreateAccountButtonDisible(true);
      props.dispatch(
        createAccount(
          buttonName == "Login" ? "apis/login" : "apis/createaccount",
          data,
          responceCallBack
        )
      );
    }
  };

  //   "proxy" : "http://127.0.0.1:8008/apis",

  return (
    <React.Fragment>
      {/* <Box sx={styles.cardPosition} > */}
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >
        {/* <Grid item  xs={12} sm={10} md={6} lg={4} xl={4}> */}
        {/* <Card>
                    <CardContent> */}
        <Paper sx={{ p: 4, borderRadius: 3 }} elevation={20}>
          <Typography
            variant="h5"
            component="div"
            align="center"
            fontWeight={600}
            sx={{ marginBottom: 2 }}
          >
            {headerName}
          </Typography>
          {alertMessage && (
            <Stack sx={{ width: "100%", mb: 1 }} spacing={2}>
              <Alert variant="filled" severity={alertMessageColor}>
                {alertMessage}
              </Alert>
            </Stack>
          )}
          <Box>
            {buttonName == "Create" && (
              <>
                <InputLabel>Name</InputLabel>
                <TextField
                  type="text"
                  size="small"
                  placeholder="Name"
                  fullWidth={true}
                  value={name}
                  sx={{ marginBottom: 2 }}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </>
            )}
            <InputLabel>Email</InputLabel>
            <TextField
              type="text"
              size="small"
              placeholder="Email"
              fullWidth={true}
              value={email}
              sx={{ marginBottom: 2 }}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />

            <InputLabel>Password</InputLabel>
            <TextField
              type={showPassword ? "password" : "text"}
              size="small"
              placeholder="Password"
              fullWidth={true}
              value={password}
              sx={{ marginBottom: 2 }}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              InputProps={{
                endAdornment : (
                  <InputAdornment position="end">
                    {showPassword ? <IoEye onClick={()=>{setShowPassword(false)}} style={{cursor : 'default'}} /> : <IoEyeOff onClick={()=>{setShowPassword(true)}} style={{cursor : 'default'}} />}
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant="contained"
              color="secondary"
              sx={styles.loginOrCreateButton}
              onClick={createOrLoginAccount}
              disabled={loginOrCreateAccountButtonDisible}
              
            >
              <Typography fontWeight={800}>{buttonName}</Typography>
            </Button>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Typography
                sx={{ cursor: "pointer" }}
                color="blue"
                onClick={() => navgate(redirectionScreen)}
              >
                {redirectionScreen == "/login" ? "Login" : "Create Account"}
              </Typography>
              <Typography sx={{ cursor: "pointer" }} color="blue" onClick={() => navgate(forgetPasswordScreen)}>
                Forget Password
              </Typography>
            </Box>
          </Box>
        </Paper>
        {/* </CardContent>
                </Card> */}
        {/* </Grid> */}
      </Grid>
      {/* </Box> */}
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  // risedQueres : state.projectReducer.risedQueres_,
  // notesAndPartner: state.patientDocumentReducer.notesAndPartner,

  sidebarData: state.sidebarStore,
});

export default connect(mapStateToProps, (dispatch: any) => ({ dispatch }))(
  CreateAndLoginAccount
);
