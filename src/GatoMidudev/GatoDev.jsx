import { useState } from "react";

const Turnos = {
  X: "X",
  O: "O",
};

const Cuadrado = ({ children, isSelected, actualizarTablero, index }) => {
  const className = `cuadrado ${isSelected ? "is-selected" : ""}`;

  return (
    <div className={className} onClick={() => actualizarTablero(index)}>
      {children}
    </div>
  );
};

function App() {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState(Turnos.X);

  const actualizarTablero = (index) => {
    if (tablero[index]) return; 

    const nuevoTablero = [...tablero];
    nuevoTablero[index] = turno;
    setTablero(nuevoTablero);

    setTurno(turno === Turnos.X ? Turnos.O : Turnos.X);
  };

  return (
    <main className="tablero">
      <h1>Tablero de Gato</h1>
      <section className="juego">
        {tablero.map((valor, index) => (
          <Cuadrado key={index} index={index} actualizarTablero={actualizarTablero}>
            {valor}
          </Cuadrado>
        ))}
      </section>
      <section className="turno">
        <h2>Turno actual: {turno}</h2>
      </section>
    </main>
  );
}

export default App;
