import { combineReducers } from 'redux';  
import mainMenuReducer from './mainMenu';  
import workTabs from './workTabs';  

  
  
export default combineReducers({  
    mainMenuReducer,
    workTabs  
});