let initialState : any = {
    loader : false
}

let loaderReducer = (state = initialState , action : any)=>{
    switch(action.type){
        case 'SET_LOADER':
            return {...state , loader : true};
        case 'CLEAR_LOADER':
            return {...state , loader : false};
        default:
            return state;
    }
}

export default loaderReducer;
