import React, {Component} from "react";
import {useParams} from "react-router-dom";


const ProductsDetails = ({products}) => {

    const {id} = useParams();
    const ProductWithId = products.find((product) => product.id === parseInt(id))

    return (<><h1 className="title">Product details</h1>
            <hr/>
            <div>PRODUCT ID: {ProductWithId.id}</div>
            <div> PRODUCT NAME: {ProductWithId.name}</div>
        </>
    )
}


export default ProductsDetails;