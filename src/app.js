import express from "express";

import UserRoutes from './routes/user.routes.js';

const app = express();

app.use(express.json());

app.use(UserRoutes);

export default app;