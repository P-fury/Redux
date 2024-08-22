import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers'

const logger = state => next => action => {
    console.log(state.getState());
    console.log(action);

    next(action);
}

const store = createStore(reducers, applyMiddleware(logger))

export default store;
