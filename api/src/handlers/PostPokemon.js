const { CreatePokemon } = require('../controllers/CreatePokemon');
const {Pokemon} = require('../db') 

module.exports=PostPokemon=async (req, res) => {
   try{
     const data=req.body
     if (!data.name||!data.image||!data.height||!data.weight||!data.types) {
      return res.status(400).json('falta datos')
     }
     const findPokemon=await Pokemon.findOne({
      where:{name:data.name.toLowerCase()}
     })
     if (findPokemon) {
      return res.status(302).json({message:"this pokemon already exists"})
     }
     const newpokemon =await CreatePokemon(req.body)
     return res.json(newpokemon)
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 };