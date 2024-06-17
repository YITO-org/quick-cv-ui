import axios from "axios"
// import { headertypes } from "../interfaces/types"

// let headers : headertypes = {
//     tokken : localStorage.getItem('tokken')
// }

export let setSelectedIndexForSidebar = (index:Number)=>(dispatch:any)=>{
    dispatch({
        type : "SIDEBAR_SELECTED_INDEX",
        selectedIndex : index
    })
}

export let createAccount = ( path : string ,  data:any , callback:any )=>(dispatch:any)=>{
     axios.post<any>(path , data).then((res)=>{
        dispatch({
            type : 'LOGIN_CREATE_OTP',
            userId : res.data.id
        })
        callback(res)
     }).catch((err:any)=>{
        console.log({err})
        callback(err && err.response)
     }).finally(()=>{

     })
}


export let clearUser = ()=>(dispatch:any)=>{
    return dispatch({
        type : 'LOGIN_CREATE_OTP',
        userId : null
    })
}

export let otpAuthendation = (data : any , callback:any ):any=>{
    return axios.post<any>("apis/otpCheck" , data).then((res)=>{
        callback(res)
    }).catch((err)=>{
        callback(err && err.response)
    }).finally(()=>{

    })
}

export let storeOrResetTokken = (tokken :string  | null )=>(dispatch:any)=>{
    return dispatch({
        type : 'SET_REMOVE_TOKKEN',
        tokken : tokken
    })
}

export let logout = ()=>(dispatch:any)=>{
        dispatch({
            type : 'RESET_USER_INFORMATION',
        })
}


export let setInformation = (keyName : string , data : string)=>(dispatch : any)=>{
    // console.log({keyName , data})
    return dispatch({
        type : 'SET_RESUME_INFORMATION',
        data,
        keyName
    })
}

export let addNewRecord = (data : any , screenName : string , type : string)=>(dispatch : any)=>{
        return dispatch({
            type : type,
            data,
            screenName 
        })
}


export let getPdf = (data:any , callBack : any)=>(dispatch:any)=>{
    // console.log(data)
    // return axios.get<any>("/pdf" , {params : {name : 'surya' , age : '25'}}).then((res:any)=>{
    //     console.log(res.data)
    // }).catch((err:any)=>{
    //     console.log(err)
    // }).finally(()=>{

    // })
    
    
    
//     return axios.post<any>('http://localhost:4000/generatePdf',data)
//   .then(response => {
//     callBack(response)
//     // Handle successful response
//    // console.log(response.data); // Output the retrieved data
    
// })
//   .catch(error => {
//     // Handle error
//     console.error('Error fetching data:', error);
//   });

    axios({
        url : 'http://localhost:4000/generatePdf',
        method : 'POST',
        responseType : 'blob',
        data
    }).then(response => {
            callBack(response)
            // Handle successful response
           // console.log(response.data); // Output the retrieved data
            
        })
          .catch(error => {
            // Handle error
            console.error('Error fetching data:', error);
          });

}




// export let getResumes = ()=>(dispatch : any)=>{
//     return axios.post<any>("apis/getResumes", [{}] , headers)
// new }

