import { Precios } from "../models/precios.js";

export const getPrecios = async (req, res) => {
  try {
    const response = await Precios.findAll();
    res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const UpdatePrecios = async (req, res) => {
  try {
    const { miel, sin_miel, batucos, mexicanas,ocho_unidades } = req.body;

    const { id } = req.params;

    const updateU = await Precios.findByPk(id);

    updateU.miel = miel;
    updateU.sin_miel = sin_miel;
    updateU.batucos = batucos;
    updateU.mexicanas = mexicanas;
    updateU.ocho_unidades = ocho_unidades;
   

    await updateU.save(); /* otra forma de hacer este mismo paso es con:  UsersCandles.set(req.body); */

    res.json(updateU);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
