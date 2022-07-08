import styled, { css } from 'styled-components'
import { Link, NavLink, Route} from "react-router-dom";
import Nav from '../Nav'
import { UPDATE_CATEGORIES,UPDATE_CURRENT_CATEGORY,UPDATE_CURRENT_SEARCH,UPDATE_MESSAGES } from '../../utils/actions';
import { QUERY_CATEGORIES,QUERY_MESSAGES } from '../../utils/queries';
import { useQuery } from '@apollo/react-hooks';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { idbPromise } from "../../utils/helpers";

function Header () {
    const email = localStorage.getItem("email")

    const H1 = styled.h1 `
    margin-left: 30px;
    `;
    const Input = styled.input`
    width: 55%;
    height: 100%;
    font-size:18px;
    border: 0px;
    border-right:0px; 
    border-left:0px; 
    outline:0px;
    `;
    const Container = styled.div`
    padding: 20px;
    display:flex;
    height:30px;
    width:100%;
    align-items:center;
    justify-content:space-between;
    border-bottom: 1px solid #888;
    @media (max-width:1000px) {
      flex-direction:column;
      padding:5px;
      height:auto;
    }
    `;
    const SearchBtn = styled.div`
    padding-top:3px;
    font-size:18px;
    background-color: #FDB515;
    border-left:0px;
    width: 50px;
    border-radius: 0 20px 20px 0;
    cursor:pointer;
    text-align: center;
    `;
    const Select = styled.select`
    width:80px;
    height:26px;
    border:0px;
    margin-left:20px;
    padding-left:5px;
    outline: none;
    background: none;
    @media (max-width:1000px) {
      margin-left:0px; 
  }
    `;

    const state = useSelector((state) => {
        return state
    });
    
    const dispatch = useDispatch();
    const { currentCategory, currentSearch } = state;
    const { loading, data } = useQuery(QUERY_CATEGORIES);
    const message_data = useQuery(QUERY_MESSAGES, { variables: { email: email}})

    useEffect(() => {
        if(message_data.data && message_data.user) {
            dispatch({
                type: UPDATE_MESSAGES,
                messsages: message_data.data.user.messages.reverse()
            });
        }
    }, [message_data.data, dispatch]);

    const selectCategory = function (event) {

        const mySearch = document.querySelector("#serachInput").ariaValueMax;
        const _id = event.target.value;

        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: _id
        });

        const Search = function (event) {

            const mySearch = document.querySelector("#searchInput").value;
            dispatch({
                type: UPDATE_CURRENT_SEARCH,
                currentSearch: mySearch
            });
        }

        useEffect(() => {
            if (data) {
                dispatch({
                    type: UPDATE_CATEGORIES,
                    categories: data.categories
                });

                data.categories.forEach((category) => {
                    idbPromise("categories", "input", category);
                });
                //add fun else if to check if loading is undefined in useQery() hook
            } else if (!loading) {
                idbPromise("categories", "get").then((categories) => {
                    dispatch({
                        type: UPDATE_CATEGORIES,
                        categories: categories
                    });
                });
            }
        }, [data.loading, dispatch]);

        return (
            <Container>
                <NavLink to="/">
                    <h2><span role="img" aria-label='shopping bag'>bag</span>Media Shop</h2>
                </NavLink>
                <WrapBar>
                    <Select onChange={selectCategory} value={ currentCategory }>
                        {state.categories.map(category => (
                            <option key={category._id}vlaue={category._id}>{category.name}</option>
                        ))}
                            <option key="a11123" vlaue="A11"></option>
                    </Select>
                    <Input id='searchInput' defaultValue={ccurrentSearch}></Input>
                    <SearchBtn onClick={Search} className="fa">&#xf201;</SearchBtn>
                </WrapBar>
            </Container>
        );
    }
}
export default Header;