import {ISUSER_LOGINED} from '../types/types';
  
const initialState = {  
    isuserLogined : false 
}  
  
export default function (state = initialState, action) {  
    switch (action.type) {  
        case ISUSER_LOGINED : {  
            return {  
                ...state,  
		        isuserLogined : !state.isuserLogined 
	        }  
        }   
        default :  
            return state;  
    }  
}