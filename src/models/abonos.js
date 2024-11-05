import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Abonos = sequelize.define(
  "cuenta_auditoria",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    cuenta: {
      type: DataTypes.DOUBLE,
    },
    
    fecha: {
      type: DataTypes.DATEONLY, // Cambiar a DATEONLY para reflejar solo la fecha sin la hora
      defaultValue: DataTypes.NOW, // Asegura que tome la fecha actual como en SQL
    },
  },
  {
    timestamps: false,
  }
);