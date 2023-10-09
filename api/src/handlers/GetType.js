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
    const response = await axios.get(url);//*pedimos informacion a el array principal del api
    const response2 = response.data.results.map((element) => {
      //*con la funcion getdetail extraemos la informacion de cada URL que este en el array principal
      return getDetails(element);
    });

    const responseFinal = await Promise.all(response2);
    //*iteramos el array que nos devulve el Promise.All
    for (const element of responseFinal) {
      await Type.findOrCreate({//*cada informacion nueva que ingrese va ser buscada atravez de su nombre primero si ya existe si no hay pues lo crea
        where: { name: element.name },
      });
    }
    const DBfind = await Type.findAll();//*devolvemos todos los elementos que esten en la tabla pokemons
    return res.status(200).json(DBfind);
  } catch (error) {
      return res.status(400).json({ error: error.message });
  }
};

module.exports = GetTypes;

