import React from "react";
import { useNavigate } from "react-router-dom";
import { AppBar , Box, Button, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
// import {grey /*, yellow*/ } from "@mui/material/colors";
import { FaBarsStaggered } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";
import {  useDispatch, useSelector , connect } from "react-redux";
import { styles } from "../styles/styles";
import { logout } from "../actions";
import { gotoOrginalState } from "../actions/resumeActions";


let Header : React.FC<any> = (props) =>{
    // let Grey = grey["800"]
    // let Yellow = yellow["800"]

    let {screenSize} = props;
    // alert(screenSize);

    let sidebarOpenOrClose  : any = useSelector((state:any):Boolean=>(state.sidebarStore.mobileSidebarOpenAndClose));
    let selector :any = useSelector((state:any)=>state.storeUsers);
    const [anchorEl , setAnchorEl] = React.useState<null | HTMLElement>(null);
    let dispatch : any = useDispatch()  
    let nav = useNavigate();

    function closeSidebar(){
        dispatch({
            type : "MOBILE_SIDEBAR_OPEN_CLOSE",
            mobileSidebarOpenAndClose : !sidebarOpenOrClose //? sidebarOpenOrClose : !sidebarOpenOrClose 
        })
    }

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const logout_ = ()=>{
        props.dispatch(logout())
        props.dispatch(gotoOrginalState())
        localStorage.removeItem('tokken')
        nav("/")

    }

    const moveToHomePage = ()=>{
        nav("/");
    }


    return(
        <React.Fragment>
                <AppBar
                    position='fixed'
                     sx={{  zIndex: (theme) => theme.zIndex.drawer + 1 ,  backgroundColor : /*Grey*/ "#3C4B64" }}
                     elevation={1}
                >
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={styles.appbarIcon} onClick={closeSidebar} >
                            <FaBarsStaggered color="white" />
                        </IconButton>

                        <Typography variant={(screenSize == "md" || screenSize == "sm" || screenSize == "xs") ? "h6" : "h4"}  fontWeight={800} noWrap 
                        // component="div" 
                            // sx={{ flexGrow: 1 , display : { xs : 'none' , sm : 'block' } }}
                                sx={{flexGrow : 1 , cursor : 'pointer' }} onClick={moveToHomePage}
                            >Quick CV</Typography>
                            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                                {
                                    selector.userTokken &&
                                        <IconButton size='large' color='inherit' onClick={handleMenu}>
                                                <CgProfile />
                                        </IconButton>
                                }

                              {
                                  !selector.userTokken &&
                                    <Button variant="text" color='inherit' onClick={() => nav("/login")} >Login</Button>
                              }

                            <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={Boolean(anchorEl)}
                                    onClose={handleClose}
                                    >
                                    <MenuItem onClick={logout_}>Logout</MenuItem>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                </Menu>

                          </Box>
                        
                    </Toolbar>

                </AppBar>
        </React.Fragment>
    )
}


const mapStateToProps = (state : any ) => ({
    // risedQueres : state.projectReducer.risedQueres_,
    // notesAndPartner: state.patientDocumentReducer.notesAndPartner,    
    sidebarData : state.sidebarStore
});

export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(Header)








