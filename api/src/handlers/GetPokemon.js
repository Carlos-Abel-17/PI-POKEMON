//TODO:se encarga de traerme a todos pokemones 
const axios = require('axios')
const URL= 'https://pokeapi.co/api/v2/pokemon?offset=&limit=60'
 const {GetPokemons,GetDB}=require('../controllers/GetPokemons')



const GetPokemon = async (req,res)=>{
 try {
   const {data}= await axios.get(URL)//*extracion de la informacion
   const respu = data.results
   const pokelist=[]
   for (const poke of respu) {
      const urlpok = await GetPokemons(poke.url)
      if(urlpok){
         pokelist.push(urlpok)
      }
   }
 
   const pokeDB =await GetDB()
  
   const respuesta=[...pokeDB,...pokelist]
   res.status(200).json(respuesta)
 } catch (error) {
    res.status(500).json({error:error.message})
 }
}
module.exports=GetPokemon
