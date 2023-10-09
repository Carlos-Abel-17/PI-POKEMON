//TODO:se encarga de traerme a todos pokemones 
const axios = require('axios')
const URL= 'https://pokeapi.co/api/v2/pokemon?offset=&limit=60'
 const {GetPokemons}=require('../controllers/GetPokemons')
 const {Pokemon,Type}=require('../db')


const GetPokemon = async (req,res)=>{
 try {
   const {data}= await axios.get(URL)//*extracion de la informacion
   const respu = data.results
   const pokelist=[]
   for (const poke of respu) {
      //!la funcion GetPokemons esta en la carpeta controllers es el encargado de dar la extructura de la informacion que viene desde la api 
      const urlpok = await GetPokemons(poke.url)
      if(urlpok){
         pokelist.push(urlpok)//*guadamos la informacion resivida por la funcion GetPokemons
      }
   }
 
   //? Esta constante ↓ es la encargada de taer al pokemon creado de la base de datos con la relacion que le hicimos con la tabla Type atravez de la tabla intermedia 
   const pokeDB = await Pokemon.findAll({
      include: {
        model: Type,
        attributes: ['name'], 
        through: { attributes: [] } 
      }
    })
   
    //*ya que los dos viene en un array aca usamos spread operator para poder dejao solo los objetos
   const respuesta=[...pokeDB,...pokelist]
   res.status(200).json(respuesta)
 } catch (error) {
    res.status(500).json({error:error.message})
 }
}
module.exports=GetPokemon
