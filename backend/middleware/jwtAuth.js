const jwt = require("jsonwebtoken")

const secretKey = "myNewSecretKey"

const requireAuth = (req,resp,next) => {
    
    console.log(req.headers)
    const token = req.headers.authorization
    if(!token){
        console.log("No token found in cookies")
        resp.redirect("/")
    }
    console.log("Token found", token)
    jwt.verify(token, secretKey, (err,decodedToken) => { 
        if(err){
            console.log("In error ",err)
            resp.redirect("/")
        }
        resp.locals.decodedToken = decodedToken
        console.log(decodedToken)
        next(); //go to the next middleware/route
    })
    next();
}

module.exports = { requireAuth };