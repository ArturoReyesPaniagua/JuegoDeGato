import { useState } from 'react';
import './GatoGame.css';

const GatoGame = () => {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const calcularGanador = (cuadros) => {
    const lineas = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let linea of lineas) {
      const [a, b, c] = linea;
      if (cuadros[a] && cuadros[a] === cuadros[b] && cuadros[a] === cuadros[c]) {
        return cuadros[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (tablero[index] || calcularGanador(tablero)) return;
    const nuevoTablero = tablero.slice();
    nuevoTablero[index] = isXNext ? 'X' : 'O';
    setTablero(nuevoTablero);
    setIsXNext(!isXNext);
  };

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null));
    setIsXNext(true);
  };

  const ganador = calcularGanador(tablero);
  const estado = ganador ? `Ganador: ${ganador}` : `Turno: ${isXNext ? 'X' : 'O'}`; 

  return (
    <div className="container">
      <h1 className="title">Juego del Gato</h1>
      <div className="board">
        {tablero.map((value, index) => (
          <button
            key={index}
            className="cell"
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>
      <p className="status">{estado}</p> {/*Muestra el ganador*/}
      <button
        onClick={reiniciarJuego}
        className="button"
      >
        Reiniciar
      </button>
    </div>
  );
};

export default GatoGame;
