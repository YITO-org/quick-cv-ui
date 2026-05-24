
const initialValue = {
    name : null,
    tempName : 'Krishna',
    designation : null,
    tempDesignation : 'Software Engineers',
    DOB : '',
    tempDob : '09-Jan-1998',
    phoneNumber : null,
    tempPhoneNumber : "12345678910",
    email : null,
    tempEmail : 'krishna@email.com',
    github : null,
    tempGithub : 'krishna@github.com',
    linkedin : null,
    templinkedin : 'krishna@linkedin.com',
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
    templates:['Template-1' , 'Template-2','Template-3','Template-4','Template-5' , 'Template-6'],
    selectedTemplate : '',
    defaultTemplate : 'Template-1',
    resumeId : null,
    custome : null,
    userInfoWithResumes: {},
    downloadFunction : ()=>{},
    holdCustomeAccordianNumber : 0 
}


const resetValue = {
    name : null,
    tempName : 'krishna',
    designation : null,
    tempDesignation : 'Software Engineers',
    DOB : '',
    tempDob : '09-Jan-1998',
    phoneNumber : null,
    tempPhoneNumber : "12345678910",
    email : null,
    tempEmail : 'krishna@email.com',
    github : null,
    tempGithub : 'krishna@github.com',
    linkedin : null,
    templinkedin : 'krishna@linkedin.com',
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
  templates: ['Template-1', 'Template-2', 'Template-3','Template-4' , 'Template-5' , 'Template-6'],
    selectedTemplate : '',
    defaultTemplate : 'Template-1',
    resumeId : null,
    custome : null,
    downloadFunction : ()=>{},
    holdCustomeAccordianNumber : 0
}



let cvReducer = (state = initialValue , action : any) : any=>{
    //  console.log( "resumeData" , action.resumeData);
    switch(action.type){
        case "SET_RESUME_INFORMATION":
            return {...state , [action.keyName] : action.data};
        case 'ADD_REMOVE_RECORD':
            // console.log({action});
            return {...state , [action.screenName] : action.data}
        case 'DOWNLOAD_FUNCTION':
            return {...state , "downloadFunction" : action.method };
        case 'RESUME_ARRANGMENT':
            return {...state  , resumeArrangment : action.data };
        case 'GET_RESUME_FROM_SERVICE':
            // console.log({action});
             return {...state , 
                "name" : action?.resumeData?.name ? action.resumeData.name : state.name,
                "designation" : action?.resumeData?.designation ? action.resumeData.designation : state.designation,
                "DOB" : action?.resumeData?.dob ? action.resumeData.dob : state.DOB,
                "email" : action?.resumeData?.email ? action.resumeData.email : state.email,
               "resumeId" : action?.resumeData?.resumeId ? action.resumeData.resumeId : state.resumeId,

    "phoneNumber": action?.resumeData?.phoneNumber ? action?.resumeData?.phoneNumber : state.phoneNumber,
    "github" : action?.resumeData?.github ? action?.resumeData?.github : state.github,
    "linkedin" : action?.resumeData?.linkedin ? action?.resumeData?.linkedin : state.linkedin,

    "summary" : action?.resumeData?.summary ? action?.resumeData?.summary : state.summary,

     "skills" : action?.resumeData?.skills ? JSON.parse(action?.resumeData?.skills) : state.skills,
     "education" : action?.resumeData?.education ? JSON.parse(action?.resumeData?.education) : state.education,
     "work_history" : action?.resumeData?.work_history ? JSON.parse(action?.resumeData?.work_history) : state.work_history,
     "projects" : action?.resumeData?.projects ? JSON.parse(action?.resumeData?.projects) : state.projects,
     "selectedTemplate" : action?.resumeData?.template ? action?.resumeData?.template : "Template-1",
     "resumeArrangment" : action?.resumeData?.resumeArrangment ?  
                            JSON.parse(action?.resumeData?.resumeArrangment) : 
                            [ 'summary' , 'skills' ,  'education'  , 'work_history' , 'projects'],
     "custome" : action?.resumeData?.custome ? JSON.parse(action?.resumeData?.custome) : state.custome,
    };
        case "ORGINAL_STATE":
            // state = resetValue;
            // return state;
            return resetValue;
        case "HOLD_ACCORDION_STATE":
          return { ...state, holdCustomeAccordianNumber: action.holdCustomeAccordianNumber }
       case "USER_INFO_WITH_RESUMES":
          return { ...state, userInfoWithResumes: action.userInfoWithResumes }
       case "SET_TEMPLATE_FROM_DASHBOARD":
          return {...state , selectedTemplate : action.selectedTemplate }
    // custome sections.
      case "ADD_NEW_CUSTOME_SECTION":
        console.log(action);
        return state;
      case 'EDIT_INFO_CUSTOME_SECTION':
        return state;
      case 'DELETE_INFO_CUSTOME_SECTION':
        return state;
    // custome section
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

 // test -1

*/

// console.log('surya teja-1');

// {
//     "id": 6,
//     "userId": 11,
//     "resumeId": 19,
//     "name": "Krishna",
//     "designation": "Software Engineer",
//     "dob": "1998-01-09",
//     "phoneNumber": "1234567890",
//     "email": "krishna@emial.com",
//     "github": null,
//     "linkedin": null,
//     "summary": null,
//     "skills": null,
//     "education": null,
//     "work_history": null,
//     "projects": null,
//     "custome": null,
//     "createdAt": "2024-07-28T17:31:23.519Z",
//     "updatedAt": "2024-07-28T17:31:23.519Z"
// }



