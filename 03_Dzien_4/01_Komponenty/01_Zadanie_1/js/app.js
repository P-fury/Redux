import React from "react";
import ReactDOM from 'react-dom';
import { StopperWithTimer } from "./components/Stopper";
import Welcome from "./Welcome";


const App = () => (<>
        {/*<Welcome name="John" />*/}
  <div>

    <StopperWithTimer>czas start</StopperWithTimer>
    <hr />
    <StopperWithTimer>czas start 2 </StopperWithTimer>
  </div>
    </>
);

ReactDOM.render(<App />, document.getElementById("app"));
