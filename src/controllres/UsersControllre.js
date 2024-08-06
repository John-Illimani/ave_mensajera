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
      paterno,
      materno,
      n_telefono,
      deuda_pendiente,
      abono_deuda,
    } = req.body;

    const createU = await UsersCandles.create({
      nombre,
      paterno,
      materno,
      n_telefono,
      deuda_pendiente,
      abono_deuda,
    });

    res.json(createU);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const response= await UsersCandles.destroy({
      where: {
        id,
      },
    });


    if(response)
        return res.status(200).json({message:'succes full deleted user'});
    console.log('the user to be deleted is: ',req.params.id);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const {
      nombre,
      paterno,
      materno,
      n_telefono,
      deuda_pendiente,
      abono_deuda,
    } = req.body;

    const { id } = req.params;

    const updateU = await UsersCandles.findByPk(id);

    updateU.nombre = nombre;
    updateU.paterno = paterno;
    updateU.materno = materno;
    updateU.n_telefono = n_telefono;
    updateU.deuda_pendiente = deuda_pendiente;
    updateU.abono_deuda = abono_deuda;

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

    if(!response)
        return res.status(500).json({message: 'this user not existing in databse'})

    res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateDeuda = async(req,res)=>{
  try {
    const {id}= req.params;
    const response = await UsersCandles.update({
      deuda_pendiente: Sequelize.literal(`deuda_pendiente-${abono}`)
    },{
      where:{
        id
      }
    })
  } catch (error) {
    return res.status(500).json({message:error.message})
  }
}
