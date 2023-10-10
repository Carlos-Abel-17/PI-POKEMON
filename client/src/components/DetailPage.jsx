import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import '../css/DetailStyle.css'


function DetailPage() {
 const {id} = useParams()

 const [pokemon,setpokemon]=useState({});

 useEffect(()=>{///*el encargado de buscar atravez de el id sea de api o DB
  console.log(id)
  axios(`http://localhost:3001/pokemons/${id}`).then(({data})=>{
console.log(data)
    if(data.name){
      setpokemon(data);
    }
    else{
      alert('No hay pokemon con ese ID')
    }
  })
  return setpokemon({})
 },[])

 const typess = pokemon.types
 const tipos=(typess)=>{
  if (Array.isArray(typess)) {//*si es un array y adentro trae objetos asi es como viene mis tipos 
    return typess.map(item => {
      if (typeof item === 'object' && item !== null) {
        return Object.values(item).join(', ');
      }
      return item;
    }).join(', ');
  }

  if (typeof typess === 'object' && typess !== null) {//*si solo viene un objetos tuve un problemas con eso
    return Object.values(typess).join(', ');
  }

  if (typeof typess === 'string') {//*a los pokemones que busco por la api que no esten agregados en la paginacion su tipos viene como string 
    return typess;
  }
}
  return (
    <div className='toda_pagina'>
        <div className='caja_data'>
    <div className='name_image'>
  <span className='Nombre'>{pokemon.name}</span>
    <img src={pokemon.image} alt="pokemon" className='laimagen'/>
    </div>
      <div className="cards">
  <div className="wrapper">
    <div className="cuadros ">
    HP:
      <span className="hex">{pokemon.life}</span>
    </div>
    <div className="cuadros ">
    TYPE:
      <span className="hex">{tipos(typess)}</span>
    </div>
    <div className="cuadros">
    ATTACK:
      <span className="hex">{pokemon.attack}</span>
    </div>
     <div className="cuadros ">
     SPEED:
      <span className="hex">{pokemon.speed}</span>
    </div>
    <div className="cuadros ">
    HEIGHT:
      <span className="hex">{pokemon.height}</span>
    </div>
    <div className="cuadros ">
    WEIGHT:
      <span className="hex">{pokemon.weight}</span>
    </div>
    </div>
    </div>
        </div>

    </div>
    )}
  


export default DetailPage