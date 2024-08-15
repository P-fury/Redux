import {INCREMENT, DECREMENT} from "../actions/counterActions";

const initialState = 0
;

function counterReducer(state = initialState, {type, payload}) {
  switch (type) {
    case INCREMENT:
      return state + (payload || 0);

    case DECREMENT:
      if (state < payload) {
        return state;
      }
      return state - (payload || 0);

    default:
      return state;
  }
}
export default counterReducer;
