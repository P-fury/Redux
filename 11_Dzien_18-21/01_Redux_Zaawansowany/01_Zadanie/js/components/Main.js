import React from "react";
import {Provider} from "react-redux";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import store from '../redux/store'
// TODO: components => containers
import Home from './Home'
import Products from '../components/Products'
import AddProduct from "../components/Products/Add";
import Layout from "./Layout";


const Main = () => {
    return(
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/add" element={<AddProduct />} />
                </Routes>
            </Layout>
        </Router>
    </Provider>
    )
};

export default Main;
