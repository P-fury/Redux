// Miejsce na selektory:
// selectProducts - do wybierania/filtrowania produktów
// sum - do obliczania sumy
// pamiętaj aby je wyeksportować


// src/redux/selectors.js

export const selectProducts = (state, limit) => {
    if (limit === 'wszystkie' || !limit) {
        return state;
    }
    return state.filter(product => product.price <= parseFloat(limit));
};

export const sum = (state) => {
    return state.reduce((acc, next) => acc + parseFloat(next.price), 0);
};
