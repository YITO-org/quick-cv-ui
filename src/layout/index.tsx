
import React , {useEffect} from "react"
import { Box , CssBaseline, Toolbar } from "@mui/material"
import Header from "../components/appbar";
import Sidebar from "../components/sidebar";
import {
  Breakpoint,
  Theme,
//  ThemeProvider, new
  useTheme,
  // createTheme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type BreakpointOrNull = Breakpoint | null;


const styles = {
  root : { display : 'flex' }
}


function useWidth() {
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
            {props.children}
          </Box>
          {/* </ThemeProvider> */}
      </Box>
    </React.Fragment>
  )
}


export default Layout;