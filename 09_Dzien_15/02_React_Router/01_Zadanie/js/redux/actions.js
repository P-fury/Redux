import React from "react";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";

// należy dodać kreatory akcji i je eksportować


export const addProduct = (payload) => ({
    type: ADD_PRODUCT,
    payload
})

export const removeProduct = (payload) => ({
    type: REMOVE_PRODUCT,
    payload
})


