import express from "express"
import bodyParser from "body-parser"
import userRouter from "./routes/users.js"

const server = express();
const PORT = 8888;
server.use(bodyParser.json());

var homePage = (req,res)=> res.send("Welcome to my library...");

server.use("/user",userRouter);
server.get("/",homePage);

server.listen(PORT);