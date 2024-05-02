import { Routes, Route, HashRouter } from 'react-router-dom'
import Inicio from '../pages/Inicio';
import Nosotros from '../pages/Nosotros';

const Rutas = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
      </Routes>
    </HashRouter>
  )
}

export default Rutas
