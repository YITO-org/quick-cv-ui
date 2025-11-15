import { combineReducers } from "redux";
import storeUsers from "./usersReducers";
import sidebarStore from "./sidebarReducers";
import cvReducer from "./cvReducers";
import loderReducer from './loderReducer';
import landingReducer from "./landingReducer";
import dynamicSectionsReducer from "./dynamicSectionsReducer";

const mainReducer = combineReducers({
        storeUsers : storeUsers,
        sidebarStore : sidebarStore,
        cvReducer:cvReducer,
        loderReducer:loderReducer,
        landingReducer: landingReducer,
       dynamicSectionsReducer : dynamicSectionsReducer
});

export default mainReducer;