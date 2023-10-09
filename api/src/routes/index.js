const { Router } = require('express');
const GetPokemon = require('../handlers/GetPokemon')
const GetPokemonId = require('../handlers/GetPokemonId');
const GetPokemonN = require('../handlers/GetPokemonN');
const PostPokemon = require('../handlers/PostPokemon');
const GetType = require('../handlers/GetType');


const router = Router();
//?ruta para la busqueda por nombre ↓
router.get('/pokemons/name',GetPokemonN)
//?ruta para poder llamar a los pokemones tanto como de la base de datos como a los de la api ↓
router.get('/pokemons',GetPokemon)
//?ruta para poder llamar a los pokemones por su id tanto a los de la api como a los de la base de datos ↓ 
router.get('/pokemons/:id',GetPokemonId)
//?ruta para poder crear o postear a un nuevo pokemon ↓
router.post('/pokemons',PostPokemon)
//?ruta para llamar a todos los tipos de pokemones que hay ↓
router.get ('/type',GetType)
module.exports = router;

// {
//     "name": "angesl",
//     "image": "https://cdn.vox-cdn.com/thumbor/PqAwdNpc7p-5GUCSMxQPehSU-ck=/0x0:1920x1200/1200x800/filters:focal(810x375:1116x681)/cdn.vox-cdn.com/uploads/chorus_image/image/72524797/pikachu_artwork.0.jpg",
//     "attack": 89,
//     "defense": 66,
//     "life":35,
//     "speed": 48,
//     "weight": 83,
//     "height": 89,
//     "type1": 3,
//     "type2": 8
//   }
  