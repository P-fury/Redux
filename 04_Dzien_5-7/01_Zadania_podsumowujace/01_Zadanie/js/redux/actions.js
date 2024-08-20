// export {
//   INCREMENT, DECREMENT, ADD_PRODUCT, CHANGE_ORDER,
//   increment, decrement, addProduct, changeOrder
// };

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const ADD_PRODUCTS = 'ADD_PRODUCTS';
const CHANGE_ORDER = 'CHANGE_ORDER';

const increment = () => ({
    type: INCREMENT,
    amount: 1
})


const decrement = () => ({
    type: DECREMENT,
    amount: 1
})


const addProducts = (product) => ({
    type: ADD_PRODUCTS,
    product,
})

const changeOrder = (index, direction) => ({
    type: CHANGE_ORDER,
    index,
    direction
})

export {INCREMENT, increment, DECREMENT, decrement, ADD_PRODUCTS, addProducts, CHANGE_ORDER, changeOrder};