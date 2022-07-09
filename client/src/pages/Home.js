import React, { useEffect } from "react";
import Body from "../components/Body";
import { useDispatch } from "react-redux";


const clientId = "";
let prevUpdate = null;


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() =>{
        const evtSource = new EventSource("/events");
        const evSource2 = new EventSource("/events");

        evSource2.addEventListener("UPDATE_MESSAGES", function (evt) {

            const data = JSON.parse(evt.data)
            const type = evt.type;

            dispatch({
                type: type,
                messages: data.message.reverse()
            });
        })
        evtSource.addEventListener("UPDATE_PRODUCTS", function (evt) {
            const data = JSON.parse(evt.data);
            const type = evt.type;

            if (!prevUpdate) {
                prevUpdate = data;
            }
            else if (isSameOBject(data)) {
                
                return;
            }
            prevUpdate = data;

            dispatch({
                types: type,
                products: data
            });
        }, 
        false);
    }, [dispatch])

    const isSameOBject = function (_data) {
        if (_data.length != prevUpdate.length)
        return false;
        for(let i = 0; i < _data.length; i++) {
            for (let n in _data[i]) {
                if(_data[i][n] != prevUpdate[i][n])
                return false;
            }
        }
        return true;
    }

    return (
        <Body />
    );
};

export default Home;
