import { StrictMode, useState } from 'react';
import { createRoot } from 'react-dom/client';
import GatoGame from './GatoGame';
import Gatodev from './GatoMidudev';
import './GatoGame.css';

function Main() {
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);

  return (
    <StrictMode>
      <div>
        <button onClick={() => setJuegoSeleccionado(1)}>Gato 1</button>
        <button onClick={() => setJuegoSeleccionado(2)}>Gato 2</button>
      </div>
      {juegoSeleccionado === 1 && <Gatodev />}
      {juegoSeleccionado === 2 && <GatoGame />}
    </StrictMode>
  );
}

createRoot(document.getElementById('root')).render(<Main />);
