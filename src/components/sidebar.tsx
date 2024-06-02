import { Box, Drawer  } from "@mui/material";
import React , { FC} from "react"
import {  useDispatch, useSelector } from "react-redux";
import { styles } from "../styles/styles";
import { siderbarProps } from "../interfaces/types";
import SidebarList from "./sidebarList";


let Sidebar : FC<siderbarProps> = (props : any)=>{

    let { screenSize } = props;

    function checkScreenSize(size:String):Boolean{
        // { xs : 'none' , sm:'none' , md : 'none' ,  lg : 'block' }
        if(size == 'xs' || size == 'sm' || size == 'md'){return false}
        return true 
    }

    return checkScreenSize(screenSize) ? <DesktopSidebar {...props} /> : <MobileSidebar {...props} />
    
} 

let DesktopSidebar : React.FC<siderbarProps> = (props) =>{
   // let { screenSize } = props
    return(
        <React.Fragment>
            <Drawer
             variant='permanent'
             open={true}
             sx={[styles.drowerStyles , styles.sidebarShowHide]} 
            >
                <SidebarList {...props} />
            </Drawer>
        </React.Fragment>
    )
}

let MobileSidebar : React.FC<siderbarProps> = (props) =>{
    //let { screenSize } = props
    // let [openClose ,  setOpenClone] = React.useState(true)

    let sidebarOpenOrClose  : any = useSelector((state:any):Boolean=>(state.sidebarStore.mobileSidebarOpenAndClose));
    let dispatch : any = useDispatch()  




    function closeSidebar(){
        dispatch({
            type : "MOBILE_SIDEBAR_OPEN_CLOSE",
            mobileSidebarOpenAndClose : !sidebarOpenOrClose //? sidebarOpenOrClose : !sidebarOpenOrClose 
        })
    }


    return(
        <React.Fragment>
            <Box onClick={closeSidebar} >
                <Drawer  open={sidebarOpenOrClose} sx={[styles.mobileDrowerStyles]}>
                    <SidebarList {...props} />
                </Drawer>
         </Box>
        </React.Fragment>
    )
}

export default Sidebar;