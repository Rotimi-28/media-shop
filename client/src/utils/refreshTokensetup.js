import Auth from "../utils/auth";

export const reffreshTokenSetup = (res) => {
    //time to renew access token
    let reffreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    const reffreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        reffreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        //saveUserToken, newauthres.access_token

        //localStorage.setitem""authToken" _id_token
        Auth.login(newAuthRes.id_token)

        //setup d othe time after d 1st one
        setTimeout(reffreshToken, reffreshTiming);
    };
    //setup first refresh timer
    setTimeout(reffreshToken, reffreshTiming);
}