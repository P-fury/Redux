// Tu dodaj odpowiednie importy (createStore, akcje, reducer)

// import { createStore } from "./redux/customStore";
import {createStore} from "redux";
import counterReducer from "./redux/reducers/counter";
import {increment, decrement, reset} from "./redux/actions/counterActions";

export default function () {
    // Tutaj zaimplementuj aplikację counter wg. opisu zadania
    // W konsoli powinno pojawić się odpowiednio:
    //
    // from subscribe 5
    // from subscribe 3
    // 1
    const balance = document.querySelector(".balance");
    const amount = document.querySelector(".amount");
    const depositBtn = document.querySelector(".deposit");
    const withdrawBtn = document.querySelector(".withdraw");
    const resetBtn = document.querySelector(".reset");

    const {getState, dispatch, subscribe} = createStore(counterReducer, 0);

    balance.textContent = getState()
    subscribe(() => {
        balance.textContent = getState()
    });


    depositBtn.addEventListener("click", (e) => {
        dispatch(increment(+amount.value))
    });


    withdrawBtn.addEventListener("click", (e) => {
        if (getState() - +amount.value < 0) {
            return
        }
        dispatch(decrement(+amount.value))
    });

    resetBtn.addEventListener("click", (e) => {
        dispatch(reset(amount.value))
    })
}

