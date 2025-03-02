// projectName,
//  role
//  description
export const typeOfOfObjects : any = {
    'education' : { "school/university" : "" , "startData" : "" , "endDate" : "" , "course" : "" , "CGP" : "" , "location" : "" , "description" : ""},
    'work_history' : { "employer" : "", "startDate" : "" , "endDate" : "" , "role" : "" , "location" : "" , "description" : "" },
    'projects' : {'projectName' : '' , 'role' : '' , 'description' : '' },
    'skills' : {'name' : "" , "skill set" : "" }
};

export const resumeInfoConvertJsonToString : any = (cv : any ) : any=>{
    //console.log(cv);
    let conertData = {...cv};

     conertData = {
        "name" : conertData.name,
        "designation" : conertData.designation,
        "phoneNumber" : conertData.phoneNumber,
        "email" : conertData.email,
        "dob" : conertData.DOB,

        "github" : conertData.github,
        "linkedin" : conertData.linkedin,

        "summary" : conertData.summary,
        
        "skills" : JSON.stringify(conertData.skills),
        "education" : JSON.stringify(conertData.education),
        "work_history" : JSON.stringify(conertData.work_history),
        "projects" : JSON.stringify(conertData.projects),
        "resumeId" : conertData.resumeId,
        "template" : conertData.selectedTemplate,
        "resumeArrangment" : JSON.stringify(conertData.resumeArrangment)

    };
   
    //  console.log(conertData);
    return conertData;
}


// email validation
export let fieldValidation = (value : string | null , type : string) : boolean  => {

  if(!value){
    return false;
  }

  if(type == 'email'){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value)
  }

  return false
  

  // if(type == 'email'){
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   return emailRegex.test(value);
  // }
  
  // return true;


}

