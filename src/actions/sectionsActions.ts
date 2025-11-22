
"use client"
import axios from "axios";
import { clearLoader, setLoader } from ".";

// let config = {
//   headers : {
//     "Authorization" : localStorage.getItem("tokken")
//   }
// }

export let getResumes = () => (dispatch: any) => {
  dispatch(setLoader())
  console.log(localStorage.getItem("tokken"));
  let config = {
    headers: {
      "Authorization": localStorage.getItem("tokken")
    }
  }
  return axios.post<any>('/apis/getResumes', {}, config)
    .then((res) => {
      dispatch({
        type: 'GET_RESUMES',
        resumes: res?.data?.data
      })
      // console.log(res.data.data)
    })
    .catch(() => {
      dispatch({
        type: 'GET_RESUMES',
        resumes: []
      })
    }).finally(() => {
      setTimeout(() => {
        dispatch(clearLoader())
      }, 800)
    })
}



export let AddCustomeSection = (data : any) => (dispatch : any) => {
  return dispatch({
    type: 'ADD_NEW_CUSTOME_SECTION',
    custome: data
  })
}


