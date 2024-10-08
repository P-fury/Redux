/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */

import { combineReducers } from "redux";
import bankReducer from "./reducers/bank";
import counterReducer from "./reducers/counter";

const rootReducer = combineReducers({
    balance: bankReducer,
    counter: counterReducer
});

export default rootReducer;
