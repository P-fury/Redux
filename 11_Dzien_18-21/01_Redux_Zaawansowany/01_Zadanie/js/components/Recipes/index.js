import React from "react";
import Panel from "../Panel";

const AllRecipes = ({recipes}) => {
  return (
    <>
      <h1 className="title">Wszystkie przepisy</h1>
      <Panel iconName={"folder"}
             path={"recipes"}
             listElements={recipes}
             heading={false}
             footer={false}
      />
    </>
  );
};

export default AllRecipes;

