
import React from "react";
import { connect } from "react-redux";
import { Box, Button, Grid, IconButton, InputLabel, Paper, Stack, TextField, Typography } from "@mui/material";
import { IoAddCircle } from "react-icons/io5";
import { BsTrash3Fill } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import Res from "../resumes";
import { styles } from "../styles/styles";
// import { AddCustomeSection } from "../actions/sectionsActions";
import CustomeDialog from "../components/customeDialog";
import TextEditor from "../components/textEditor";
import { SectionInterface } from "../interfaces/types";
import { AddCustomeSection } from "../actions/sectionsActions";
import { setInformation } from "../actions";

let DynamicSections : React.FC<any> = (props)=>{

  // console.log(props.dynamicallyInformation);

  let { cv } = props;


  let [showSectionModel, setShowSectionModel] = React.useState(false)

  let [sectionInfo, setSectionInfo] = React.useState<SectionInterface | null | any >(null);
  let [ selectedIndex , setSelectedIndex ] = React.useState<number | null>(null);

  // console.log({cv});

  let addSection = ()=>{
    showHideShowSectionModel();
    setSectionInfo({ sectionName: '', sectionInformation : ''});
    setSelectedIndex(null);
    //    props.dispatch(AddCustomeSection(null))
  }

  let showHideShowSectionModel = () => {
    setShowSectionModel(!showSectionModel)
  }

  let change = (name : string , info : string)=>{
    let selectedInfo = { ...sectionInfo , [name] : info}
    setSectionInfo(selectedInfo);
  }

  let editerOnChange = (info : string) => {
    let selectedInfo = { ...sectionInfo, sectionInformation  : info }
    setSectionInfo(selectedInfo);
  }

  let submit = () => {
    
    let custome = JSON.parse(JSON.stringify(cv.custome));
    if (custome){
      if(selectedIndex){
        custome[selectedIndex] = sectionInfo 
      }else{
        custome.push(sectionInfo)
      }
    }else{
      custome = [sectionInfo]
    }

    props.dispatch(setInformation('custome' , custome ))
    setShowSectionModel(false);
    setSectionInfo(null);

  }

  let deleteSection = (index : number) => {
    let custome = JSON.parse(JSON.stringify(cv.custome));
    custome.splice(index,1);
    props.dispatch(setInformation('custome', custome))
  }

  let editSection = (index: number) => {
    showHideShowSectionModel();
    setSelectedIndex(index);
    let selectedIndex = JSON.parse(JSON.stringify(cv.custome[index]));
    setSectionInfo(selectedIndex)
  }



    return(
        <React.Fragment>
              
        {/* <ResumeHeader saveAndDownload={saveAndDownload} 
                      cv={cv} 
                      selectedTemplate={selectTempleate2}
                      /> */}

          <Grid container  columnGap={1} >
             <Grid xs={12} sm={12} md={12}  lg={5} xl={5}>
            <Paper sx={styles.detailes_box} >
              <Typography sx={{ mt: 1, mb: 1 }} textAlign='center' variant='h6' fontWeight='500' >{props.headerName}</Typography>

                <Stack direction='row' justifyContent='flex-end' display='flex' mr={1}>
                     <Button variant='contained' size='small' color='primary' startIcon={<IoAddCircle />} onClick={addSection} >Add</Button>
                </Stack>


            <Box margin={1} display={'flex'} flexDirection={'column'} rowGap={2} >
              {
                  cv?.custome?.map((e:any , index : number)=>
                    <Paper sx={{display : 'flex' ,
                     width : '100%' , alignItems : 'center' , justifyContent : 'space-between' , py : 1 , px : 2 , borderRadius : 2   }}  key={index} elevation={4} >
                      <Typography variant='subtitle2'  > {e.sectionName } </Typography>
                        <Box>
                        <IconButton size='small' color='secondary' onClick={() => { editSection(index) }} > <MdEdit /> </IconButton>
                        <IconButton size='small' color='error' onClick={() => { deleteSection(index) }} > <BsTrash3Fill /> </IconButton>                 
                        </Box>
                    </Paper>
                )
              }
            </Box>

                <CustomeDialog
                  header={"Add new section"}
                  showSection={showSectionModel}
                  showHideShowSectionModel={showHideShowSectionModel}
                  submit={submit}
                >

                <InputLabel sx={{color : 'black'}} > Section Header</InputLabel>
                 
                <TextField 
                  type="text"
                  size='small'
                  fullWidth={true}
                  name="sectionName"
                  value={sectionInfo?.sectionName}
                  onChange={(e) => change(e.target.name , e.target.value)}
                  sx={{ mb : 2 }}
               />

                <TextEditor 
                  value={sectionInfo?.sectionInformation}
                  editerOnChange={editerOnChange}
                />

                </CustomeDialog>


            </Paper>
             </Grid> 
 
             <Grid /* xs={12} sm={12} md={12} */ lg={6.9} xl={6.9} sx={{display : {sm : 'none' , xs : 'none' , md : 'none' , lg: 'block' , xl: 'block'}}}>
                        <Res />
             </Grid>
           </Grid>
        </ React.Fragment>
  )
}


  const mapStateToProps = (state : any ) => ({
    cv : state.cvReducer,
    user: state.storeUsers,
    landingPageCount: state.landingReducer,
    dynamicallyInformation: state.dynamicSectionsReducer.dynamicallyInformation
  });  
export default connect(mapStateToProps, (dispatch: any) => ({ dispatch }))(DynamicSections);


