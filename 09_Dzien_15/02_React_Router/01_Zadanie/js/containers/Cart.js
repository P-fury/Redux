// W tym pliku należy wykonać connect
// oraz skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// pamiętaj o wyeksportowaniu kontenera:
// export default connect(mapState, mapDispatch)(Cart);


import React from 'react';
import { connect } from 'react-redux';
import Cart from "../components/Cart";
import {selectProducts, sum } from "../redux/selectors";
import {addProduct, removeProduct} from "../redux/actions"

 const mapStateToProps = (state, {limit}) => ({
     products: selectProducts(state, limit),
     sum: sum(state)

 })


const mapDispatchToProps = (dispatch) => ({
    addProduct: (product)=>dispatch(addProduct(product)),
    removeProduct: (product)=>dispatch(removeProduct(product)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Cart);