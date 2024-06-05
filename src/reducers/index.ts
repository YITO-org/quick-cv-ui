import { combineReducers } from "redux";
import storeUsers from "./usersReducers";
import sidebarStore from "./sidebarReducers";
import cvReducer from "./cvReducers";

const mainReducer = combineReducers({
        storeUsers : storeUsers,
        sidebarStore : sidebarStore,
        cvReducer:cvReducer
        
             
});

export default mainReducer;
