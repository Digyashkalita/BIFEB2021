import {User} from "../modules/users.js"
//et users = [] //this will act as a user table

export const getUsers = (req,res)=>{
    console.log("insede function call getUsers, this is /users endpoint.")
    // res.send(users)
    User.find()
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
}

export const getUserById = (req,res)=>{
    console.log("insede function call getUserById, this is /users endpoint.")
    // res.send(users)
    User.findById(req.params.id)
        .then(
            (result)=>{
                res.send(result)
            }
        )
        .catch(
            (err)=>{
                console.log(err)
            }
        )
}

export const createUser = (req,res)=>{
    console.log("inside createUser function,this is'/user' endpoint got hit by a post request.");
    //users.push(req.body);
    const user = new User({
        name: req.body.name,
        gender: req.body.gender,
        city: req.body.city,
        age: req.body.age,
        
    }) 
    user.save()
        .then(
            (result) =>{
                res.send(result)
            }
        ).catch(
            (err) =>{
                console.log(err)
            }
        )

    // res.send("ok...!")
}