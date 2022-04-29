import { combineReducers } from 'redux';  
import mainMenuReducer from './mainMenu';  
import workTabs from './workTabs';  
import userStatusReducer from './userStatus'; 

  
  
export default combineReducers({  
    mainMenuReducer,
    workTabs,
    userStatusReducer
});