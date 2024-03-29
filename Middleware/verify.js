

const jwt = require("jsonwebtoken");

const middlewareVerify = (req, res, next) => {
    // const token = req.header("Authorization");
    const token = req.headers.authorization.split(" ")[1];

    console.log("Token from client: ", token);
    if (!token) return res.status(401).send("Forbidden !!!");
    try {
        // check token correct
        req.user = jwt.verify(token, "chuoibimatkhongthetietlo");
        next();
    } catch (e) {
        res.status(400).send("Token incorrect");
    }
};

module.exports = middlewareVerify;
