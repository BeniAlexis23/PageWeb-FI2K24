import { Routes, Route, HashRouter } from 'react-router-dom'
import Inicio from '../pages/Inicio';
import Facultad from '../pages/Facultad';
import Departamento from '../pages/Departamento';
import Escuela from '../pages/Escuela';
import Posgrado from '../pages/Posgrado';
import Investigacion from '../pages/Investigacion';

import ScrollToTop from './ScrollToTop';

const Rutas = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/facultad" element={<Facultad />} />
        <Route path="/departamento" element={<Departamento />} />
        <Route path="/escuela" element={<Escuela />} />
        <Route path="/investigacion" element={<Investigacion />} />
        <Route path="/posgrado" element={<Posgrado />} />
      </Routes>
    </HashRouter>
  )
}

export default Rutas