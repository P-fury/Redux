import React, {Component} from "react";
import {useParams} from "react-router-dom";


const RecipeDetails = ({recipes, products}) => {

    const {id} = useParams();
    const RecipeWithId = recipes.find((recipe) => recipe.id === parseInt(id))


    const productsInRecipe = RecipeWithId.products.map((productObj) => {
        const productId = productObj.id;
        const product = products.find((p) => {
            return p.id === Number(productId);
        });
        return product ? product.name : "Produkt nie znaleziony";
    });

    return (<><h1 className="title">Recipe details</h1>
            <hr/>
            <div>RECIPE ID: {RecipeWithId.id}</div>
            <div> RECIPE NAME: {RecipeWithId.name}</div>
            <div> RECIPE DESC: {RecipeWithId.desc}</div>
            <div>RECIPE PRODUCTS:</div>
            <ul>
                {productsInRecipe.map((productName, index) => (
                    <li key={index}>{productName}</li>
                ))}
            </ul>
        </>
    )
}


export default RecipeDetails;