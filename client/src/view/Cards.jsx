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

    const [currentPage, setCurrentPage] = useState(1);//*inicializamos el currentPage en 1 para que no se agrege un 0 a la lista de paginas
    const cardsPerPage = 12;
    useEffect(()=>{
      dispath(getpokemon())//*despachamos y renderizamos los pokemones 
    },[])

  const indexOfLastCard = currentPage * cardsPerPage;//*multiplicamos el numero de la pagina en la que estamos por el limite de cartas por pagina
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;//*restamos el resulatdo de la multiplicacion con el limite de cartas por pagina
  const currentCards = response.slice(indexOfFirstCard, indexOfLastCard);//*aca seeeparamos y obtnemos un nuevo array con las cartas que se renderizaran

  const totalPages = Math.ceil(response.length / cardsPerPage);//*dividimos la cantidad de pokemons con la cantidad de cartas por pagina 

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
        {/* //! pasamos la info que queremos que tenga la carta del pokemon */}
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