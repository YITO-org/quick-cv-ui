// import React, { useEffect, useState }  from "react"
// import {useNavigate , useLocation } from "react-router-dom";
// import { Toolbar , List , ListItem , ListItemButton , ListItemText, Typography, Divider, ListItemIcon , Box} from "@mui/material"
// //import routing from "../routing";
// import { BiSolidDetail } from "react-icons/bi";
// import { siderbarProps , siderbarIcon } from "../interfaces/types"
// import { styles } from "../styles/styles";
// import { connect , useSelector } from "react-redux";
// import { setSelectedIndexForSidebar } from "../actions";
// import routing from "../routing";


// let SidebarList : React.FC<siderbarProps>  = (props:any)=>{

//     //  console.log({props})

//     let navigate = useNavigate()
//     let location = useLocation();
//     let [routes , setRoutes] = useState<any>(routing);

//     let selector :any = useSelector((state:any)=>state.storeUsers);

// useEffect(()=>{
//        if(selector?.userTokken && routes[0].name !=  "Dashboard"){
//             routes = [{
//                 name : "Dashboard",
//                 path : "/resumebuilder/dashboard",
//                 icon : <BiSolidDetail /> // ()=>{ return <BiSolidDetail /> }   
//             },...routes]
//             setRoutes(routes)
//     }else if(!selector?.userTokken && routes[0].name ==  "Dashboard"){
//         routes = routing.splice(1 , routing.length-1);
//     }
//  },[selector?.userTokken])


//     // let { screenSize , sidebarData } = props

//   let selectRoute = (index : Number , path : String | any):void => {
//      // navigate("/resumebuilder" + path)
//      navigate(path)
//      props.dispatch(setSelectedIndexForSidebar(index))
//   }

// //   useEffect(()=>{
// //     routes = routing.splice(1 , routing.length-1);
// //      setRoutes(routes)
// //   },[!selector?.userTokken])


// //   if(!selector?.userTokken){
     
// //   }


//     return (
//         <React.Fragment>
//                 <Toolbar />
//                     <Box sx={{ overflow : 'auto' }} >
//                         <List>
//                             {
//                                routes && routes.length > 0 && routes.map((e:any,index:number)=>(
//                                     <ListItem key={index} disablePadding sx={styles.sidebarListColor} >
//                                         <ListItemButton  sx={ location.pathname ==  e.path ? styles.sidebarListSelectedColor : {}} onClick={()=>{selectRoute(index , e.path)}} >
//                                             <ListItemIcon>
//                                                 <Icon icon={e.icon} selected={location.pathname ==  e.path}  />
//                                             </ListItemIcon>
//                                             <ListItemText   primary={
//                                                 <Box>
//                                                     <Typography fontWeight={600} fontSize={location.pathname ==  e.path ? 18 : 15} >{e.name}</Typography>
//                                                 </Box>
//                                             } >

//                                             </ListItemText>
//                                         </ListItemButton>
//                                         <Divider />
//                                     </ListItem>
//                                 ))
//                             }
//                         </List>
//                     </Box>
//         </React.Fragment>
//     )
// }

// let Icon : React.FC<siderbarIcon> = (props) :any =>{
//     let { icon , selected } = props;
//     return(
//         <Box  sx={{ color : selected ? "black" : "white" , fontSize : 18 }} >
//             {icon}
//         </Box>
//     )
// }

// const mapStateToProps = (state : any ) => ({
//     sidebarData : state.sidebarStore
//   });
  
// export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(SidebarList);
//export default SidebarList

import React, { useEffect, useState }  from "react"
import {useNavigate , useLocation } from "react-router-dom";
import { Toolbar /*, List , ListItem , ListItemButton , ListItemText,*/ , Typography , Box /*, Divider, ListItemIcon , Box,*/,  CssBaseline } from "@mui/material"
//import routing from "../routing";
import { BiSolidDetail } from "react-icons/bi";
import { siderbarProps /*, siderbarIcon*/ } from "../interfaces/types"
import { styles } from "../styles/styles";
import { connect , useSelector } from "react-redux";
import { setSelectedIndexForSidebar } from "../actions";
import routing from "../routing";


let SidebarList : React.FC<siderbarProps>  = (props:any)=>{

    //  console.log({props})

    let navigate = useNavigate()
    let location = useLocation();
    let [routes , setRoutes] = useState<any>(routing);

    let selector :any = useSelector((state:any)=>state.storeUsers);

useEffect(()=>{
       if(selector?.userTokken && routes[0].name !=  "Dashboard"){
            routes = [{
                name : "Dashboard",
                path : "/resumebuilder/dashboard",
                icon : <BiSolidDetail /> // ()=>{ return <BiSolidDetail /> }   
            },...routes]
            setRoutes(routes)
    }else if(!selector?.userTokken && routes[0].name ==  "Dashboard"){
        routes = routing.splice(1 , routing.length-1);
    }
 },[selector?.userTokken])


    // let { screenSize , sidebarData } = props

  let selectRoute = (index : Number , path : String | any):void => {
     // navigate("/resumebuilder" + path)
     navigate(path)
     props.dispatch(setSelectedIndexForSidebar(index))
  }

//   useEffect(()=>{
//     routes = routing.splice(1 , routing.length-1);
//      setRoutes(routes)
//   },[!selector?.userTokken])


//   if(!selector?.userTokken){
     
//   }


    return (
        <React.Fragment>
            <Toolbar />
            <CssBaseline />
            <Box sx={{ml : 0.3 , mt : 2}} >
            {
                routes.map((e : any,index : any)=>{
                    return(
                        <Box key={index} 
                        display="flex"
                        alignItems="center"
                        gap={1.5}
                        paddingTop={0.5}
                        paddingBottom={0.5}
                        margin={0.2}
                        width={178}
                        paddingLeft={1}
                        borderRadius={1}
                        bgcolor={location.pathname ==  e.path ? 'white' : ''}
                        sx={{cursor : 'pointer' , ":hover" : {bgcolor : location.pathname !=  e.path ? '#757575' : '' }}}
                        onClick={()=>{selectRoute(index , e.path)}}
                        >
                            <Box color={location.pathname ==  e.path ? 'black' : 'white'}>{e.icon}</Box>
                               <Typography variant="body1" mt={0.25} color={location.pathname ==  e.path ? 'black' : 'white'}  >{e.name}</Typography>
                            </Box>
                    )
                })
            }
            </Box>
        </React.Fragment>
    )
}

// let Icon : React.FC<siderbarIcon> = (props) :any =>{
//     let { icon , selected , path } = props;
//     return(
//         <>
//         {icon}
//         </>
//     )
// }

const mapStateToProps = (state : any ) => ({
    sidebarData : state.sidebarStore
  });
  
  export default connect(mapStateToProps, (dispatch:any) => ({ dispatch }))(SidebarList);