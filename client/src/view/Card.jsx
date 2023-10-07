import React from 'react'
import '../css/CardStyle.css'
import {useNavigate} from "react-router-dom";


function Card({name,image,types,id}) {
   
   const navigate=useNavigate()
  function navigateHandler() {
    navigate(`/detail/${id}`);
  } 
  const tipos=()=>{
    if (types===undefined) {
        return 'es indefinido'
    }
    const lostipos = types.map((elem)=>elem.name)
    console.log(lostipos)
    return lostipos
  }
  return (
    <div>
    <div className='toda_la_carta'>
        <div className="card">
  <div className="card-border-top">
  </div>
  <div className="img">
        <img src={image} className='la_image' alt="iamge" />
  </div>
        <h2 className='h2_span'>
  <span key={id} className='span_card'> 
   {name}
  </span>
        </h2>
  <h3 className="job"> 
    Type:{tipos()}
  </h3>
  
  <button className='button' onClick={navigateHandler}> Click
  </button>
  
</div>
    </div>
    </div>
  )
}

export default Card