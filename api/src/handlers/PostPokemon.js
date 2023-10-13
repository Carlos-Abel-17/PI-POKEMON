const { CreatePokemon } = require('../controllers/CreatePokemon');
const {Pokemon} = require('../db') 

module.exports=PostPokemon=async (req, res) => {
   try{
     const data=req.body
     //! Verificacion de la informacion resivida por body
     if (!data.name||!data.image||!data.height||!data.weight||!data.types) {
      return res.status(400).json('missing data')
     }

     const findPokemon=await Pokemon.findOne({
      where:{name:data.name.toLowerCase()}
     })

     if (findPokemon) {
      return res.status(302).json({message:"this pokemon already exists"})
     }
     
     const newpokemon =await CreatePokemon(req.body)
     return res.status(200).json(newpokemon)

   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 };