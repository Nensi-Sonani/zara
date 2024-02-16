import { ERROR, LOADING, SUCCESS } from "./ActionType";

let initialState ={
    isLoading: false,
    isError: false,
    data: { popular: [] }
}

export const popularReducer = (state=initialState,{type,payload}) =>{
    console.log(state);
    console.log(payload);
    switch (type) {
        case LOADING:
            return{
                ...state,
                isLoading:true
            }
        case SUCCESS:
            return{
                ...state,
                isLoading:false,
                data:payload
            }
        
        case ERROR:
            return{
                ...state,
                isError:true
            }
                
        default: return state
         
    }
}