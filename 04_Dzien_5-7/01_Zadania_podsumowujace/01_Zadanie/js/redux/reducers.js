import {INCREMENT, DECREMENT, ADD_PRODUCTS, CHANGE_ORDER} from "./actions"
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


const initialList = []

function products(state = initialList, action) {
    switch (action.type) {
        case ADD_PRODUCTS:
            return [...state, action.product]
        case CHANGE_ORDER:
            const {index, direction} = action;
            const newState = [...state]

            if (direction === "up" && index > 0) {
                [newState[index], newState[index - 1]] = [newState[index - 1], newState[index]];
            }

            if (direction === "down" && index < newState.length - 1) {
                [newState[index], newState[index + 1]] = [newState[index + 1], newState[index]];
            }

            return newState;

        default:
            return state;
    }
}


export default combineReducers({
    counter,
    products
});