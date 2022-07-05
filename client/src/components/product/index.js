import styled, { css } from "styled-component";
import Auth from "../../utils/auth";
import { useMutation } from "@apollo/react-hook";
import {shortdescription} from "../../utils/helpers";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../../utils/actions";
import  { useDispatch } from "react";
import moment from "moment"
import {UPDATE_BID} from "../../utils/mutations";
import React, { useEffect } from "react";
import { idbPromise } from "../../utils/helpers";

//bid auction
 function Product(prop) {
    const { _id, image, title, price, description, cart, bidTimeStamp, bidValue, bidderName } = prop;

    const dispatch = useDispatch();
    const [updateProduct] = useMutation(UPDATE_BID);

    const minBid = bidValue +1;

    let updateData = null;

    useEffect(() => {
        const timer = setInterval(updTimeStamp, 1000);
        let timeLeft = 0;
         function updateTimeStamp() {
            if (!bidTimeStamp) return;
            const m = moment(bidTimeStamp).format();

            const now = moment();
            timeLeft = moment.duration(now.diff(m));
            const expire = Math.floor(120 - timeLeft.asSeconds());

            if (expire <=0)
            {
                if(document.querySelector("#remaininTime"+_id)) document.querySelector("#remaininTime"+_id).textContent = "Sold";
                return;
            }
            if(document.querySelector("#remaininTime"+_id)) document.querySelector("#remaininTime"+_id).textContent = hhmmss(expire);
         }

    }, [dispatch])
    function pad(num) {
        return ("0"+num).slice(-2);

        
    }
    //
    function hhmmss(secs) {
        var minutes = Math.floor(secs / 60);
        secs = secs%60;
        var hour = Math.floor(minutes/60);
        minutes = minutes%60;
        return `${pad(hour)}:${pad(minutes)}:${pad(secs)}`;
    }
    const addTOCart = function () {
        dispatch({
            type: ADD_TO_CART,
            product: {
                _id: id,
                image: image,
                title: title,
                price: price,
                description: description
            }
        });
    }
    const remoFromCart = function () {
        const item = { _id: id };
        idbPromise("cart", "delet", item );

        dispatch({
            type: REMOVE_FROM_CART,
            _id: id
        });
    }

    const placeBid = function () {
        if(!Auth.loggedIn()) 
        {
            alert("you must logged in to place order")
            retun
        }
          mutationResponse ();

    }
    async function mutationResponse()
    {
        let value = document.querySelector("#bidInput"+_id).value
        if(!value) value = minBid;

        if(!value || value <= bidValue) return;
        

        const email = localStorage.getItem("email");
        const firstName = localStorage.getItem("firstName");
        const lastName = localStorage.getItem("lastName");

        const stamp = bidTimeStamp? bidTimeStamp : moment().format();

        const response = await updateProduct({
            variables: {
                _id: id,
                value: parseFloat(value),
                bidTimeStamp:stamp.toString(),
                biddername:firstName+" "+lastName,
                bidderId:email            
            }
        });
    }

     const Container = styled.div`
        width: 1000px;
        height: 220px;
        padding:5px;
        display:flex;
        jusstify-content:space-between;
        @media (max-width:1000px) {
            width:100%;
            height:auto;
            flex-direction:column;
        }
        `;
        const Img = styled.div`
        width: 200px;
        height: 150px;
        background-image:url("images/${image}");
        background-repeat: no-repeat;
        background-size: cover;
        @media (max-width:1000px) {
            width:100%;
            height:350px;
            
        }
        `;
        const Cardhead = styled.div`
        margin-top-6px
        flex-direction:row
        display:flex;
        @media (max-width:1000px) {
            flex-direction:column;
        }
        `;

        const Inner = styled.div`
        display:flex;
        `;

        const CardBody = styled.div`
        display:flex;
        margin-top: 20px;
        width: 100%;
        `;

        const Card = styled.div`
        display:flex;
        border-top 5px solid #FDB515;
        flex-direction:column;
        margin-left:10px;
        width:80%;
        @media (max-width:1000px) {
            width: 100%;
        }
        `;
        
        const H3 = styled.div`
        font-size: 16px;
        margin-left: 15px;
        @media (max-width:1000px) {
            margin-left: 0%;
        `;
        const H4 = styled.div`
        font-size: 16px;
        margin-left: 14px;
        @media (max-width:1000px) {
            margin-left: 0px;
        `;
        const BuyBtn = styled.button`
        font-size:16px;
        border-radius 20px;
        height: 20px;
        margin-left:5px;
        outline:none;
        cursor:pointer;
        background-color: ${props => props.delete? "tomato": "#FDB515"};
        box-shadow: 3px 3px;
        color:#000;
        white-space: nowrap;
        `;
        const DelBtn = BuyBtn;


        const BidBtn = styled.button`
        font-size:16px;
        border-radius 20px;
        height: 20px;
        margin-left:5px;
        outline:none;
        cursor:pointer;
        background-color: #3B7EA1;
        box-shadow: 3px 3px;
        white-space: nowrap;
        `;

        const ViewBtn = styled.button`
        font-size:16px;
        border-radius 20px;
        height: 20px;
        margin-left:35px;
        outline:none;
        cursor:pointer;
        background-color: #00A598;
        box-shadow: 3px 3px;
        white-space: nowrap;
        `;
        const Input = styled.input.attr({ type: "number" })`
        font-size:16px;
        border-radius 20px;
        height: 20px;
        margin-left:5px;
        margin-right;15px;
        outline:none;
        cursor:pointer;
        background-color: #3B7EA1;
        box-shadow: 3px 3px;
        text-align:center;
        `;

        if (cart === "no") {
            return (
                <Container>

                    <img />

                    <Card>

                     <Cardhead>
                        <h5><b>{title}</b></h5>
                        <Inner>
                        <H3><b>${price}</b></H3><BuyBtn onClick={addTOCart}>Buy</BuyBtn>
                        <BidBtn onClick={placeBid}></BidBtn><input id={"bidInput"+_id} placeholder={ minBid } step="1" min={minBid}></input>
                        </Inner>
                        <Inner><span id={"remainingTime"+_id}></span></Inner> <H4 clasName="fa">&#xf201; {bidderName? bidderName:""}</H4>
                        </Cardhead> 
                        <CardBody>
                            <p>{shortdescription(description)}</p>
                            </CardBody>  
                    </Card>
                </Container>
            )
        }
        if (cart === "yes") {
            retun (
                <Container>

                    <Img />
                    <Card>
                        <Cardhead>
                            <h5><b>{title}</b></h5><H3><b>${price}</b></H3><DelBtn delete onClick={remoFromCart}></DelBtn>
                        </Cardhead>
                        <CardBody>
                            <p>{shortdescription(description)}</p>
                            </CardBody> 
                    </Card>
                </Container>
            )
        }
 }

 export default Product;