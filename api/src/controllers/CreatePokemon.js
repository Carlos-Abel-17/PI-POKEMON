const {Pokemon,Type}=require('../db')

const CreatePokemon=async(data)=>{
    try {
        const nuevoPokemon={
            name:data.name.toLowerCase(),
            image:data.image,
            life:data.life,
            attack:data.attack,
            defense:data.defense,
            speed:data.speed,
            height:data.height,
            weight:data.weight,
            types:data.types
        }
        
        const NewPokemon= await Pokemon.create(nuevoPokemon);
        await NewPokemon.addType(data.types);
        await NewPokemon.save();
        const pokemoncreado= await Pokemon.findOne({
            where:{name:NewPokemon.name},
            include:{
                model:Type,
                attributes:["name"],
                through:{attributes:[]}
            }
        }) 
        return pokemoncreado
    } catch (error) {
        throw new Error(error.message)
    }
}

module.exports={CreatePokemon}