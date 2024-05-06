import { combineReducers } from "redux";
import storeUsers from "./usersReducers";
import sidebarStore from "./sidebarReducers";


const mainReducer = combineReducers({
        storeUsers : storeUsers,
        sidebarStore : sidebarStore
});

export default mainReducer;
