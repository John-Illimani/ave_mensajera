import { Router } from "express";
import { getUsers, createUser,updateUser,deleteUser,getUser } from "../controllres/UsersControllre.js";

const route = Router();

route.get('/users',getUsers);
route.get('/users/:id',getUser);
route.post('/users',createUser);
route.put('/users/:id',updateUser);
route.delete('/users/:id',deleteUser);

export default route;