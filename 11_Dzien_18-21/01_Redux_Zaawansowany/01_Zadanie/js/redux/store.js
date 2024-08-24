import {applyMiddleware, compose, createStore} from "redux";
import reducer from "../redux/reducers";


const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
);

export default store;
