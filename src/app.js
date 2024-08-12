import express from "express";

import UserRoutes from './routes/user.routes.js';
import PreciosRoutes from './routes/precios.routes.js';
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'https://john-illimani.github.io',  // Reemplaza con el origen desde el cual estás haciendo las solicitudes
    methods: 'GET,POST,PUT,DELETE',
    credentials: true // Si necesitas enviar cookies o encabezados de autorización
  }));


app.use(express.json());

app.use(UserRoutes);
app.use(PreciosRoutes);

export default app;


