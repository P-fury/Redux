import React from 'react';
import PropTypes from "prop-types";


const Favourites = ({quotes}) => {
    return(
        <div>
            <hr></hr>
            <h4>FAV QUOTE:</h4>
            <ul>
                {quotes.map((quote, index) => (
                    <li key={index}>{quote.quote} / {quote.author}</li>
                ))}
            </ul>
        </div>
    )
}


Favourites.propTypes = {
  quotes: PropTypes.array.isRequired
};

export default Favourites;
