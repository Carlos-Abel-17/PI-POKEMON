
import {GETPOKEMON,FILTER_POKEMONS,SEARCHPOKEMON,FILTERTYPE,ORDER_AZ_ZA,RESET,ORDERATTACK,GETTYPES, CREATEPOKEMON} from "./action"

const initialSate={
  Pokemon:[],
   AllPokemon:[],
   types:[]
   
}


 const rootreducer=(state=initialSate,action)=>{
  
    switch(action.type){
      case GETPOKEMON:
        return{
          ...state,
          Pokemon:action.payload,
          AllPokemon:action.payload
        }
        case SEARCHPOKEMON:
          return{
            ...state,
            Pokemon:[action.payload,...state.AllPokemon]
          }
          case GETTYPES:
            return{
             ...state,
             types:action.payload
            }
            case CREATEPOKEMON:

               {console.log([action.payload,...state.AllPokemon])}
              return{
                ...state,
                Pokemon:[action.payload,...state.AllPokemon]
              }
         case FILTERTYPE:
          console.log(state.AllPokemon.map((pk)=>pk.types))
          return{
            ...state,
            Pokemon:state.AllPokemon.filter((pokemon)=>pokemon.types.includes(action.payload) )
          }
          case ORDER_AZ_ZA:
            let ordenar;
            if (action.payload === 'AZ') {
              ordenar=state.AllPokemon.sort((a,b)=>a.name.localeCompare(b.name))
            }else{
              ordenar=state.AllPokemon.sort((a,b)=>b.name.localeCompare(a.name))
            }
            return{
               ...state,
               Pokemon:[...ordenar]
            }
            case RESET:
              return{
                ...state,
                Pokemon:state.AllPokemon
              }
              case ORDERATTACK:
                let theorder;
                if (action.payload === 'MN') {
                   theorder = [...state.AllPokemon].sort((a, b) => b.attack - a.attack);
                }else{
                   theorder = [...state.AllPokemon].sort((a, b) => a.attack - b.attack);
                }
                return{
                   ...state,
                   Pokemon:[...theorder]
                }
                case FILTER_POKEMONS:
            const isUUID = (uuid) => {
                let regex =
                    /^[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$/;
                return regex.test(uuid);
            };
            if (action.payload === 'All') {
                return {
                    ...state,
                    Pokemon: [...state.AllPokemon]
                }
            } else if (action.payload === 'DB') {
                return {
                    ...state,
                    Pokemon: [...state.AllPokemon].filter((pokemon) => {
                        return isUUID(pokemon.id) === true
                    })
                }
            } else {
                return {
                    ...state,
                    Pokemon: [...state.AllPokemon].filter((pokemon) => {
                        return isUUID(pokemon.id) === false
                    })
                }
            }
              
        default:return{...state}
    }
}

export default rootreducer;