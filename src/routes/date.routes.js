import { Router } from "express";
import { getDate, getDates } from "../controllres/dateController.js";


const route = Router();

route.get('/dater',getDates);

route.get('/dater/:id',getDate);


export default route;