// Plik z akcjami
import API from '../api';

const QUOTE_FETCHING = 'QUOTE_FETCHING';
const QUOTE_FETCHED = 'QUOTE_FETCHED';
const QUOTE_ERROR = 'QUOTE_ERROR';

const fetchQuote = () =>(dispatch) => {
    dispatch(startFetching());

    API.fetchQuote()
        .then(response => dispatch(quoteFetched(response)))
        .catch(error => dispatch(quoteError(error)));

}

const startFetching = () => ({
    type: QUOTE_FETCHING
});

const quoteFetched = (quote) => ({
    type: QUOTE_FETCHED,
    payload: quote
});

const quoteError = (error) => ({
    type: QUOTE_ERROR,
    payload: error
});


export {QUOTE_FETCHING, QUOTE_FETCHED, QUOTE_ERROR, startFetching, quoteFetched, quoteError, fetchQuote};