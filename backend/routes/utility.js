
//also needs to check data type of all the variables
const checkParam = (values,list) => {
    var allPresent = false
    var obj = {}
    for(item of list){
        if (item in values){
            obj[item] = values[item]
        }
    }
    if(Object.keys(obj).length == list.length){
        allPresent = true
    }
    return([obj,allPresent])
}

obj = {"email":"nvrank4@gmail.com",
        "password":"noPassword4",
        "name":"Neel4",
        "number":"123454",
        "address":"addrl14 l24"}


// let [x,y] = checkParam(obj,["email","password","name","number","address"])
// console.log(x,y)


//works sequentially
async function test(){
    console.log("before")
    let [x,y] = checkParam(obj,["email","password","name","number","address"])
    console.log(x,y)
    console.log("after")
}

// test()

module.exports = { checkParam }