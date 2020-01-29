import {GET_COLOR,GENERATE_TILES} from '../type';
import {randomColor} from '../../utils/common';
import {defaultcolor} from '../../utils/common';
export const getcolor =(data)=> dispatch=>{
    
    return dispatch({
        type:GET_COLOR,
        payload:data
    })
}

export const generate_tiles =(row,collumn) => dispatch =>{
    const data=[];
    for (let i=0;i<row;i++) {
        data[i]=[];
        for (let j=0;j<collumn;j++) {
            data[i][j]=defaultcolor;
        }
    }
    return dispatch({
        type:GENERATE_TILES,
        payload:data
    })

}
export const generate_tiles2 =(data) => dispatch =>{
    
    return dispatch({
        type:GENERATE_TILES,
        payload:data
    })

}