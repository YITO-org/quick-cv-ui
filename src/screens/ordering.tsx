"use client";
import { Typography , Box } from "@mui/material";
import React, { useRef } from "react";
import {connect} from "react-redux";
import { styles } from "../styles/styles";
import { resumeRearrangment } from "../actions";
// import { TfiLayoutGrid2 } from "react-icons/tfi";

let Ordering : React.FC<any> = (props)=>{


    let [order , setOrdering ] = React.useState([...props.resumeArrangment])


    let dragField = useRef<number>(0)
    let dragOverField = useRef<number>(0)


//    React.useEffect(()=>{console.log(order)},[])

    let filterSpecialCharacter = (str : string)=>{
        return str.split('_').join(' ');
    }
    let reOrder = ()=>{
        let fields = [...order]
        let start = fields[dragField.current];
        fields[dragField.current] = fields[dragOverField.current];
        fields[dragOverField.current] = start;
        setOrdering(fields);
        props.dispatch(resumeRearrangment(fields));
    }

    return(
        <React.Fragment>
            <Box sx={styles.ordering_text} >
            {
                order.map((e,index)=><Box sx={{display : 'flex' , alignItems : 'center' ,  gap : 1 , border : 2 ,   backgroundColor : '#C7BFBF'  , textAlign : 'center' , width : 180 , borderRadius : 2 , borderColor : '#5C5151' , p : 0.5}}  key={index} 
                                           draggable 
                                           onDragStart={()=>(dragField.current = index)}
                                           onDragEnter={()=>(dragOverField.current = index)}
                                           onDragEnd={()=>{reOrder()}}
                                          >
                                            {/* <TfiLayoutGrid2 style={{marginLeft : 12}} />
                                             */}

                                                <Typography fontWeight={600} sx={{ fontSize : 14 , ml : 1.5 , bgcolor : '#F0E6E6' , px:1 , py:0.3 , borderRadius : 6 , border : 1 , borderColor : '#BA9393' }} textAlign={'center'} alignContent={'center'} alignItems={'center'} >
                                                    {index}
                                                </Typography>

                                            <Typography fontWeight={600} >{filterSpecialCharacter(e)}</Typography></Box>)
            }
            </Box>
        </React.Fragment>
    )
}


let stateToProps = (state:any) => ({
    resumeArrangment : state.cvReducer.resumeArrangment
})

export default connect( stateToProps , (dispatch:any)=>({dispatch}))(Ordering);
