"use client";
import React from "react";
import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from "@mui/material";
import { FaArrowDown, FaTrash } from "react-icons/fa6";

let CustomeAccordion : React.FC<any> = (props)=>{

  let { expanded, index, accordionOpenClose, remove, accordionHeaderName, children, holdCustomeAccordinanIndex } = props;

  return(
    <React.Fragment>
        <Accordion
            expanded={expanded === index}
            key={index}
            sx={{
              backgroundColor: "#f5f5f5", border: "1px solid #ccc", boxShadow: "none",mb:0.6,
              "&:before": { display: "none" }, // Removes the default shadow line
              "&.Mui-expanded": { margin: "0px" }, // Removes extra spacing when expanded
            }}
          >
            <AccordionSummary
                expandIcon={<FaArrowDown color='black' fontSize={15} />}
                 aria-controls="panel1bh-content" 
                id="panel1bh-header"
            >

          <Typography component="span" sx={{ width: '93%', flexShrink: 0 }} fontWeight={500} onClick={() => { expanded === index ? holdCustomeAccordinanIndex(false) : holdCustomeAccordinanIndex(index) ;expanded === index ? accordionOpenClose(false) : accordionOpenClose(index) }}>
            {accordionHeaderName + " " + (Number(index) + 1)}
          </Typography>

          <IconButton onClick={() => { remove(index) }} >
            <FaTrash color='red' fontSize={15} />
          </IconButton>

            </AccordionSummary>

        <AccordionDetails sx={{ backgroundColor: 'white',/* p: -20 */ }}>
          { children }
        </AccordionDetails>

        </Accordion>
    </React.Fragment>
  )
}

export default CustomeAccordion;