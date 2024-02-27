import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio';
import Nosotros from '../pages/Nosotros';

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
