//TODO:esta funcion tiene la finalidad de taerme un pokemon tanto como del apii o de la base de datos 
const axios = require('axios') 
const {Pokemon,Type} = require('../db')

const PokemonAPI = async(id)=>{
   if(!isNaN(id)){//? Si el id no es una string entonces lo va a buscar en la api
 const porURL = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
 const data  = porURL.data
 const tipo=data.types.map(elem => ({
  name: elem.type.name
 }))
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
   types:tipo
 }
 return POKEMON
}else{//?De lo contrario va a buscar el primari key en la base de ddtos
   const porDB = await Pokemon.findAll({ where: { id: id },include:[{model: Type, attributes: ['name'],through: { attributes: [] }}]}, );
  console.log(porDB)
   return porDB
}

}


module.exports={PokemonAPI}