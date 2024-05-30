
const initialValue = {
    name : 'Kavali Surya Teja',
    tempName : 'krishna',
    designation : null,
    tempDesignation : 'Software Engineers',
    dob : '',
    tempDob : '09-Jan-1998',
    phoneNumber : null,
    tempPhoneNumber : 12345678910,
    email : null,
    tempEmail : 'krishna@email.com',
    github : null,
    tempGithub : 'krishna@github.com',
    linkdin : null,
    tempLinkdin : 'krishna@linkdin.com',
    summary : null 
}


let detailesReducer = (state = initialValue , action : any) : any=>{
    switch(action.type){
        case "SET_RESUME_INFORMATION":
            return {...state , [action.name] : action.data};
        default:
          return state;
    }
}

export default detailesReducer

