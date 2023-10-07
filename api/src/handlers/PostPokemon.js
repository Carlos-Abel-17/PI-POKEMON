const {Pokemon,Type} = require('../db') 

module.exports=PostPokemon=async (req, res) => {
   const { name, image, life, attack, defense, speed, height, weight, types } = req.body;
 
   if (!name || !life || !attack || !defense || !speed || !height || !weight || !types) {
     return res.status(400).json('Faltan datos');
   }
 
   try {
     const nuevoPokemon = await Pokemon.create({
       name,
       image,
       life,
       attack,
       defense,
       speed,
       height,
       weight
     });
 
     await Promise.all(types.map(async (item) => {
       const tipoAsociado = await Type.findByPk(item);
       console.log(tipoAsociado)
       if (tipoAsociado) {
         await nuevoPokemon.addType(tipoAsociado);
       }
     }));
 
     res.status(200).json(nuevoPokemon);
   } catch (error) {
     res.status(400).json({ error: error.message });
   }
 };