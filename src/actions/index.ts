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





// export let getResumes = ()=>(dispatch : any)=>{
//     return axios.post<any>("apis/getResumes", [{}] , headers)
// }

