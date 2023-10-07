import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { getpokemon} from '../redux/action'
import { useEffect,useState } from 'react'
import Card from './Card'
import '../css/CardsStyle.css'
import Paginacion from './Paginacion'

function Cards() {
  const dispath= useDispatch()
    const response = useSelector((state)=>state.Pokemon)
   
   console.log(response)
    
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 12;
    useEffect(()=>{
      dispath(getpokemon())
      
    },[])

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = response.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(response.length / cardsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };


  return (
    <div className='conteiner'>
      <div className='paginacion'>
        <h4 className='el_h4'>choose the page you want to see: </h4>
      <Paginacion 
       currentPage={currentPage}
       totalPages={totalPages}
       onPageChange={handlePageChange}
     />
       </div>
       <div   className='container-card'>
      {
        currentCards.map((pok)=>{
          console.log(pok.name)
          return(
            <Card
            keys={pok.id}
            id={pok.id}
             name={pok.name}
             image={pok.image}
             types={pok.types}
             
            />
 
          )
        })
      }
      </div>
      
    </div>
  )
}

export default Cards