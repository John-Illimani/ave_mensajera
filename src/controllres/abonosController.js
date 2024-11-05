import { Abonos } from "../models/abonos.js";


export const getAbonos = async (req, res) => {
  try {
    const response = await Abonos.findAll();
    res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAbono = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await Abonos.findOne({
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

