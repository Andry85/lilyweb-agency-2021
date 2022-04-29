import {ISMENU_OPENED, CHANGE_CATEGORY, ISUSER_LOGINED} from '../types/types';

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


export const changeUserStatus = () => {  
    return {  
        type : ISUSER_LOGINED,  
    }  
}  
