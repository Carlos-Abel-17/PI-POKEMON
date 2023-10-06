
const axios = require('axios') 
const {Pokemon} = require('../db')

const PokemonAPI = async(id)=>{
   if(!isNaN(id)){
 const porURL = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
 const data  = porURL.data
 const POKEMON ={
   id: data.id,
   name: data.name,
   image: data.sprites.other.home.front_default,
   life: data.stats[0].base_stat,
   attack: data.stats[1].base_stat,
   defense: data.stats[2].base_stat,
   speed: data.stats[5].base_stat,
   height: data.height,
   weight: data.weight,
   types:data.types[0].type.name,
 }
 return POKEMON
}else{
   const porDB = await Pokemon.findByPk(id)
   return porDB
}

}


module.exports={PokemonAPI}