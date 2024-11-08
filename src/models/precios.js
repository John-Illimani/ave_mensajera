import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
export const Precios = sequelize.define(
  "precios",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    miel: {
      type: DataTypes.INTEGER,
    },
    sin_miel: {
      type: DataTypes.INTEGER,
    },
    batucos: {
      type: DataTypes.INTEGER,
    },
    mexicanas: {
      type: DataTypes.INTEGER,
    },
    ocho_unidades: {
      type: DataTypes.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);
