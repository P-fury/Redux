import {combineReducers} from "redux";
import {ADD_ARTICLE, ADD_USER, DELETE_ARTICLE} from "./actions";

const userInitialState = {
    jan: 0,
    gosia: 0
}
const users = (state = userInitialState, {type, payload}) => {
    switch (type) {
        case ADD_ARTICLE: {
            const authorCounter = state[payload.userId]
            return {
                ...state,
                [payload.userId]: authorCounter + 1
            }
        }

        case ADD_USER: {
            return {
                ...state,
                [payload.userId]: 0
            }
        }
        case DELETE_ARTICLE: {
            const authorCounter = state[payload.userId]
            return{
                ...state,
                [payload.userId]: authorCounter - 1
            }
        }
        default: {
            return state;
        }
    }

}


const articles = (state = [], {type, payload}) => {
    switch (type) {
        case ADD_ARTICLE:
            return [
                ...state,
                {userId: payload.userId, title: payload.title},
            ]
        case DELETE_ARTICLE:
            return state.filter(article => {
                return !(article.userId === payload.userId && article.title === payload.title)
            });

        default: {
            return state;
        }
    }

}


export default combineReducers({
    users,
    articles
});
