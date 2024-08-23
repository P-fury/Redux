// Tutaj zaimplementuj akcje
import store from './store';

const BEFORE_LUNCH = 'BEFORE_LUNCH';
const DECREMENT_COUNTER = 'DECREMENT_COUNTER';
const LAUNCH_ROCKET = 'LAUNCH_ROCKET';




const beforeLunch = ()=>({
    type: BEFORE_LUNCH,
})

const decrementCounter = () =>({
    type: DECREMENT_COUNTER
})

const launchRocket = () =>({
    type: LAUNCH_ROCKET,

})

const startCountdown =()=>{
    return(dispatch) =>{
        dispatch(beforeLunch())
        const countdownInterval = setInterval(()=>{
            dispatch(decrementCounter());
            let state = store.getState();
            if (state.launchReducer.counter === 0) {
                clearInterval(countdownInterval);
                dispatch(launchRocket())
                setTimeout(() => {
                    window.location.reload();
                }, 5000);
            }
        },1000)
    }
}


export {BEFORE_LUNCH,DECREMENT_COUNTER,LAUNCH_ROCKET,beforeLunch,decrementCounter,launchRocket, startCountdown}