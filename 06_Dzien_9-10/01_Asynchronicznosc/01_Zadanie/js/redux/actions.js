// Plik z akcjami


const QUOTE_FETCHING = 'QUOTE_FETCHING';
const QUOTE_FETCHED = 'QUOTE_FETCHED';
const QUOTE_ERROR = 'QUOTE_ERROR';


export const startFetching = () => ({
    type: QUOTE_FETCHING
});

export const quoteFetched = (quote) => ({
    type: QUOTE_FETCHED,
    payload: quote
});

export const quoteError = (error) => ({
    type: QUOTE_ERROR,
    payload: error
});


export {QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, startFetching, quoteFetched, quoteError};