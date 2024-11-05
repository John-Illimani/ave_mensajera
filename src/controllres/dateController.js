import { Datess } from "../models/date.js";


export const getDates = async (req, res) => {
  try {
    const response = await Datess.findAll();
    res.json(response);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getDate = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await Datess.findOne({
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

