import React from "react";
import {connect} from "react-redux";
import Quote from "../components/Quote";
import {fetchQuote} from "../redux/actions";
// {quote, loading, error, fetchQuote}

const mapState = (state)=>({
    quote: state.quote.quote,
    loading: state.quote.loading,
    error: state.quote.error,
});

const mapDispatch = (dispatch)=>({
    fetchQuote:()=>dispatch(fetchQuote())
});


export default connect(mapState, mapDispatch)(Quote)
