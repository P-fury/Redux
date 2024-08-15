// Tu powinny się znaleźć odpowiednie importy
import {createStore} from  "redux"

import {depositMoney, withdrawMoney} from "./redux/actions/bankActions";
import rootReducer from "./redux";

const bankApp = {

  start(rootElement) {
    this.createUI(rootElement);
    this.collectRefs();
    this.createStore();
    this.applyHandlers();
  },

  // Tej metody nie powinniśmy ruszać :)
  // Tworzymy tu szablon UI
  createUI(rootElement) {
    this.rootElement = rootElement;
    this.rootElement.innerHTML = `
      <div>
        <h1>Saldo:<span>0</span></h1>

        <div>
          $: <input type="number" id="money" />
          <button id="withdraw">Wypłać</button>
          <button id="deposit">Wpłać</button>
        </div>
      </div>
    `;
  },

  // Tutaj zbieramy referencje do odpowiednich elementów
  // Tej metody też nie trzeba zmieniać ;)
  collectRefs() {
    this.depositEl = this.rootElement.querySelector("#deposit");
    this.withdrawEl = this.rootElement.querySelector("#withdraw");
    this.saldoEl = this.rootElement.querySelector("h1 span");
    this.inputEl = this.rootElement.querySelector("input");
  },

  // W tej metodzie należy utworzyć nowy store
  // Następnie zapisać się na zmiany i na każdą z nich
  // zamienić wartość tekstu w elemencie `saldoEl` na wartość ze store + PLN
  // np. this.saldoEl.innerText = `wartosc-ze-store PLN`
  createStore() {
    this.store = createStore(rootReducer);
    this.saldoEl.innerText = `${this.store.getState().balance} PLN`;
    this.store.subscribe(() => {
      const currentState = this.store.getState().balance;
      this.saldoEl.innerText = `${currentState} PLN`;
    })

  },

  // W tej metodzie należy podpiąć pod odpowiednie przyciski event handlery,
  // które odpalą nam odpowiednie akcje
  // Skorzystaj z elementów:
  // this.withdrawEl
  // this.depositEl
  applyHandlers() {
    this.depositEl.addEventListener("click", (e) => {
      const amount = parseFloat(this.inputEl.value) || 0;
      if (amount > 0){
        this.store.dispatch(depositMoney(amount))

      }
    })
    this.withdrawEl.addEventListener("click", (e) => {
      const amount = parseFloat(this.inputEl.value) || 0;
      if (amount > 0){
        this.store.dispatch(withdrawMoney(amount))
      }
    })


  }
};

export default bankApp;
