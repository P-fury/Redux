// Zadanie z wykładowcą


import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducer";
import reducer from "./reducer";




const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;



// SIMPLE DEV LOGGER

// const logger = state=> next => action=>{
//     console.log(state.getState());
//     console.log(action);
//     next(action);
// }

// const store = createStore(reducer, applyMiddleware(logger);