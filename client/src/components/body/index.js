//import styled, { css } from "styled-components";
import Product from "../Product";
import { QUERY_PRODUCTS } from "../../utils/queries";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";


//container content and UI login for main part of the UI showing product and the detail

function Body() {
    const state = useSelector((state) => {
        return state
    });

    const dispatch = useDispatch();
     const { currentCategory, currentSearch } = state;
    const { loading, data } = useQuery(QUERY_PRODUCTS);


    useEffect(() => {
        if(data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products
            });

            data.products.forEach((product) => {
                idbPromise("products", "put", product);
            });

            // to  check `lodaing `is undefined in useaQuerry

        } else if (!loading) {
            //we're offline, get all of d data from d products shop
            idbPromise("Products", "get").then((products) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products
                });
            });
        } 
    }, [data, loading, dispatch]);

    function filterProducts() {
        let products = state.products

        if(currentCategory) products = products.filter(product => product.category._id === currentCategory);
        if(currentSearch) products = products.filter(product.name.tolowerCase().includees(currentSearch.tolowerCase()));
        return products  
    }

    const Container = styled.div`
    display: flex;
    flex-duration: column;
    justfy-content: center
    margin-top: 50px;
    `;
    const Wrapper = styled`
    flex-duration: column;
    justfy-content: center;
    @media only screen and (max-wdth:1000px) {
        width:100%;
    }`;

    return (
        <Wrapper>
            <Container>
                {filterProducts().map(product => (
                    <Product _id={product._id} image={product.image} title={product.name} price={product.price} key={product._id} bidValue={product.bidValue} 
                    decription={product.descript} bidderName={product.bidderName} bidTimestamp={product.bidTimestamp} cart="no" />
                ))}
            </Container>
        </Wrapper>
    )
}

export default Body;
