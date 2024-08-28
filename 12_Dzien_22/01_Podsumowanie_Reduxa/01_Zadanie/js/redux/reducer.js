

import {DELETETIME, SAVETIME, SET_COUNTER_VALUE, STARTCOUNTER, STOPCOUNTER} from './actions'
import {combineReducers} from "redux";

const initialState = {
    "isCounting": false,
    "value": 0
}

const counter = (state = initialState, action) => {
    switch (action.type) {
        case STARTCOUNTER:
            return{
                ...state,
                isCounting: true,
                value: state.value + 1
            }
            case STOPCOUNTER:{
                return{
                    ...state,
                    isCounting: false,
                }
            }
        case SET_COUNTER_VALUE:
            return{
                ...state,
                value: action.payload,
            }
        default:
            return state;
    }
}


const list = (state = [], action) => {
    switch (action.type) {
        case SAVETIME:{
            return[
                ...state,
                action.payload,
            ]

        }
        case DELETETIME: {
            return state.filter((item, index) => index !== action.payload);
        }
        default:
            return state;
    }

}

export default combineReducers({
    counter,
    list
})