import { COUNTER_DECREASE,COUNTER_INCREASE } from "../actionTypes/index";

export const increase = value =>({
    type: COUNTER_INCREASE,
    payload: {
        increament: value
    }
});
export const decrease = value =>({
    type: COUNTER_DECREASE,
    payload: {
        decreament: value
    }
});

