import { Sequelize } from "sequelize";
import { sequelize } from "../database/database.js";
import { UsersCandles } from "../models/Users.js";

export const getUsers = async (req, res) => {
  try {
    const response = await UsersCandles.findAll();
    res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const {
      nombre,
      n_telefono,
      velas_miel,
      velas_sin_miel,
      deuda_total,
      deuda_pendiente,
      cuenta,
    } = req.body;

    const createU = await UsersCandles.create({
      nombre,
      n_telefono,
      velas_miel,
      velas_sin_miel,
      deuda_total,
      deuda_pendiente,
      cuenta,
    });

    res.json(createU);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await UsersCandles.destroy({
      where: {
        id,
      },
    });

    if (response)
      return res.status(200).json({ message: "succes full deleted user" });
    console.log("the user to be deleted is: ", req.params.id);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {
      nombre,
      n_telefono,
      velas_miel,
      velas_sin_miel,
      deuda_total,
      deuda_pendiente,
      cuenta,
    } = req.body;

    const { id } = req.params;

    const updateU = await UsersCandles.findByPk(id);

    updateU.nombre = nombre;
    updateU.n_telefono = n_telefono;
    updateU.velas_miel = velas_miel;
    updateU.velas_sin_miel = velas_sin_miel;
    updateU.deuda_total = deuda_total;
    updateU.deuda_pendiente = deuda_pendiente;
    updateU.cuenta = cuenta;
    
    await updateU.save(); /* otra forma de hacer este mismo paso es con:  UsersCandles.set(req.body); */

    res.json(updateU);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await UsersCandles.findOne({
      where: {
        id,
      },
    });

    if (!response)
      return res
        .status(500)
        .json({ message: "this user not existing in databse" });

    res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


