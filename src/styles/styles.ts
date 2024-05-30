// sidebar styles

// import { makeStyles } from "@mui/styles"
import {grey  } from "@mui/material/colors"
const drawerWidth = 190; // for medium screen and large screen
const mobileswidth = 250; // for small and extra small screen
let Grey = grey["800"]
let Gray2 = grey[400]

// export const sidebarStyles = makeStyles({
//    root : {
//       display : 'flex'
//    },  
//    sidebarSize : {
//         width : sidebarWidth,
//      },
//      sidebarPage : {
//       width : sidebarWidth,
//    },
// });

export const styles = {
   root : { display : 'flex' },

   // sidebar styles
   drowerStyles : {
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' , backgroundColor : Grey },
    },
    sidebarListColor : { color : 'white'} , 
    sidebarListSelectedColor : { color : 'black' , backgroundColor : 'whitesmoke'  ,  ':hover' : { color : 'black' , backgroundColor : 'white'} },
    sidebarShowHide :  {display : { xs : 'none' , sm:'none' , md : 'none' ,  lg : 'block' } },
    mobileDrowerStyles : {
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: mobileswidth, boxSizing: 'border-box' , backgroundColor : Grey },
    },

   // appbar styles
     appbarIcon :  { mr: 2 , display : { xs : 'block' , sm:'block' , md : 'block' ,  lg: 'none', xl: 'none'  } },


    // create account and login account screen
  cardPosition : { marginTop : "2%" },
  loginOrCreateButton : {width : "100%" , marginBottom : 2 },
  
  
  
  // detailes screen
  input_lable : {'&::first-letter' : {textTransform : 'uppercase'},fontWeight :'700',color : 'black'},
  detailes_box : {backgroundColor : 'white' , border : 0.5 , borderColor : Gray2 , height :'86vh' , overflow : 'scroll' , scrollbarWidth : 'none'},
  detailes_resume_box : {backgroundColor : 'white' , border : 0.5 , borderColor : Gray2 , height :'86vh' , overflow : 'scroll' , scrollbarWidth : 'none'}
}

