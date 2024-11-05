import { Router } from "express";
import { getAbono, getAbonos } from "../controllres/abonosController.js";


const route = Router();

route.get('/abonos',getAbonos);

route.get('/abonos/:id',getAbono);


export default route;