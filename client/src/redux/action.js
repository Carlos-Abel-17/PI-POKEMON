export const SEARCHPOKEMON ='SEARCHPOKEMON'
export const GETPOKEMON ='GETPOKEMON'
export const FILTERTYPE ='FILTERTYPE'
export const ORDER_AZ_ZA='ORDER_AZ_ZA'
export const RESET='RESET'
export const ORDERATTACK='ORDERATTACK'
export const GETTYPES='GETTYPES'
export const CREATEPOKEMON = 'CREATEPOKEMON' 
export const FILTER_POKEMONS='FILTER_POKEMONS'
// export const FIERWATER='FIREWATER'

import axios from 'axios'



export const searchpokemon = (Name) => {
    return async (dispatch) => {
      try {
        const convertido = Name.toLowerCase();
        const { data } = await axios.get(`http://localhost:3001/pokemons/name?name=${convertido}`);
        dispatch({
          type: SEARCHPOKEMON,
          payload: data
        })
        
      } catch (error) {
        alert('el nombre del pokemon no existe sea mas expecifico con el nombre por favor')
      }
    };
  };


export const getpokemon= ()=>{
    const Url ='http://localhost:3001/pokemons'
    
    return async(dispath)=>{
        try {
         const {data} = await axios.get(Url)
        
            return dispath({type:GETPOKEMON,
              payload:data})
        } catch (error) {
          console.log({error:error.message})
        } 
    }
}

export const getTypes =()=>{
  const urltype = 'http://localhost:3001/type'
  return async(dispatch)=>{
    try {
      const{ data } = await axios.get(urltype)
        return dispatch({
          type:GETTYPES,
          payload:data
        })
     
      } catch (error) {
      console.log({error:error.message})
    }
  }
}


export const createPokemon=(datos)=>{
   const urlcreate = "http://localhost:3001/pokemons"
   return async(dispatch)=>{
    try {

       await axios.post(urlcreate,datos)
       return dispatch({
        type:CREATEPOKEMON,
        payload:datos
       })
    } catch (error) {
      console.log({error:error.message})
    }
   }
}

export const filtertype=(types)=>{
 return{
  type:FILTERTYPE,
  payload:types
 }
}
export const filterPokemons = (id) => {
  return {
      type: FILTER_POKEMONS,
      payload: id
  }
}

export const AZ_ZA_Handler=(order)=>{
  return{
    type:ORDER_AZ_ZA,
    payload:order
  }
}

export const resetHandler=()=>{
  return{
    type:RESET
  }
}

export const orderAttack=(theorder)=>{
  return{
    type:ORDERATTACK,
    payload:theorder
  }
}
