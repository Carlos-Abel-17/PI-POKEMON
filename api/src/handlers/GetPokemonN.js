const{PokemonNm_API,PokemonNm_DB}=require('../controllers/PokemonNm_DByA')


module.exports = GetPokemonNM = async (req, res) => {
    try {
        const { name } = req.query;
        console.log(name);
        const porDB = await PokemonNm_DB(name);

        if (porDB) {
            res.status(200).json(porDB);
        } else {
            const porAPIs = await PokemonNm_API(name);
            res.status(200).json(porAPIs);
        }
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};


