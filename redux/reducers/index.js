import { combineReducers } from "redux";
import counter from './counter';

export default combineReducers({counter});

/*const allReducers = combineReducers({
    c: counter;
    xx: ....; (any reducers we have) (give it any name you want)
})

export default allReducers*/