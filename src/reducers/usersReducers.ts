const initialValues : any = {
    users : [],
    userId : null,
    userTokken : null,
    resumes : []
};

const storeUsers = (state = initialValues , action:any) => {
    switch(action.type){
        case "GET_USERS":
            state = {...state , users : action.data};
            return state;
        case "LOGIN_CREATE_OTP":
            state = {...state , userId : action.userId}
            return state;
        case "SET_REMOVE_TOKKEN":
            state = {...state , userTokken : action.tokken  }
            return state;
        case "RESET_USER_INFORMATION":
            state = {users : [],userId : null,userTokken : null,resumes : [] };
            return state;
        case "GET_RESUMES" :
            state = {...state , resumes : action.resumes}
            return state;
        default:
            return state;    
    }
}

export default storeUsers;