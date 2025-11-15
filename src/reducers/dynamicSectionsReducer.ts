

const initialValues: any = {
  dynamicallyInformation : []
};

const dynamicSectionsReducer = (state = initialValues, action: any) => {
  switch (action.type) {
    // case "LANDING_RESUME_COUNT":
    //   state = { ...state, resumeCount: action.resumeCount }
    //   return state;
    case "ADD_NEW_INFO" :
      console.log(state);
      return state;
    default:
      return state;
  }
}

export default dynamicSectionsReducer;


