// En la componente App incorporamos todo lo que es routers
import './App.css'
//Lo importamos para incorporar las rutas luego de instalar "react-router-dom"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Importamos el componente Home
import Home from './pages/Home/Home'
//Importamos el componente "DetalleBlog"
import DetalleBlog from './pages/Home/DetalleBlog';


function App() {
  return (
  
      /* Formato para las rutas, en la primera utilizamos el componente Home en el index y en la segunda usamos el comp. DetalleBlog en la ruta dinamica /blog/:id*/
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/blogs/:id' element={<DetalleBlog />} />
        </Routes>
      </BrowserRouter>

  
  )
}

export default App
