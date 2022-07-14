const express = require("express");
// const { default: mongoose } = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser")
const {requireAuth} =  require("./middleware/jwtAuth")
const signup = require('./routes/auth/signup');
const companySignup = require('./routes/auth/companySignup');
const login = require('./routes/auth/login');
const companyLogin = require('./routes/auth/companyLogin');
const personDetails = require("./routes/userData/additionalpersonDetails")


const app = express();




app.use(bodyParser.json())

//add middleware for JWT protection on every route
app.use(cookieParser())
app.use(express.static("public"))
app.use(express.json())


app.get("/", (req,resp) => {
    console.log("the base path")
    resp.send("Main route ok.?")
})


// app.post("/signup", (req,resp) => {
//     const username = req.body.username
//     const password = req.body.password
//     console.log("req body ",req.body)
//     if(!username || !password){
//         console.log("Username or password not supplied")
//         resp.send("Username password not found!!")
//     }
//     console.log("username password is ",username, password)
//     resp.send("Found username and password")
// })


app.get("/loggedIn", requireAuth, (req,resp) => {
    console.log("in LoggedIn ",req.cookies)
    console.log(resp.locals.decodedToken.id)
    resp.send("OK Here")
})


// app.use("/loggedIn", requireAuth)
app.post("/loggedIn", (req,resp) => {   //to fireup the requireAuth middleware
    console.log(req.body)

    let newBook = {
        title: req.body.title,
        author: req.body.author,
        numberOfPages: req.body.numberOfPages,
        publisher: req.body.publisher,
    }


    resp.send("MyBookRoute in POST")
})


function requireAuth2(req,resp,next){
    console.log("in reqAuth2")
    console.log(req.headers)
    next()
}

app.use("/signup",signup)
app.use("/companySignup",companySignup)
app.use("/login", login)
app.use("/companyLogin", companyLogin)
app.use("/",personDetails)

app.listen(3000,() => {
    console.log("Server running on port 3000")
})
module.exports = { app }