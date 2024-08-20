/**
 * Napisz HOC implementujący licznik
 *
 * Nie zapomnij wyeksportować!
 * export default withTimer;
 */

import React from "react";


export default function withTimer(Component) {
    return class extends React.Component {
        state = {
            counter: 0
        }


        startTimer = () => {
            this.interval = setInterval(() => {
                this.setState(prevState => ({
                    counter: prevState.counter + 1
                }));
            }, 1000);
        }
        stopTimer = () => {
            clearInterval(this.interval)
        }

        render() {
            return <Component {...this.props} {...this.state} startTimer={this.startTimer} stopTimer={this.stopTimer} />
        }
    }

}