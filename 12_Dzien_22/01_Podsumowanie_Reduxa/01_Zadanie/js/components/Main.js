import React, {useEffect} from "react";
import {Provider} from "react-redux";
import store from "../redux/store";
import Counter from "../containers/Counter";
import List from "../containers/List";

import {
    BrowserRouter as Router,
    Routes,
    Route, useParams
} from "react-router-dom";


const CounterEnhancer = () => {
    const { initialValue } = useParams();
    return <Counter initialValue={parseInt(initialValue, 10) || 0} />;
};



const Main = () => (
    <Provider store={store}>
        <Router>
            <Routes>
            <Route path="/" element={<CounterEnhancer />} />
                <Route path="/:initialValue" element={<CounterEnhancer />} />
            </Routes>
        </Router>
        <List />
    </Provider>
);

export default Main;
