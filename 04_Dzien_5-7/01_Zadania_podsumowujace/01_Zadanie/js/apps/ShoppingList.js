import {addProducts, changeOrder} from "../redux/actions";
import store from "../redux/store"


class ShoppingList {
    constructor(rootElement) {
        this.createUI(rootElement);
        this.reduxConnect();
        this.collectRefs();
        this.applyHandlers();
    }

    createUI(rootElement) {
        this.rootElement = rootElement;
        this.rootElement.innerHTML = `
      <div class="card-header">Lista zakupów</div>
      <div class="card-body">
        <form>
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Produkt..." />
            <div class="input-group-append">
              <button class="btn btn-outline-primary" type="submit" id="shop-add">Dodaj</button>
            </div>
          </div>
        </form>

        <ul class="list-group mt-3" id="shop-list">
        </ul>
      </div>
    `;
    }

    collectRefs() {
        this.form = this.rootElement.querySelector("form");
        this.shopList = this.rootElement.querySelector("#shop-list");
    }

    reduxConnect() {
        store.subscribe(() => {
            const state = store.getState();
            this.shopList.innerHTML = '';

            state.products.forEach((product, index) => {
                const listItem = document.createElement('li');
                listItem.className = 'list-group-item';
                listItem.innerHTML = `
                    <span>${product}</span>
                    <div>
                        <button class="btn btn-sm btn-outline-secondary up-btn">Up</button>
                        <button class="btn btn-sm btn-outline-secondary down-btn">Down</button>
                    </div>
                `;

                listItem.querySelector('.up-btn').addEventListener('click', () => {
                    store.dispatch(changeOrder(index, 'up'));
                });

                listItem.querySelector('.down-btn').addEventListener('click', () => {
                    store.dispatch(changeOrder(index, 'down'));
                });

                this.shopList.appendChild(listItem);
            });
        });
    }

    applyHandlers() {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            const product = this.form.querySelector("input[type='text']").value.trim();

            if (product) {
                store.dispatch(addProducts(product));
                this.form.querySelector("input[type ='text']").value = "";
            }
        });
    }

}

export default ShoppingList;
