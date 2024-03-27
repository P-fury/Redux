import React from "react";

const Quote = ({quote, loading, error, fetchQuote}) => (
  <div>
    <button disabled={loading} onClick={fetchQuote}>Pobierz cytat</button>
    {quote && <p>{quote.quote} / {quote.author}</p>}
    {loading && "Ładuję cytat..."}
    {error && error}
  </div>
);

export default Quote;
