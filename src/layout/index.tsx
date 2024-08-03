import React , {useEffect} from "react"
import { Backdrop, Box , CircularProgress, CssBaseline, Toolbar, Typography } from "@mui/material"
import {
  Breakpoint,
  Theme,
//  ThemeProvider, new
  useTheme,
  // createTheme,
} from '@mui/material/styles';
import {useSelector} from 'react-redux';
import Header from "../components/appbar";
import Sidebar from "../components/sidebar";
import useMediaQuery from '@mui/material/useMediaQuery';

type BreakpointOrNull = Breakpoint | null;


const styles = {
  root : { display : 'flex' }
}


export function useWidth() {
  const theme: Theme = useTheme();
  const keys: readonly Breakpoint[] = [...theme.breakpoints.keys].reverse();
  return (
    keys.reduce((output: BreakpointOrNull, key: Breakpoint) => {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const matches = useMediaQuery(theme.breakpoints.up(key));
      return !output && matches ? key : output;
    }, null) || 'xs'
  );
}

// const theme = createTheme();

let Layout:React.FC<any> = (props : any) =>{

  const width = useWidth();
  
  const selector = useSelector((sel:any)=>sel.loderReducer);

  // console.log(selector);

  // let [openLoader , setOpenLoader] = React.useState(false);

  
  useEffect(()=>{

    // dispatch hook

  },[width])


  return(
    <React.Fragment>
      <Box sx={styles.root}>
        <CssBaseline />
          <Header screenSize={width} />
          <Sidebar screenSize={width} />
          {/* <ThemeProvider theme={theme}> */}
          <Box component="main" sx={{ flexGrow: 1 , p: 1 }}>
            <Toolbar />
              <Box>
                <Backdrop
                  sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                  open={selector.loader}
                  onClick={()=>{}}
                  >
                      <Box sx={{ display : 'flex' , flexDirection : 'column'}}>
                       <CircularProgress color='inherit' />
                       <Typography>Loading</Typography>
                      </Box>

                  </Backdrop>
              </Box>
            {props.children}
          </Box>
          {/* </ThemeProvider> */}
      </Box>
    </React.Fragment>
  )
}


export default Layout;