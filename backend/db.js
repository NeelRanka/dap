const { Client } = require("pg")

// Postgres here
// const client = new Client({
//     user: 'neel',
//     host: 'localhost',
//     database: 'navinproject',
//     password: 'hackedbyme',
//     port: 5432,
// })
// client.connect().then( () => {
//     console.log("connected to db")
// }).catch(()=>{
//     console.log("error in db connection")
// })  
 
console.log("In DB.js")
  
// async function testDb(){
//   await client.connect()
//   const res = await client.query("SELECT * FROM dap.deliveryboy WHERE email = 'nvrank1@gmail.com' ")
//   console.log("result in dbjs " ,res.rows[0]['password'])
//   await client.end() 
// }

// testDb()
// console.log("after query")
// module.exports = {client}
//#####################################################################################################

//MongoDB here
let db
async function initDB(){
    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://NeelRanka:MongoPassword@cluster0.gqxm3.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    await client.connect(err => {
    db = client.db("dap");
    // perform actions on the collection object
    console.log("Connected to atlas db")
    
    db.listCollections().toArray().then( cols => console.log("listing collections",cols) )

    //   client.close();
    });
}

initDB()
db.listCollections().toArray().then( cols => console.log("listing collections",cols) )
module.exports = { db }