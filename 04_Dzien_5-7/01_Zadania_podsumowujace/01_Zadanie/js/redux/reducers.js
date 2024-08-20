import {INCREMENT, DECREMENT} from "./actions"
import {combineReducers} from "redux";


const initialState = 0

function counter(state = initialState, {type, amount}) {
    switch (type) {
        case INCREMENT:
            return state + amount

        case DECREMENT:
            return state - amount
        default:
            return state;
    }
}


export default combineReducers({
    counter,
    // products zad 2
});