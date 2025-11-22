
import React from "react";
import {  Box, Button, Dialog, DialogContent, DialogTitle, Divider, IconButton, Typography } from "@mui/material";
import { IoIosCloseCircle } from "react-icons/io";


let CustomeDialog: React.FC<any> = (props)  => {

  let { children, header, showSection, showHideShowSectionModel, submit } = props;

  return(
    <React.Fragment>
      <Dialog
        open={showSection}
        onClose={showHideShowSectionModel}
        fullWidth={true}
        maxWidth={'md'}
      >
        <DialogTitle sx={{ fontSize: 18 }} display='flex' justifyContent='space-between' alignItems='center'>
          <Typography variant='h5' fontFamily='revert' fontWeight='bold' >
               { header }
          </Typography>
          <IconButton color='error' onClick={showHideShowSectionModel}>
            <IoIosCloseCircle size={30} />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent>

          {children}

        </DialogContent>

        <Divider />

        <Box display={'flex'} flexDirection={'row'} gap={2} m={2} justifyContent={'center'}>
              
          <Button variant='contained' color='info' size='small' onClick={submit} > submit </Button>
          <Button variant='contained' color='error' size='small' onClick={showHideShowSectionModel} > cancle  </Button>

        </Box>

      </Dialog>
    </React.Fragment>
  )
}


export default CustomeDialog;


