import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Imagen1 from './components/Imagen1'
import Imagen2 from './components/Imagen2'
import Imagen3 from './components/Imagen3'
import Imagen4 from './components/Imagen4'
import Imagen5 from './components/Imagen5'
import Imagen6 from './components/Imagen6'
import Imagen7 from './components/Imagen7'
import Imagen8 from './components/Imagen8'
import Imagen9 from './components/Imagen9'
import Imagen10 from './components/Imagen10'
import Imagen11 from './components/Imagen11'
import Imagen12 from './components/Imagen12'
import Navegacion    from './components/Navegacion';

const imagenes = [
  { id: 1, componente: Imagen1 },
  { id: 2, componente: Imagen2 },
  { id: 3, componente: Imagen3 },
  { id: 4, componente: Imagen4 },
  { id: 5, componente: Imagen5 },
  { id: 6, componente: Imagen6 },
  { id: 7, componente: Imagen7 },
  { id: 8, componente: Imagen8 },
  { id: 9, componente: Imagen9 },
  { id: 10, componente: Imagen10 },
  { id: 11, componente: Imagen11 },
  { id: 12, componente: Imagen12 },
];

function App() {
  return (
    <Router>
      <div className='container'>
        <h1 className='text-center mb-5 mt-3'>Galeria</h1>
      </div>
      <Routes>
        {imagenes.map((imagen) => (
          <Route
            key={imagen.id}
            path={`/Imagen${imagen.id}`}
            element={<imagen.componente />}
          />
        ))}
      </Routes>
      <Navegacion />
    </Router>
  );
}


export default App;
