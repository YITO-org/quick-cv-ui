"use client";
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";
import { Box,Button,Grid,InputLabel,TextField,Typography,Paper,InputAdornment , Link } from "@mui/material";
import { CreateAndLoginProps } from "../interfaces/types";
import { connect } from "react-redux";
import toast from 'react-simple-toasts';
import { styles } from "../styles/styles";
import { IoEye, IoEyeOff } from "react-icons/io5";
//import {  storeOrResetTokken } from "../actions";
import 'react-simple-toasts/dist/theme/info.css';
import 'react-simple-toasts/dist/theme/success.css';
import 'react-simple-toasts/dist/theme/dark.css';
import '../styles/toastfy.css';
import { resetPassword, verifyResetPasswordTokken } from "../actions/resumeActions";

let ResetPassword: React.FC<CreateAndLoginProps> = (props) => {
  let { headerName, buttonName} = props;
  let { tokken } = useParams();

  let [loginOrCreateAccountButtonDisible , _setLoginOrCreateAccountButtonDisible] = React.useState<Boolean | any>(false);
  let [newPassword , setnewPassword] = React.useState<Boolean | any>("");
  let [reEnterNewPassword, setReEnterNewPassword] = React.useState<Boolean | any>("");
  let [showNewPasswordIcon , setShowPasswordIcon] = React.useState<boolean>(false);
  let [showRetypeNewPasswordIcon, setshowRetypePasswordIcon] = React.useState<boolean>(false);
  let [checkVerifyTokken, setCheckVerifyTokken] = React.useState<boolean>(false);
  let [hideScreen , setHideScreen] = React.useState<boolean>(false);


  useEffect(() => {
    props.dispatch(verifyResetPasswordTokken(tokken , getVerifyTokkenOrNot));
    localStorage.clear();
  }, []);

  let getVerifyTokkenOrNot = (response:any) : void => {
    if(response){
      if (response.status >= 199 && response.status <= 299){
        setCheckVerifyTokken(true)
      }
    }
  }


  // function responceCallBack(res: any): void {
  //   setLoginOrCreateAccountButtonDisible(false);
  //   if(res){
  //     if(res.status > 199 && res.status <= 299){
  //       toast(res.data.message, { duration: 3500, position: 'top-center', theme: "success" })
  //     }else{
  //       toast(res.data.message , { duration: 2500, position: 'top-center', theme: "my-toast-fail" })
  //     }
  //   }
  // }

  let resetCallBack = (response : any) : void => {
    if (response) {
      if (response.status >= 199 && response.status <= 299) {
        setHideScreen(true);
        localStorage.clear()
      }
    }
  }

  const createOrLoginAccount = () => {
    if (!newPassword || !reEnterNewPassword || newPassword.trim() == "" || reEnterNewPassword.trim() == ""){
        toast("Please fill all the fields.", { duration: 2000, position: 'top-center', theme: "my-toast-fail" });
        return;
    }else if(newPassword != reEnterNewPassword){
      toast("Passwords do not match.", { duration: 2000, position: 'top-center', theme: "my-toast-fail" })
      return;
    }else{
      props.dispatch(resetPassword(newPassword, tokken, resetCallBack))
    }

  };

  if (!checkVerifyTokken){
    return(
        <React.Fragment>
            <Typography component="div" variant="h6" sx={{ marginLeft : 2 , marginTop:2  }}>Invalid</Typography>
           <Typography variant="body2" sx={{ marginLeft : 2 }}>
           <Link href={"/"}>Home</Link>
          </Typography>
      </React.Fragment>
  )
  }

  if (hideScreen){
    return (
      <React.Fragment>
        <Typography component="div" variant="h6" sx={{ marginLeft : 2 , marginTop:2  }}>Password updated successfully</Typography>
        <Typography variant="body2" sx={{ marginLeft : 2 }}>
          <Link href={"/"}>Home</Link>
        </Typography>
      </React.Fragment>
    )
  }



  return (
    <React.Fragment>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="center"
        sx={{ minHeight: "100vh" }}
      >

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
          <Box>

            <InputLabel>New Password</InputLabel>
            <TextField type={showNewPasswordIcon ? "text" : "password"} size="small" placeholder="New Password" fullWidth={true} value={newPassword} sx={{ marginBottom: 2 }} onChange={(e) => { setnewPassword(e.target.value);}}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showNewPasswordIcon ? <IoEye onClick={() => setShowPasswordIcon(false)} style={{ cursor: 'default' }} /> : <IoEyeOff onClick={() => setShowPasswordIcon(true)} style={{ cursor: 'default' }} />}
                  </InputAdornment>
                )
              }}
            />

            <InputLabel>Confirm Password</InputLabel>
            <TextField type={showRetypeNewPasswordIcon ? "text" : 'password'} size="small" placeholder="Confirm Password" fullWidth={true} value={reEnterNewPassword} sx={{ marginBottom: 2 }} onChange={(e) => setReEnterNewPassword(e?.target?.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    {showRetypeNewPasswordIcon ? <IoEye onClick={() =>setshowRetypePasswordIcon(false)} style={{ cursor: 'default' }} /> : <IoEyeOff onClick={() =>setshowRetypePasswordIcon(true)} style={{ cursor: 'default' }} />}
                  </InputAdornment>
                )
              }}  
            />

            <Button variant="contained" color="secondary" sx={styles.loginOrCreateButton} onClick={createOrLoginAccount} disabled={loginOrCreateAccountButtonDisible}>
              <Typography fontWeight={800}>{buttonName}</Typography>
            </Button>

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
  ResetPassword
);
