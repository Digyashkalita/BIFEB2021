import express from 'express';
import {getUsers,createUser,getUserById} from "../controllers/users.js"
const router = express.Router();

router.get("/",getUsers)
 router.get("/:id",getUserById)//colone makes the id acts as variable
 router.post("/",createUser);
// router.delete("/id",deleteUser);
// router.patch("/id",patchUser);

export default router;