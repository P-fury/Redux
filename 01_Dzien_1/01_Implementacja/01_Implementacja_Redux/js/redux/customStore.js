/**
 * Zadanie z wykładowcą
 * Implementacja własnego Store
 */
const createStore = (reducer, initialState) => {

  let currentState = initialState;
  let subscribeListeners = [];

  return {
    getState() {
      return currentState;
    },
    subscribe(callback) {
      subscribeListeners.push(callback);

      return () => {
        subscribeListeners = subscribeListeners.filter(listener => listener !== callback);
      }
    },
    dispatch(action) {
      currentState = reducer(currentState, action);
      subscribeListeners.forEach(listener => listener());
    }
  }

}

export { createStore };
