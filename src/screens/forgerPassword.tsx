"use client";
import React, { useEffect } from "react";
import { Box,Button,Grid,InputLabel,TextField,Typography,Paper,Stack , Alert } from "@mui/material";
import { CreateAndLoginProps } from "../interfaces/types";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import toast from 'react-simple-toasts';
import { styles } from "../styles/styles";
//import {  storeOrResetTokken } from "../actions";
import 'react-simple-toasts/dist/theme/info.css';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/dark.css';
import '../styles/toastfy.css';
import { fieldValidation } from "../utils";
import { forgetPassword } from "../actions";

let ForgetPassword: React.FC<CreateAndLoginProps> = (props) => {
  let { headerName, buttonName, createAccountAcreen, loginScreen } = props;
  let nav = useNavigate();


  let [email, setEmail] = React.useState<string | null>("");
  let [alertMessage, setAlertMessage] = React.useState<String | null>("");
  let [alertMessageColor, setAlertMessageColor] = React.useState<String | any>("");
  let [loginOrCreateAccountButtonDisible , setLoginOrCreateAccountButtonDisible] = React.useState<Boolean | any>(false);

  //let x :any = document.cookie && document.cookie.split("=").length > 0 && document.cookie.split("=")[1]

  useEffect(() => {
    setEmail("");
    setAlertMessage("");
    setAlertMessageColor("");
    // props.dispatch(clearUser());
  }, [buttonName]);

  let navgate = (path: string | any): void => {
    nav(path);
  };


  function responceCallBack(res: any): void {
    setLoginOrCreateAccountButtonDisible(false);
    if(res){
      if(res.status > 199 && res.status <= 299){
        toast(res.data.message, { duration: 3500, position: 'top-center', theme: "success" })
      }else{
        toast(res.data.message , { duration: 2500, position: 'top-center', theme: "my-toast-fail" })
      }
    }
  }

  const createOrLoginAccount = () => {

    if((!email) || (email && !fieldValidation(email , 'email'))){
      toast("Please Enter valid Email", { duration: 2500, position: 'top-center', theme: "my-toast-fail" })
    }else{
      setLoginOrCreateAccountButtonDisible(true)
        props.dispatch(forgetPassword({ email }, responceCallBack ))
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

            <InputLabel>Email</InputLabel>
            <TextField type="text" size="small" placeholder="Email" fullWidth={true} value={email} sx={{ marginBottom: 2 }} onChange={(e) => {setEmail(e.target.value);}}/>

            <Button variant="contained" color="secondary" sx={styles.loginOrCreateButton} onClick={createOrLoginAccount} disabled={loginOrCreateAccountButtonDisible}>
              <Typography fontWeight={800}>{buttonName}</Typography>
            </Button>

            <Box sx={{display: "flex", flexDirection: "column",alignItems: "center",gap: 1}}>
              <Typography sx={{ cursor: "pointer" }} color="blue" onClick={() => navgate(createAccountAcreen)}> Create Account </Typography>
              <Typography sx={{ cursor: "pointer" }} color="blue" onClick={() => navgate(loginScreen)}> Login </Typography>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  sidebarData: state.sidebarStore,
});

export default connect(mapStateToProps, (dispatch: any) => ({ dispatch }))(
  ForgetPassword
);
