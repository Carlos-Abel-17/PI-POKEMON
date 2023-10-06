const { Router } = require('express');
const GetPokemon = require('../handlers/GetPokemon')
const GetPokemonId = require('../handlers/GetPokemonId');
const GetPokemonN = require('../handlers/GetPokemonN');
const PostPokemon = require('../handlers/PostPokemon');
const GetType = require('../handlers/GetType');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/pokemons/name',GetPokemonN)
router.get('/pokemons',GetPokemon)
router.get('/pokemons/:id',GetPokemonId)
router.post('/pokemons',PostPokemon)
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
  