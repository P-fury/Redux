import React from "react";
import LastRecipes from "./LastRecipes";
import LastProducts from "./LastProducts";

const Home = ({products}) => {
  return (
    <div className="columns">
      <div className="column is-one-third">
        <LastRecipes/>
      </div>
      <div className="column is-one-third">
        <LastProducts products={products} />
      </div>
    </div>

  );
};

export default Home;