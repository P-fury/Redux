import React from 'react';
import withLoading from "./withLoading";


function Welcome({name}){
    return <h1>Welcome {name}</h1>
}


export default withLoading(Welcome, 'green');