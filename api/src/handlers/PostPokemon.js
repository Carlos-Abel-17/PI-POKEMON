const {Pokemon,Type} = require('../db') 

module.exports=PostPokemon=async(req,res)=>{
 const {name,image,life,attack,defense,speed,height,weight,types}=req.body
 console.log(req.body)
 if(!name||!life||!attack||!defense||!speed||!height||!weight||!types)res.status(400).json('faltan datos')
 try {
   const nuevoPokemon = await Pokemon.create({
      name:name,
      image: image,
      life:life,
      attack:attack,
      defense:defense,
      speed:speed,
      height:height,
      weight:weight
   })
   console.log(nuevoPokemon)
   await nuevoPokemon.addTypes(types)
   const thePokemon = await Pokemon.findAll() 
    res.status(200).json(thePokemon);
 } catch (error) {
    res.status(400).json({error:error.message})
 }

}