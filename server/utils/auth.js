const jwt = require("jsonwebtoken");
const expiration = "2h";
const secret = "mysecretsshhhhh";
const clientId = ""


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

