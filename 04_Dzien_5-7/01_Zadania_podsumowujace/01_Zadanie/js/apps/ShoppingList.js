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
              <button class="btn btn-outline-primary" type="button" id="shop-add">Dodaj</button>
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

  reduxConnect() {}

  applyHandlers() {}
}

export default ShoppingList;
