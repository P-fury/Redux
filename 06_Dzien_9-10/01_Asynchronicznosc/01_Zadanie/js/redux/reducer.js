import {combineReducers} from 'redux';
import {QUOTE_FETCHING,QUOTE_FETCHED,QUOTE_ERROR} from "./actions";

const initialState = {
    loading: false,
    error: "",
    quote: null
}
const quote = (state = initialState, {type, payload}) => {
    switch (type) {
        case QUOTE_FETCHING: {
            return {
                ...state,
                loading: true,
            };
        }
        case QUOTE_FETCHED:{
            return{
                ...state,
                loading: false,
                quote: payload

            }
        }
        case QUOTE_ERROR:{
            return{
                ...state,
                loading: false,
                error: payload
            }
        }
        default:
            return state;
    }
};


export default combineReducers({
    quote,
});
