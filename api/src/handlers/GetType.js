//TODO:me va traer toda la informacion de la URL en la cual esta todos los typos de pokemones
const axios = require("axios");
const { Type } = require("../db.js");
const url = "https://pokeapi.co/api/v2/type";

const GetTypes = async (req, res) => {
   //*esta funcion me va a devolver la iformacion mas profunda de la url 
  const getDetails = async (element) => {
    const detailResponse = await axios.get(element.url);
    return detailResponse.data;
  };

  try {
    const response = await axios.get(url);
    const response2 = response.data.results.map((element) => {
      return getDetails(element);
    });

    const responseFinal = await Promise.all(response2);
    for (const element of responseFinal) {
      await Type.findOrCreate({
        where: { name: element.name },
      });
    }
    const DBfind = await Type.findAll();
    return res.status(200).json(DBfind);
  } catch (error) {
      return res.status(400).json({ error: error.message });
  }
};

module.exports = GetTypes;

