// Tutaj zaimplementuj dwie akcje oraz action-creators
// Na koniec odkomentuj ostatnią linię aby wyeksportować odpowienie zmienne.

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET'

/*
{
  type: 'INCREMENT',
  payload: 33
}
*/

// const increment = (payload) => {
//   return {
//     type: INCREMENT,
//     payload // payload: payload
//   }
// }

const increment = (payload) => ({
    type: INCREMENT,
    payload // payload: payload
});

const decrement = (payload) => ({
    type: DECREMENT,
    payload // payload: payload
});


const reset = () => ({
    type: RESET,
});

export {INCREMENT, DECREMENT, RESET, increment, decrement, reset}
