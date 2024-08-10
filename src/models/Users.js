import { DataTypes } from "sequelize";

import { sequelize } from "../database/database.js";

export const UsersCandles = sequelize.define('userscandles', {

    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type:DataTypes.STRING
    },
    n_telefono:{
        type:DataTypes.STRING
    },
    velas_miel:{
        type:DataTypes.INTEGER
    },
    velas_sin_miel:{
        type:DataTypes.INTEGER
    },
    deuda_total:{
        type:DataTypes.DOUBLE
    },
    deuda_pendiente:{
        type:DataTypes.DOUBLE
    },
    cuenta:{
        type:DataTypes.DOUBLE
    }

},
{
    timestamps:false
});