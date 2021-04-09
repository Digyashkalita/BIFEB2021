let users = [] //this will act as a user table

export const getUsers = (req,res)=>{
    console.log("insede function call getUsers, this is /users endpoint.")
    res.send(users)
}

export const createUser = (req,res)=>{
    console.log("inside createUser function,this is'/user' endpoint got hit by a post request.");
    res.send("ok...!")
}