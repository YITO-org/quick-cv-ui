"use client"
import axios from "axios";
import { clearLoader, setLoader } from ".";

// let config = {
//   headers : {
//     "Authorization" : localStorage.getItem("tokken")
//   }
// }

export let getResumes = ()=>(dispatch:any)=>{
  dispatch(setLoader())
  console.log(localStorage.getItem("tokken"));
  let config = {
    headers : {
      "Authorization" : localStorage.getItem("tokken")
    }
  }
  return axios.post<any>('/apis/getResumes' , {} , config)
        .then((res)=>{
          dispatch({
            type : 'GET_RESUMES',
            resumes : res?.data?.data 
          })
          // console.log(res.data.data)
        })
        .catch(()=>{
          dispatch({
            type : 'GET_RESUMES',
            resumes : [] 
          })
        }).finally(()=>{
          setTimeout(()=>{
            dispatch(clearLoader())
          },800)
        })
}


export const createMyResume = (resumeName : any , callBack : any)=>(dispatch:any)=>{
  let config = {
    headers : {
      "Authorization" : localStorage.getItem("tokken")
    }
  };

  return axios.post<any>('/apis/createResume' , {resumeName} , config).then((res)=>{
    callBack(res);
  })
  .catch((err)=>{
    // console.log(err)
    callBack(err);
  }).finally(()=>{
    dispatch(clearLoader())
  })
}

export const createMyCloneResume = (resumeId : number | any, newResumeName : string | any , callBack : any)=>(_dispatch : any)=> {
  // console.log(dispatch)
  let config = {
    headers : {
      "Authorization" : localStorage.getItem("tokken")
    }
  };
  return axios.post<any>('/apis/cloneResume',{resumeId , newResumeName} , config).then((res)=>{callBack(res);}).catch((err)=>{callBack(err);}).finally(()=>{})
}

export let deleteResume = (resumeId : number | null , resumeName : string | null , callBack : any)=>(dispatch:any)=>{

  let config = {
    headers : {
      "Authorization" : localStorage.getItem("tokken")
    }
  }

  return axios.post<any>('/apis/deleteResume' , {resumeId , resumeName} , config).then((res)=>{
    callBack(res)
  }).catch((err)=>{
    callBack(err)
  }).finally(()=>{
    dispatch(clearLoader())
  })
}

export let editResumeTesting = (resumeData : any) => (dispatch : any)=>{
  dispatch({
    type : 'GET_RESUME_FROM_SERVICE',
    resumeData : resumeData
});
}



export let editResume = (resumeId : number , callback : any)=>(dispatch : any)=>{
  let config = {
    headers : {
      "Authorization" : localStorage.getItem("tokken")
    }
  }
  return axios.post<any>('/apis/getEditResume' , {resumeId} , config).then((res)=>{
    dispatch({
        type : 'GET_RESUME_FROM_SERVICE',
        resumeData : res.data.data
    });
    callback(res);
  }).catch((err)=>{
    console.log({err})
  }).finally(()=>{

  })
}


export const gotoOrginalState = ()=>(dispatch : any)=>{
  dispatch({
    type : 'ORGINAL_STATE',
  }); 
}

export const updateResume = (cv : any)=>(_dispatch : any)=>{
  //console.log(dispatch);
  let config = {
    headers : {
      "Authorization" : localStorage.getItem("tokken")
    }
  }

  return axios.post<any>('/apis/updateResume' , cv , config).then((res)=>{
   // callBack(res)
   console.log(res);
  }).catch((err)=>{
    console.log(err);
    //callBack(err)
  }).finally(()=>{
    // dispatch(clearLoader())
  })
}

export const verifyResetPasswordTokken = (tokken: string | undefined | any , callBack : any) => (_dispatch : any)=>{
  return axios.get(`/apis/reset-password/${tokken}`).then((res: any) => { callBack(res)},(err)=>{callBack(err)})
}

export const resetPassword = (password : any , tokken : any , callBack : any)=>(_dispatch : any) => {
  let config = {
    headers: {
      "Authorization": tokken
    }
  }
  return axios.post('/apis/reset-password-email', { password } , config ).then((res: any) => { callBack(res) }).catch(err=>callBack(err)); 
}

export let holdCustomeAccordianNumber = (accordianValue : number | boolean)=>(dispatch : any)=>{
  dispatch({
    type: 'HOLD_ACCORDION_STATE',
    holdCustomeAccordianNumber: accordianValue
  })
}

