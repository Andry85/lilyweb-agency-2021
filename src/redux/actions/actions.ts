import {ISMENU_OPENED, CHANGE_CATEGORY} from '../types/types';

export const changeMenuVisibility = () => {  
    return {  
        type : ISMENU_OPENED,  
    }  
}  

export const changeCategoryID = (id) => {  
    return {  
        type : CHANGE_CATEGORY,
        payload: id  
    }  
}  