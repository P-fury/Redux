import React from "react";
import Panel from "../Panel";

// const fakeProducts = [
//   {id: 1, name: "Pomidory"},
//   {id: 2, name: "Przyprawa curry"},
//   {id: 3, name: "Olej"},
//   {id: 4, name: "Wołowina 500g"},
//   {id: 5, name: "Ziemniaki"}
// ];

const LastProducts = ({products}) => {
  return (
    <Panel
      title="Ostatnie produkty"
      theme="is-danger"
      path="products"
      iconName="pizza-slice"
      listElements={products} />
  );
};

export default LastProducts;