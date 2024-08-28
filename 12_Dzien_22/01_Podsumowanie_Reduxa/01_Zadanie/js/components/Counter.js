// Counter
import React, {useEffect} from "react";



const Counter = ({value, isCounting, startCounter, stopCounter, onSet, initialValue}) => {

    useEffect(() => {
        if (initialValue !== undefined) {
            onSet(initialValue);
        }
    }, [initialValue, onSet]);



    useEffect(() => {

        let interval = null;
        if (isCounting) {
            interval = setInterval(() => {
                startCounter();
            } ,1000)
            
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isCounting, startCounter]);


    return(
        <div>
            <button onClick={startCounter} disabled={isCounting}>START</button>
            <button onClick={stopCounter} disabled={!isCounting}>STOP</button>
            <h1>STOPER TIME : {value}</h1>
        </div>
    )
}


export default Counter;