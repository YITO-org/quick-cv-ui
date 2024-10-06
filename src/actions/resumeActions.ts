"use client"
import axios from "axios";
import { clearLoader, setLoader } from ".";

let config = {
  headers : {
    "Authorization" : localStorage.getItem("tokken")
  }
}

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

// export let editResume = (id:number)=>(dispatch:any)=>{
//   alert(id);
// }


export let deleteResume = (resumeId : number , resumeName : string , callBack : any)=>(dispatch:any)=>{

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

  }).finally(()=>{

  })
}


export const gotoOrginalState = ()=>(dispatch : any)=>{
  dispatch({
    type : 'ORGINAL_STATE',
  }); 
}

export const updateResume = (cv : any)=>(dispatch : any)=>{
  let config = {
    headers : {
      "Authorization" : localStorage.getItem("tokken")
    }
  }

  return axios.post<any>('/apis/updateResume' , cv , config).then((res)=>{
   // callBack(res)
   console.log(res);
  }).catch((err)=>{
    //callBack(err)
  }).finally(()=>{
    // dispatch(clearLoader())
  })


}


