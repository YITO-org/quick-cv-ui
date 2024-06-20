import { combineReducers } from "redux";
import storeUsers from "./usersReducers";
import sidebarStore from "./sidebarReducers";
import cvReducer from "./cvReducers";
import loderReducer from './loderReducer';

const mainReducer = combineReducers({
        storeUsers : storeUsers,
        sidebarStore : sidebarStore,
        cvReducer:cvReducer,
        loderReducer:loderReducer
             
});

export default mainReducer;
