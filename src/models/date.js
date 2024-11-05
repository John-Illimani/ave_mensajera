import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Datess = sequelize.define(
  "userscandles_audit",
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
    n_telefono: {
      type: DataTypes.STRING,
    },
    velas_miel: {
      type: DataTypes.INTEGER,
    },
    velas_sin_miel: {
      type: DataTypes.INTEGER,
    },
    otros: {
      type: DataTypes.INTEGER,
    },
    fecha: {
      type: DataTypes.DATEONLY, // Cambiar a DATEONLY para reflejar solo la fecha sin la hora
      defaultValue: DataTypes.NOW, // Asegura que tome la fecha actual como en SQL
    },
    hora: {
      type: DataTypes.TIME,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
    freezeTableName: true,
  }
);
