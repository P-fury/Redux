/**
 * Tutaj zaimplementuj reducer do aplikacji counter
 * Pamiętaj aby na końcu wyeksportować zaimplementowaną funkcję:
 * export default counterReducer;
 */
import {DECREMENT, INCREMENT, RESET} from "../actions/counterActions";

const counterReducer = (state, { type, payload }) => {

  switch(type) {
    case INCREMENT: {
      return state + payload;
    }
    case DECREMENT: {
      return state - payload;
    }

    case RESET:{
      return 0
    }

    // !!!
    default: {
      return state;
    }
  }

}

export default counterReducer;
