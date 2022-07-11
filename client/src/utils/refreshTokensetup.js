import Auth from "../utils/auth";

export const refreshTokenSetup = (res) => {
    //time to renew access token
    let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;
    const refreshToken = async () => {
        const newAuthRes = await res.reloadAuthResponse();
        refreshTiming = (newAuthRes.expires_in || 3600 - 5 * 60) * 1000;
        //saveUserToken, newauthres.access_token

        //localStorage.setitem""authToken" _id_token
        Auth.login(newAuthRes.id_token)

        //setup d othe time after d 1st one
        setTimeout(refreshToken, refreshTiming);
    };
    //setup first refresh timer
    setTimeout(refreshToken, refreshTiming);
}


export default refreshTokenSetup;