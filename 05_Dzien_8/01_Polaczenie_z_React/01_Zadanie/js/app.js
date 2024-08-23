import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "./redux/store";

import UserInput from "./containers/UserInput";
import Articles from "./containers/Articles";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";



const ArticlesRoot = ()=>{
    const { user } = useParams();
    return <Articles user={user} />;
}


const App = () => (
    <div>
        <Provider store={store}>
            <UserInput/>
            <Router>
                <nav>
                    <ul>
                        <li><Link to="/jan">Jan</Link></li>
                        <li><Link to="/gosia">Gosia</Link></li>
                        <li><Link to="/">All</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<ArticlesRoot/>}/>
                    <Route path="/:user" element={<ArticlesRoot/>}/>
                </Routes>
            </Router>
            {/*<Articles/>*/}
        </Provider>
    </div>
);


ReactDOM.render(<App/>, document.getElementById("root"));
