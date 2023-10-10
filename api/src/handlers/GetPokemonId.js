
const {PokemonAPI} = require('../controllers/PokemonDB_A')


module.exports = GetPokemonId= async (req,res)=>{
    const {id}=req.params
    try {
        //*le pasamos el id resivido por params a la funcion llamda PokemonAPI que esta en el archivo PokemonDB_A
            const porAPI = await PokemonAPI(id)
            res.status(200).json(...porAPI)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}