import React from 'react'
import '../css/LandingStyle.css'
import pikachu from '../image/pikachu-laending.png'
import pokebola from '../image/pokebola.png'
import logotipo from '../image/log-pokemon.png'
import { Link } from 'react-router-dom'
//TODO:la presentacion
function Landigpage() {
  return (
 <div className='fondo'>
    <div className='logo'>
        <img className='pokebola' src={pokebola} alt="pokebola" />
        <img src={logotipo} className='pokebola' alt="logotipo" />
    </div>
 <div className='pokemon'>
    <h1 className='texto'>¡POKEMON!</h1>
 </div>
 
 <div className='imagen'>
    
    <img className='pikachu' src={pikachu} alt='pikachu'/>
  
 </div>
 
 <section className='descripcion'>
   <div className='text-descrip'>
    <p className='text'>welcome to this website that is <br></br> based on the pokemon cartoon where you <br></br>  can see pokemon cards and see their details in a  <br></br> few words this is a pokedex</p>
   </div>
   <div>
 <Link to={'/home'}><button className='boton'><span className='span'>lets go</span></button></Link>
   </div>
 </section>
 </div>
  )
}

export default Landigpage