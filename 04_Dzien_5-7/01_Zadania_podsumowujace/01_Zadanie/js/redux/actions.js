// export {
//   INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER,
//   increment, decrement, addProduct, changeOrder
// };

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const increment = () => ({
    type: INCREMENT,
    amount: 1
})


const decrement = () => ({
    type: DECREMENT,
    amount: 1
})


export {INCREMENT, increment, DECREMENT, decrement}