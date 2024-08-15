// Tutaj zaimplementuj akcje do aplikacji bankApp

const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

const depositMoney = (n) => ({
    type: INCREMENT,
    payload: n
});

const withdrawMoney = (n) => ({
    type: DECREMENT,
    payload: n
});

export {INCREMENT, DECREMENT, withdrawMoney, depositMoney};
