
const {PokemonAPI} = require('../controllers/PokemonDB_A')


module.exports = GetPokemonId= async (req,res)=>{
    const {id}=req.params
    console.log(id+'el pokemon id')
    try {
            const porAPI = await PokemonAPI(ids)
            
            res.status(200).json(porAPI)
    } catch (error) {
        res.status(404).json({error:error.message})
    }
}