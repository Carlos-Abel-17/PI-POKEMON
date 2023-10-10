import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Landing from './components/Landigpage.jsx'
import HomePage from './components/HomePage'
import DetailPage from './components/DetailPage'
import FormPage from './components/FormPage'
import Nav from './view/Nav'
import Footer from './view/Footer'
//TODO: rutas y la localizacion de los elementos
function App() {
  const location = useLocation()
  
  return (
    //?Las rutas de las paginas
    <div className='div_general'>
    {location.pathname !== '/' && (<Nav/>)}
    <Routes>
      <Route path='/' element={<Landing />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/detail/:id' element={<DetailPage />} />
      <Route path='/from'  element={<FormPage />}/>
    </Routes>
     {location.pathname !== '/' && (<Footer/>)}
    </div>
  )
}

export default App
