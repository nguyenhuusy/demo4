import {SAVE_COLOR} from '../type';

export const saveColor=(data)=> dispatch => {
    
    return dispatch({
            type:SAVE_COLOR,
            payload:data
        })
    
}