import React from 'react'
import Cards from '../view/Cards'
import { useEffect ,useState} from 'react';
import { AZ_ZA_Handler, filtertype, orderAttack, resetHandler,filterPokemons } from '../redux/action';
import { useDispatch } from 'react-redux';
import '../css/Homepage.css'
import reseters from '../image/reset.svg'



function HomePage() {
  const [valueType, setValueType] = useState()
  const dispath = useDispatch()
  const handleType =(eltype)=>{
    dispath(filtertype(eltype.target.value))
  }
  useEffect(()=>{
    dispath(filterPokemons('API'))
},[])
function handleFilter(event){
  setValueType('All') 
  dispath(filterPokemons(event.target.value))
}
  const thetype=[
    "normal",
    "fighting",
    "flying",
    "poison",
    "ground",
    "rock",
    "bug",
    "ghost",
    "steel",
    "fire",
    "water",
    "grass",
    "electric",
    "psychic",
    "ice",
    "dragon",
    "dark",
    "fairy",
    "unknown",
    "shadow"
  ]
  const orderAZ_ZA=(order)=>{
     dispath(AZ_ZA_Handler(order.target.value))
  }
  const reseter =()=>{
    dispath(resetHandler())
  }
  const attackhandler=(theorder)=>{
    dispath(orderAttack(theorder.target.value))
  }
  return (
    
    <div className='todo_home'>
        <div style={{display:'flex'}} className='conteiner_filter'>
    <select onChange={handleType} className='select'>
    <option disabled selected value="">select a type</option>
     {thetype.map(tipo=>(
      <option value={tipo}>{tipo}</option>
     ))}
    </select>
    <div>
    <select onChange={orderAZ_ZA} className='select'>
    <option disabled selected value="">order alphabetically</option>
    <option value="AZ">AZ</option>
    <option value="ZA">ZA</option>
    </select>
    <select onChange={attackhandler} className='select'>
    <option disabled selected value="">select a order attack</option>
      <option value="MN">more to less + -</option>
      <option value="NM">less to more - +</option>
    </select>
    </div>
    <div>
    <select 
    onChange={handleFilter} className='select'
    >
            <option value="All">ALL</option>
            <option value="API">API</option>
            <option value="DB">database</option>
           </select>
    </div>
    <div>
    <button onClick={reseter} className="buttonss reset" type="button">
<img src={reseters} alt="reset"  className='img_reset'/>
    Reset
</button>
    </div>
   </div>
     <Cards/>

    </div>
  )
}

export default HomePage