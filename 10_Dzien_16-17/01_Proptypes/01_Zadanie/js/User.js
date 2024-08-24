// Pamiętaj aby na końcu pliku wyeksportować komponent jako domyślny export
// np. export default User


import React from "react";
import PropTypes from "prop-types";



const User = ({firstName,lastName,onClick,age}) =>{
    return(
        <div>
            <h1>Czesc! {firstName} {lastName}</h1>
            {age && <div>Masz {age} lat</div>}
            <button onClick={onClick}>Click</button>

        </div>
    )
}

User.propTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    age: PropTypes.number.isRequired,

}


export default User;