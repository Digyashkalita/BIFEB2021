import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/users.js"
import mongoose from 'mongoose'

const dbUrl = 'mongodb+srv://Digyash:WZ0gv1bZyRkNXqAN@cluster0.aouvz.mongodb.net/library?retryWrites=true&w=majority'
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(
        (result) => {
            console.log("connected to the database");
            console.log(result);
            server.listen(PORT);
        }
    )
    .catch(
        (err)=>{
            console.log(err)
        
        }
    )

const server = express();
const PORT = 8888;
server.use(bodyParser.json());

var homePage = (req,res)=> res.send("Welcome to my library...");

server.use("/user",userRouter);
server.get("/",homePage);





