import express from "express";

import UserRoutes from './routes/user.routes.js';
import cors from "cors";

const app = express();

app.use(cors({
    origin: 'http://localhost:5173/',  // Reemplaza con el origen desde el cual estás haciendo las solicitudes
    methods: 'GET,POST,PUT,DELETE',
    credentials: true // Si necesitas enviar cookies o encabezados de autorización
  }));


app.use(express.json());

app.use(UserRoutes);

export default app;


