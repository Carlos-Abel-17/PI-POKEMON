const axios =require('axios')


const GetPokemons=async(url)=>{
   const respo = await axios(url)
   const data  = respo.data
   const tipo=data.types.map(elem => ({
    name: elem.type.name
   }))
    const pokemonData = {
          id: data.id,
          name: data.name,
          image: data.sprites.other.home.front_default,
          life: data.stats[0].base_stat,
          attack: data.stats[1].base_stat,
          defense: data.stats[2].base_stat,
          speed: data.stats[5].base_stat,
          height: data.height,
          weight: data.weight,
          types: tipo
        };
       
        return pokemonData
  }

module.exports={GetPokemons
 
}
