const jwt = require("jsonwebtoken")
const express = require('express');
var router = express.Router();
const {client} = require("./../../db")


const secretKey = "myNewSecretKey"

function createJWT(id,email) {
    return jwt.sign({id:id, email}, secretKey)
}

router.get("/", (req,resp) => {
    console.log("in Login")
    resp.send("Login file")
})

router.post("/", async(req,resp) => {
    const email = req.body.email
    const password = req.body.password
    console.log("req body ",req.body)
    if(!email || !password){
        console.log("email or password not supplied")
        resp.send("email password not found!!")
    }
    console.log("email password is ",email, password)
    let [id,isAuthenticated] = await checkUser(email,password)
    if(!isAuthenticated){    
        resp.send({"msg":"username password mismatch"})
        return
    }
    console.log("OK generating JWT")
    await resp.setHeader("Authorization",`${createJWT(id,email)}`)
    resp.send({"msg":"Found email and password","token":createJWT(id,email)})
})



async function checkUser(email,password){
    let isAuthenticated=false
    let id = undefined
    try{
        let result = await client.query(`SELECT * FROM dap.delivery_boi WHERE email = '${email}'`)
        console.log(result)
        console.log("in checkUser ",result.rows[0]['password_hash'],password)
        if (result.rows[0]['password_hash'] == password){
            console.log("password match")
            isAuthenticated=true
            id = result.rows[0]["deliveryboiid"]
            console.log(id)
        }
        else{
            console.log("username or password invalid")
        }
    }catch{
        return(false)
    }
        return([id,isAuthenticated])
}

// async function checkUser(email,password){
//     let isAuthenticated=false
//     let id = undefined
    
//     await client.query(
//         `SELECT * FROM dap.delivery_boi WHERE email = '${email}'`
//     ).then( res => {
//         console.log("result successfull",res)
//         console.log("in checkUser ",res.rows[0]['password_hash'],password)
//         if (res.rows[0]['password_hash'] == password){
//             console.log("password match")
//             isAuthenticated=true
//             id = res.rows[0]["deliveryboiid"]
//             console.log(id)
//         }
//         else{
//             console.log("username or password invalid")
//         }
//     } ).catch(err => {
//         console.log("some error occured during fetching result")
//     }).finally(() => {
//         console.log("Done query (in finally)")
//     })
//     return([id,isAuthenticated])
// }

module.exports = router;