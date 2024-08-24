import React from "react";
import Panel from "../Panel";

const AllProducts = ({products}) => {

  return (
    <>
      <h1 className="title">Wszystkie produkty</h1>
      <Panel iconName={"folder"} path={"products"} listElements={products} heading={false} footer={false} />
    </>
  );
};

export default AllProducts;
