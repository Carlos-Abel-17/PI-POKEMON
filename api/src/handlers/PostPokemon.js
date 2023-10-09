const { CreatePokemon } = require('../controllers/CreatePokemon');
const {Pokemon} = require('../db') 

module.exports=PostPokemon=async (req, res) => {
   try{
     const data=req.body
     //! Verificacion de la informacion resivida por body
     if (!data.name||!data.image||!data.height||!data.weight||!data.types) {
      return res.status(400).json('missing data')
     }

     const findPokemon=await Pokemon.findOne({//?Que me traiga el primer elemento de la base de datos que coincida con el nombre que le mando   
      where:{name:data.name.toLowerCase()}
     })

     if (findPokemon) {//*si la constante devuelve algo me se activa esta condicion que me va a decir que el pokemon ya existe 
      return res.status(302).json({message:"this pokemon already exists"})
     }
     //!la funcion que se encargara de crear al nuevo pokemon 
     const newpokemon =await CreatePokemon(req.body)
     return res.status(200).json(newpokemon)

   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 };