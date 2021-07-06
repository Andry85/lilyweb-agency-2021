import {CHANGE_CATEGORY} from '../types/types';
  
const initialState = {  
    idCategory : 0
}  
  
export default function (state = initialState, action) {  
    switch (action.type) {  
        case CHANGE_CATEGORY : {  
            return {  
                ...state,  
		        idCategory : action.payload 
	        }  
        }   
        default :  
            return state;  
    }  
}