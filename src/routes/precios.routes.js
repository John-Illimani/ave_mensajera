import { Router } from "express";
import { getPrecios,UpdatePrecios } from "../controllres/preciosController.js";

const route = Router();

route.get('/precios',getPrecios);

route.put('/precios/:id',UpdatePrecios);


export default route;