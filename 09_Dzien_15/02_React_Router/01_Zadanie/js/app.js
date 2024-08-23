import React from "react";
import {createRoot} from "react-dom/client";

import Cart from "./containers/Cart";
import store from './redux/store';
import {Provider} from "react-redux";


import {BrowserRouter as Router, Routes, Route,Link,useParams} from "react-router-dom";



const CartRoot = () =>{
     const {limit} = useParams();
    return <Cart limit = {limit} />
}

const App = () => {
    return (
        <Provider store={store}>
        <Router>
            <nav>
                <ul>
                    <li><Link to="/wszystkie">Wszystkie</Link></li>
                    <li><Link to="/10">do 10 pln</Link></li>
                    <li><Link to="/50">do 50 pln</Link></li>
                    <li><Link to="/100">do 100 pln</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<CartRoot />} />
                <Route path="/:limit" element={<CartRoot />} />
            </Routes>
        </Router>
        </Provider>
    )
}

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App/>);
