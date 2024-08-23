// Miejsce na reducer


import {BEFORE_LUNCH, DECREMENT_COUNTER, LAUNCH_ROCKET} from "./actions";
import {combineReducers} from "redux";

const initialState = {
    launched: false,
    counter: 5

}


const launchReducer = (state = initialState, action) => {
    switch (action.type) {
        case BEFORE_LUNCH: {
            return {
                ...state,
            }
        }
        case DECREMENT_COUNTER:
            return {
                ...state,
                counter: state.counter > 0 ? state.counter - 1 : 0,
            }

        case LAUNCH_ROCKET:
            return {
                ...state,
                launched: true,

            }

        default:
            return state;
    }
}


export default combineReducers({
    launchReducer
})