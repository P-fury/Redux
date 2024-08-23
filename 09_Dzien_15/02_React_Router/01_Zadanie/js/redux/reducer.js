// Reducer zwracający tablicę produktów


import {ADD_PRODUCT, REMOVE_PRODUCT} from "./actions";



const reducer = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_PRODUCT: {
            return [...state, payload]
        }
        case REMOVE_PRODUCT: {
            return state.filter(product => product.name !== payload)
        }
        default:
            return state;
    }
}

export default reducer