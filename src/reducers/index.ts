import { combineReducers } from "redux";
import storeUsers from "./usersReducers";
import sidebarStore from "./sidebarReducers";
import detailesReducer from "./detailesReducers";

const mainReducer = combineReducers({
        storeUsers : storeUsers,
        sidebarStore : sidebarStore,
        detailesReducer:detailesReducer
        
             
});

export default mainReducer;
