import React from "react";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import store from '../redux/store'
// TODO: components => containers
import Home from '../containers/Home'
import Products from '../containers/Products'
import AddProduct from "../containers/Products/Add";
import Layout from "./Layout";
import ProductsDetails from "../containers/ProductsDetails";
import AllRecipes from "../containers/Recipes";
import AddRecipes from "../containers/Recipes/Add";
import RecipeDetails from "../containers/RecipeDetails";


const Main = () => {
    return(
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/add" element={<AddProduct />} />
                    <Route path="/products/:id" element={<ProductsDetails />} />
                    <Route path="/recipes" element={<AllRecipes />} />
                    <Route path="/recipes/add" element={<AddRecipes />} />
                    <Route path="/recipes/:id" element={<RecipeDetails />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>
    )
};

export default Main;
