// Akcje


export const STARTCOUNTER = 'STARTCOUNTER'
export const STOPCOUNTER = 'STOPCOUNTER'
export const SAVETIME = 'SAVETIME'
export const DELETETIME = 'DELETETIME'
export const SET_COUNTER_VALUE = 'SET_COUNTER_VALUE';





export const startCounter = () =>({
    type: STARTCOUNTER
})


export const stopCounter = () =>({
    type: STOPCOUNTER
})


export const saveTime  =(value)=>({
    type: SAVETIME,
    payload: value
})


export const deleteTime  =(index)=>({
    type: DELETETIME,
    payload: index
})


export const setCounterValue = (value) => ({
    type: SET_COUNTER_VALUE,
    payload: value,
});