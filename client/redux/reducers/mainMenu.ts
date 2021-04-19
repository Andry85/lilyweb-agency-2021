import {ISMENU_OPENED} from '../types/types';
  
const initialState = {  
    ismenuOpened : false 
}  
  
export default function (state = initialState, action) {  
    switch (action.type) {  
        case ISMENU_OPENED : {  
            return {  
                ...state,  
		        ismenuOpened : !state.ismenuOpened 
	        }  
        }   
        default :  
            return state;  
    }  
}