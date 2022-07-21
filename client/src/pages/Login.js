//import React, { useState, UseEffect } from "react";
import { useMutation, useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshTokensetup";
import { ADD_USER } from "../utils/mutations";


function Login(props) {
    const [addUser] = useMutation(ADD_USER);
    const clientId = "";
    const onSucess = res => {
      var id_token = res.getAuthResponse().id_token;
       localStorage.setItem("email", res.profileObj.email);
       localStorage.setItem("firstName", res.profile.givenName);
       localStorage.setItem("lastName", res.resprofileObj.familyName);
       localStorage.setItem("id_token", id_token);
       Auth.login(id_token);
       const mutationResponse = addUser({
        variables: {firstName: res.profil.Obj.givenName, lastName: res.profileObj.familyName, email: res.profile.email }
       });
       refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log("{Login failes} res:", res)
    };

    return (
        <div className="container Sigin">
            <GoogleLogin
            clientId={clientId}
            buttonText="Google Login"
            onSucess={onSucess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
            theme={"dark"}
            icon={"true"}   />,
            {document.getElementById("googleButton")}

        </div>
    )
}

export default Login;
