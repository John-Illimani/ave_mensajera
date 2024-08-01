import app from "./app.js";
import { sequelize } from "./database/database.js";
import './models/Users.js'

async function main (){
    try {
        await sequelize.sync({
            force:false
        });  /* esta es una manera de probar la coneccion a la base de datos */
      
        console.log('conection is true');
      
        const port = 9000;
        app.listen(port);
        console.log("service listen in port: ", port);
      } catch (error) {
        console.log('error al conectar a la base de datos ', error);
      }
};

main();
