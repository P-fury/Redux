import {combineReducers} from 'redux';

const initialState = {
    loading: false,
    error: "",
    quote: null
}
const quote = (state = initialState, action) => {
    switch (action.type) {
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
                quote: action.payload

            }
        }
        case QUOTE_ERROR:{
            return{
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default:
            return state; // Zwróć niezmieniony stan w przypadku innych akcji
    }
};


export default combineReducers({
    quote,
});
