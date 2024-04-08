import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from '../pages/Inicio';
import Facultad from '../pages/Facultad';
import Departamento from '../pages/Departamento';
import Escuela from '../pages/Escuela';
import Posgrado from '../pages/Posgrado';
import Investigacion from '../pages/Investigacion';

const Rutas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/facultad" element={<Facultad />} />
        <Route path="/departamento" element={<Departamento />} />
        <Route path="/escuela" element={<Escuela />} />
        <Route path="/investigacion" element={<Investigacion />} />
        <Route path="/posgrado" element={<Posgrado />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Rutas
