import { COUNTER_DECREASE,COUNTER_INCREASE } from "../actionTypes";

const initialstate ={
    value: 0
};

export default function (state = initialstate, action){
    switch (action.type){
        case COUNTER_INCREASE: {
            const {increament} = action.payload;
            return{
                /* Spread operator */
                ...state,
                value: state.value + increament
            };

            /* const temObj = {
                value: state.value
            }
            temObj.value += increament;
            return temObj.value; */
        }
        case COUNTER_DECREASE: {
            const {decreament} = action.payload;
            return{
                ...state,
                value: state.value - decreament
            };
        }
        default:
            return state;
    }
}