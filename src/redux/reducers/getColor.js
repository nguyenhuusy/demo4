import {GET_COLOR} from '../type';
import {GENERATE_TILES} from '../type';
const initialState={
    data:[]
}

export default function(state=initialState,action) {
    switch(action.type) {
        case GET_COLOR:
            const {rowIdx, columnIdx,newColor}=action.payload;
            state.data[rowIdx][columnIdx]=newColor;
            return{
                ...state,
                data:[ ...state.data ]
            }
        case GENERATE_TILES:
            return {
                ...state,
                data:action.payload
            }
        default:
            return state;

            
    }
        
}