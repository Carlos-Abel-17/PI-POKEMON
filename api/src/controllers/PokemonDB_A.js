
const axios = require('axios') 
const {Pokemon,Type} = require('../db')

const PokemonAPI = async(ids)=>{
   if(!isNaN(ids)){
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
}else{
   const porDB = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ['name'], 
      through: { attributes: [] } 
    }
  })
  const array= []
  const guardar = array.push(porDB)
  console.log(guardar)
  const filter = guardar.filter((el)=>el.id === ids)
 console.log(filter)
   return filter
}

}


module.exports={PokemonAPI}