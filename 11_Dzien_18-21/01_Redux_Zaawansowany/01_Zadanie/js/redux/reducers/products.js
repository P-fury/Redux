import {ADD_PRODUCT} from "../actions/products";

const fakeProducts = [
    { id: 1, name: "Pssomidory" },
    { id: 2, name: "Przyprawa curry" },
    { id: 3, name: "Olej" },
    { id: 4, name: "Wołowina 500g" },
    { id: 5, name: "Ziemniaki" },
    { id: 6, name: "Pomidory" },
    { id: 7, name: "Przyprawa curry" },
    { id: 8, name: "Olej" },
    { id: 9, name: "Wołowina 666g" },
    { id: 10, name: "Buraki" },
];

const addProduct = (state = fakeProducts ,{type,payload}) => {
    switch (type) {
        case ADD_PRODUCT: {
            const id = state.length + 1
            return [...state, {id, name:payload.name}];
        }
        default:{
            return state;
        }
    }
}



export default addProduct;