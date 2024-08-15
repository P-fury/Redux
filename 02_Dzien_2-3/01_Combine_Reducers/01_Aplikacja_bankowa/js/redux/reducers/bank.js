// redux/reducers/bank.js
import { INCREMENT, DECREMENT } from "../actions/bankActions";

const initialState = 0;

function bankReducer(state = initialState, { type, payload }) {
    switch (type) {
        case INCREMENT:
            return state + (payload || 0);

        case DECREMENT:
            return state >= payload ? state - payload : state;

        default:
            return state;
    }
}

export default bankReducer;
