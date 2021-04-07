import React,{createContext,useReducer,useState} from 'react';
import {Products} from '../Data';
export const ProductContext=createContext();

const ProductContextProvider=(props) => {
    const [products]=useState(Products);
    return (
        <ProductContext.Provider value={{products: [...products]}}>
            {props.children}
        </ProductContext.Provider>
    )
}
export default ProductContextProvider;
