/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

import React, {useEffect, useState} from "react";


// export default function withTimer(Component) {
//     return class extends React.Component {
//         state = {
//             counter: 0
//         }
//
//
//         startTimer = () => {
//             this.interval = setInterval(() => {
//                 this.setState(prevState => ({
//                     counter: prevState.counter + 1
//                 }));
//             }, 1000);
//         }
//         stopTimer = () => {
//             clearInterval(this.interval)
//         }
//
//         render() {
//             return <Component {...this.props} {...this.state} startTimer={this.startTimer} stopTimer={this.stopTimer} />
//         }
//     }
//
// }

export default function withTimer(Component) {
    return function (props) {
        const [counter, setCounter] = useState(0)
        const [isCounting, setIsCounting] = useState(false)

        const startTimer = () => {
            setIsCounting(true)
        };

        const stopTimer = () => {
            // clearInterval(interval.current);
            setIsCounting(false)
        };

        useEffect(() => {
            let interval;
            if (isCounting) {
                interval = setInterval(() => {
                    setCounter(prevCounter => prevCounter + 1);
                }, 1000)
            }
            return () => {
                clearInterval(interval);
            }

        }, [isCounting]);

    return(
        <Component {...props} counter={counter} startTimer={startTimer} stopTimer={stopTimer} />
    )
    }
}