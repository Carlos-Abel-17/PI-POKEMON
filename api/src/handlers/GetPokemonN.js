//TODO: la finalidad de esta funcion es que me pueda buscar y traer el pokemon atravez de su nombre
const{PokemonNm_API,PokemonNm_DB}=require('../controllers/PokemonNm_DByA')


module.exports = GetPokemonNM = async (req, res) => {
    try {
        const { name } = req.query;
        console.log(name);
        //?Le pasamos el nombre resivido a la funcion PokemonNM_DB para que pueda buscar lo en la base de datos 
        const porDB = await PokemonNm_DB(name);
        if (porDB) {//*si obtengo respuesta de la funcion la devulvo en formato JSON
            res.status(200).json(porDB);
        } else {//*De lo contrario va a buscar en el api y lo voy a devolver en formato JSON 
            const porAPIs = await PokemonNm_API(name);
            res.status(200).json(porAPIs);
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


