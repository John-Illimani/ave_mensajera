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
    paterno:{
        type:DataTypes.STRING
    },
    materno:{
        type:DataTypes.STRING
    },
    n_telefono:{
        type:DataTypes.STRING
    },
    deuda_pendiente:{
        type:DataTypes.DOUBLE
    },
    abono_deuda:{
        type:DataTypes.DOUBLE
    }

},
{
    timestamps:false
});