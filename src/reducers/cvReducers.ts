
const initialValue = {
    name : null,
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
    summary : null,
    education  : [{
                     "School/University" : "" , startDate : "" , 
                     endDate : "" , course : "" , 
                     CGP : "" , location : "" , 
                     description : "" }],
    work_history : [{ employer : "", startDate : "" , endDate : "" , role : "" , location : "" , description : "" }],
    projects : [{'projectName' : '' , 'role' : '' , 'description' : '' }],
    skills : [{'name' : "" , "skill set" : "" }],
    resumeArrangment : [ 'summary' , 'skills' ,  'education'  , 'work_history' , 'projects'],
    templates:['template-1' , 'template-2'],
    selectedTemplate : 'template-2'
}


let cvReducer = (state = initialValue , action : any) : any=>{
    // console.log(action)
    switch(action.type){
        case "SET_RESUME_INFORMATION":
            return {...state , [action.keyName] : action.data};
        case 'ADD_REMOVE_RECORD':
            // console.log({action});
            return {...state , [action.screenName] : action.data}
        default:
          return state;
    }
}

export default cvReducer

/*

education

 School/University
 startData , endDate
 course
 CGP , location , description 


work history

 employer,
 startData , endDate , role
 location
 description


project
 
 project name,
 role
 description

skills
 
 skills name
 description



*/