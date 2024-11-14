import app from "./app.js";
import { sequelize } from "./database/database.js";
import './models/Users.js';
import './models/precios.js';
import './models/date.js';
import './models/abonos.js';

import { PORT } from "./routes/config.js";

async function main (){
    try {
        await sequelize.sync({
            force:false
        });  /* esta es una manera de probar la coneccion a la base de datos */
        // hola
      
        console.log('conection is true');
      
        
        app.listen(PORT);
        console.log("service listen in port: ", PORT);
      } catch (error) {
        console.log('error al conectar a la base de datos ', error);
      }
};

main();
