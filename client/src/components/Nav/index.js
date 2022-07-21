import React from "react";
import Auth from "../../utils/auth";
import  { useSelector } from "react-redux";
//import { UPDATE_MESSAGES } from "../../utils/actions";
import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components";
import { GoogleLogout } from "react-google-login";


const clientId = "pk_test_51LN2NnKj52mqPfsxAjL9cbmcuEeQskuWHc4p9XUDrhvl1bGlhTwteJ1mpxkw09Cilq4hg0FbgNbMcpJ7IDguMpE600Rn3Dk95V"
const email = localStorage.getItem("email");
const firstName = localStorage.getItem("firstName");
const lastName = localStorage.getItem("lasttName");

function Nav() {
    const state = useSelector((state) => {
        return state
    });

    const { cart, messages } = state;

    const UL = styled.u1 `
    width: 1000px;
    list-style-type: none

    @media (max-width:1000px)
    {
        flex-direction:column;
        display:flex;
        justify-content:cent;
        align-items:center;
        padding-inline-state:0px
    }
    `;
    const Li = styled.li `
    @media (max-width:1000px)
    {
        flex-direction:column;
        display:flex;
        justify-content:cent;
        align-items:center;
        padding-inline-state:10px
        margin-left:0px
        margin-right:0px
        margin-top:5px;
        border-bottom: 1px solid black;
        text-align: center;
        align-items:center;
        width: 100px;
        background-color: #3B7EA1;
        border-radius: 20px;

    }
    @media (max-width:1000px)
    {
        margin-left:10px
    }
    `;

    
    const SPAN = styled.span`
    color:#333;`;
    
    function showNavigation() {
        if (Auth.loggedIn()) {


            return (
                <UL className="flex-row">
                    <Li className="mx-1">
                        <NavLink to="/orderHistory">
                            Orders
                        </NavLink>
                    </Li>
                    <Li className="mx-1">
                        {/* thsi is not using linkcomponent to logout or user and the refresh application */}

                        <a href="/" onClick={() => {
                            Auth.logout();
                        }}>
                            
                            {email &&
                             <GoogleLogout
                             clientId={clientId}
                             buttonText="Logout"
                             render={renderProps => (
                                <div onClick={renderProps.onClick} disabled={renderProps.disabled}>Logout</div>
                             )}
                             theme={"dark"}
                             >
                             </GoogleLogout>
                            }
                            </a>
                            <Li> <NavLink to="/cart"><SPAN className="fa">&#xf291; ({cart.length})</SPAN></NavLink></Li>
                            <Li> <NavLink to="/messages"><SPAN className="fa">&#xf674; ({messages.length})</SPAN></NavLink></Li>
                        
                    </Li>

                </UL>
            );
        } else {
            return (
                <UL className="flex-row">
                    <li className="mx-1"></li>
                    {((window.location.pathname !== "/login")) &&
                        <li className="mx-1">
                            <NavLink to="/login">
                                Login
                            </NavLink>
                        </li>
                    }
                </UL>
            );
        }
        
    }
    return (
        <nav>
            {showNavigation}
        </nav>
    );

}


export default Nav;
