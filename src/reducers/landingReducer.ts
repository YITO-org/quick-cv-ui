const initialValues: any = {
  resumeCount : null
};

const landingReducer = (state = initialValues, action: any) => {
  switch (action.type) {
    case "LANDING_RESUME_COUNT":
      state = { ...state, resumeCount: action.resumeCount }
      return state;
    default:
      return state;
  }
}

export default landingReducer;