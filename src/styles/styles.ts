// sidebar styles

// import { makeStyles } from "@mui/styles"
import {grey  } from "@mui/material/colors"
const drawerWidth = 150; // for medium screen and large screen
const mobileswidth = 250; // for small and extra small screen
const SwipeableDrawerWidth = 400
// let Grey = grey["800"]
let Gray2 = grey[400]

export const styles = {
   root : { display : 'flex' },

   // sidebar styles
   drowerStyles : {
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' , backgroundColor : "#3C4B64" /*Grey*/ },
    },
    sidebarListColor : { color : 'white'} , 
    sidebarListSelectedColor : { color : 'black' , backgroundColor : 'whitesmoke'  ,  ':hover' : { color : 'black' , backgroundColor : 'white'} },
    sidebarShowHide :  {display : { xs : 'none' , sm:'none' , md : 'none' ,  lg : 'block' } },
    mobileDrowerStyles : {
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: mobileswidth, boxSizing: 'border-box', backgroundColor: /* Grey */ "#3C4B64" },
    },
    // reuseble drower width
    SwipeableDrawerStyles: {
    width: drawerWidth,
    flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: SwipeableDrawerWidth , boxSizing: 'border-box', backgroundColor: /* Grey */ "white" },
  },

   // appbar styles
     appbarIcon :  { mr: 2 , display : { xs : 'block' , sm:'block' , md : 'block' ,  lg: 'none', xl: 'none'  } },


    // create account and login account screen
  cardPosition : { marginTop : "2%" },
  loginOrCreateButton : {width : "100%" , marginBottom : 2 },
  
  
  
  // detailes screen
  input_lable : { /* '&::first-letter' : {textTransform : 'uppercase'}, */fontWeight :'450' , fontSize : 12.8 ,/*color : 'gray' */},
  detailes_box : {backgroundColor : 'white' , border : 0.5 , borderColor : Gray2 , height :'83vh' , overflow : 'scroll' , scrollbarWidth : 'none'},
  detailes_resume_box : {backgroundColor : 'white' , border : 0.5 , borderColor : Gray2 , height :'83vh' , overflow : 'scroll' , scrollbarWidth : 'none'},
  ordering_text : {display : 'flex' , flexDirection : 'column' , gap : 1.5  , alignItems : 'center' , mt : '4%' , mb : '4%'},

  // landing page header button
  navbar_go_app_button: {
    backgroundColor: "white", color: "black", fontWeight: "700", px: 2,py:0.4, display:"flex",alignItems:"center",
        "&:hover": {backgroundColor: "white",color: "#007bff"}
    },
    navbar:{
      backgroundColor:"black",color:"white",px:2,display: "flex", flexDirection: "row",justifyContent: "space-between",py:1
    },
    navbar_title:{
       fontWeight: '550'
    }
  
}

