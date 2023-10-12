import React from 'react'
import '../css/CardStyle.css'
import {useNavigate} from "react-router-dom";


function Card({name,image,types,id}) {
   
   const navigate=useNavigate()
  function navigateHandler() {
    navigate(`/detail/${id}`);
  } 
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
    <div className='todo_page'>
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
  
  <button className='button' onClick={navigateHandler}> Detail
  </button>
  
</div>
    </div>
    </div>
  )
}

export default Card