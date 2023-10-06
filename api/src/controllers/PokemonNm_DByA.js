const axios =require('axios')
const {Pokemon} =require('../db')


const PokemonNm_API = async(name)=>{
    console.log(name + ' del pokemon name')
    const convertido = name.toLowerCase()
    const {data} =await axios.get(`https://pokeapi.co/api/v2/pokemon/${convertido}`)
    
    if (data.name) {
        
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
        types:data.types[0].type.name
        
    }
    return POKEMON
}
}
const PokemonNm_DB=async(nameP)=>{
    const encontraP = await Pokemon.findOne({
        where:{name:nameP}
    })
    return encontraP
}

module.exports={
    PokemonNm_API,
    PokemonNm_DB
}

