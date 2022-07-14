const express = require('express');
var router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.json())
router.use(express.json())
const {client} = require("./../../db")
const utility = require("./../utility")


router.get("/", (req,resp) => {
    resp.send("In signupFile")
})

router.post("/", async(req,resp) => {
    details = {}
    console.log("req body ",req.body)
    // const email = req.body.email
    // const password = req.body.password
    // const name = req.body.name
    // const number = req.body.number
    // const address = req.body.address 

    let [userDetails,allPresent] = utility.checkParam(req.body,["email","password","name","number","address"])
    // console.log("email" in req.body)

    // console.log("req body2 ",req.body)
    if(!allPresent){
        console.log("signup details incomplete",userDetails)
        resp.send("incomplete signup details!!")
    }
    console.log("email password for signup is ",userDetails.email, userDetails.password)

    if(!(await userExists(userDetails.email))){    
        await addUser(userDetails.name,userDetails.email,userDetails.password,userDetails.number,userDetails.address)
        resp.send({"msg":"Added email and password","code":200})
    }
    else{
        resp.send({"msg":"User already exists","code":401})
    }
})

async function addUser(name,email,password,ph_number,address){
    try{
        var query = `INSERT INTO dap.delivery_boi (name,email,password_hash,phone,address) VALUES ('${name}','${email}','${password}','${ph_number}','${address}');`
        console.log("query is ",query)
        const res = await client.query(query)
        console.log("result " ,res)
        
    }catch(err){
        console.log("some error occured while checking user in signup page ",err)
    }
}

async function userExists(email){
    let isPresent=false
    try{
        const result = await client.query(`SELECT * FROM dap.delivery_boi WHERE email = '${email}'`)
        // console.log(result)
        // console.log("in checkUser ",result.rows[0]['password_hash'],password)
        if (result.rows.length > 0){
            console.log("Email already exists")
            isPresent=true
        }
        else{
            console.log("username or password invalid")
        }
    }catch{
        return(false)
    }
        return(isPresent)
}


module.exports = router;