const {Pokemon,Type}=require('../db')

const CreatePokemon=async(data)=>{
    try {
        //* extructura de la informacion
        const nuevoPokemon={
            name:data.name.toLowerCase(),
            image:data.image,
            life:data.life,
            attack:data.attack,
            defense:data.defense,
            speed:data.speed,
            height:data.height,
            weight:data.weight,
           
        }
        //*usamos el metodo create para poder crear un nuevo elemento en la tabla pokemon  
        const NewPokemon= await Pokemon.create(nuevoPokemon);
        //*Añadimos la relacion que tenemos con la tabla Type atravez de la porpiedad types que viene de body
        await NewPokemon.addType(data.types);
        await NewPokemon.save();//usamos el metodo save para poder actualizar la informacion el tabla pokemon
        const pokemoncreado= await Pokemon.findOne({//?me tengo que traer atravez del nombre al primer elemento con el cual coincida el nombre que le estoy dando pero tragendo consigo a la informacion con la cual esta relacionada el pokemon
            where:{name:NewPokemon.name},
            include:{
                model:Type,
                attributes:["name"],
                through:{attributes:[]}
            }
        }) 
        return pokemoncreado
    } catch (error) {
        throw  Error(error.message)
    }
}

module.exports={CreatePokemon}