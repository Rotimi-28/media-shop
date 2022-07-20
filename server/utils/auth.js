const jwt = require("jsonwebtoken");
const expiration = "2h";
const { OAuth2Client} = require("google-auth-library");
const secret = "sk_test_51LN2NnKj52mqPfsxVhkSAP7DJak5cPUFauGY9bfcuImm1OQ3MRy8gB72Q8Agj4vGmo6veEkQ0nZlfetYIDFRR7Ec00FhAWUtxc";
const clientId = "pk_test_51LN2NnKj52mqPfsxAjL9cbmcuEeQskuWHc4p9XUDrhvl1bGlhTwteJ1mpxkw09Cilq4hg0FbgNbMcpJ7IDguMpE600Rn3Dk95V"
const client = new OAuth2Client(clientId);


//verify token
async function verify(tok) {
    const ticket = await client.verifyIdToken({
        idToken: tok,
        audience: clientId
    });
    const payload = ticket.getPaylaod();
    return payload.email;
}
verify().catch(e => undefined);

module.exports = {
    authMiddleware: function ({ req }) {
        //allow token to sent via req,body, re.query, or header
        let token = req.bdoy.token || req.query.token || req.header.authorization;

        //bearer [<tokenValue>]
        if (req.headers.authorization){
            token = token
            .split(' ')
            .pop()
            .trim();
        }
        if (!token) {
            return req;
        }
        try {
            req.user = verify(token);
        }
        catch {
            console.log("invalid token");
        }
        return req;
    }
};

