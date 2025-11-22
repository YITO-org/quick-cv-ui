

const initialValues: any = {
  dynamicallyInformation: [{ name: 'hobbies', description: 'Coding , Boxing , Racing bike'}]
};

const dynamicSectionsReducer = (state = initialValues, action: any) => {
  switch (action.type) {
    // case "LANDING_RESUME_COUNT":
    //   state = { ...state, resumeCount: action.resumeCount }
    //   return state;
    case "ADD_NEW_INFO" :
      console.log(action);
      return state;
    case 'EDIT_INFO' :
      return state;
    case 'DELETE_INFO':
      return state;
    default:
      return state;
  }
}

export default dynamicSectionsReducer;


