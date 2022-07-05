import React, {useEffect} from "react";
import styled,  { css } from "styled-Components"
import { useDispatch, useSelector } from "react-redux"
import Auth from "../../utils/auth";
import { Link, NavLink, Route } from "react-router-dom";


//mg functioanality to commincate
const Messages = function()
{
    const state = useSelector((state) => {
        return state
    });

    const { messages } = state;
    
    const UL = styled.u1 `list-style-type: none
    `;

    const Li = styled.Li `
    width: 100%;
    border-bottom:1px solid black;
    `;

    const SPAN = styled.u1`
    color:#333;
    `;
    

    const Message = styled.div`
    background-color:#fff
    position:absolute;
    width:100%;
    `;


    return (
        <Message><UL>
            {messages.map((messages,index) => (
            <Li key={"message"+index}>{messages}</Li>
            ))}
            </UL></Message>
    )
}

export default Messages;