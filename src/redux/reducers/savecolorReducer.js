import {SAVE_COLOR} from '../type';

const initialState = {
    data:[]
}

export default function(state=initialState,action) {
    switch (action.type) {
        case SAVE_COLOR:
            
        return {
                ...state,
                data:action.payload
                
            }
        default:
            return state;
    }
}