// import { sidebarReduxProps } from "../interfaces/types"

const initialValues   = {
    mobileSidebarOpenAndClose : false,
    selectedIndex : 0
}

let sidebarStore = (state = initialValues , action : any)=>{
    switch(action.type){
        case 'MOBILE_SIDEBAR_OPEN_CLOSE':
            return {...state , mobileSidebarOpenAndClose : action.mobileSidebarOpenAndClose}
            case 'SIDEBAR_SELECTED_INDEX':
                return {...state , selectedIndex : action.selectedIndex}
        default:
            return state
    }
}

export default sidebarStore




