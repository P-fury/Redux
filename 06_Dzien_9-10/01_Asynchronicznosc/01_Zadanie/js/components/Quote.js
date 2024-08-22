import React from "react";

const Quote = ({ quote, loading, error, fetchQuote, addToFav }) => (
    <div>
        <button disabled={loading} onClick={fetchQuote}>Pobierz cytat</button>
        {quote && (
            <p>
                {quote.quote} / {quote.author}
                <button onClick={() => {

                    addToFav(quote);
                }}>ADD to FAV</button>
            </p>
        )}
        {loading && "Ładuję cytat..."}
        {error && error}
    </div>
);

export default Quote;
