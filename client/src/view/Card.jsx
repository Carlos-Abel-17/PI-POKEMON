import React from 'react'
import '../css/CardStyle.css'
import {useNavigate} from "react-router-dom";


function Card({name,image,types,id}) {
   
   const navigate=useNavigate()
  function navigateHandler() {
    navigate(`/detail/${id}`);
  } 
  const tipos=(typess)=>{
    if (Array.isArray(typess)) {
      return typess.map(item => {
        if (typeof item === 'object' && item !== null) {
          return Object.values(item).join(', ');
        }
        return item;
      }).join(', ');
    }
  
    if (typeof typess === 'object' && typess !== null) {
      return Object.values(typess).join(', ');
    }
  
    if (typeof typess === 'string') {
      return typess;
    }
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
    Type:{tipos(types)}
  </h3>
  
  <button className='button' onClick={navigateHandler}> Click
  </button>
  
</div>
    </div>
    </div>
  )
}

export default Card