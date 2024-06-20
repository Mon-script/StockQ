
import TarjetaStock from "../Component/tarjetas/TarjetaStock";
import Matriz from "../Component/matrizStock/matrizS";
import "./Stockpag.css";

export const Stock = () => {
  const numEstantes = 3;
  const numFilas = 2;
  const numColumnas = 3;

  const matrizEjemplo = [];
  for (let i = 0; i < numEstantes; i++) {
    matrizEjemplo.push([]);
    for (let j = 0; j < numFilas; j++) {
      matrizEjemplo[i].push([]);
      for (let k = 0; k < numColumnas; k++) {
        matrizEjemplo[i][j].push(`${String.fromCharCode(65 + i)}${j + 1}${String.fromCharCode(65 + k)}`);
      }
    }
  }

  const productos = [

    { nombre: 'Frutilla', peso: '30kg', calidad: 'Buena', color: 'rojas' },
    { nombre: 'Manzana', peso: '25kg', calidad: 'Media', color: 'verde' },
    { nombre: 'Pera', peso: '20kg', calidad: 'Premium', color: 'amarilla' },
    { nombre: 'Frutilla', peso: '30kg', calidad: 'primera calidad', color: 'rojas' },
    { nombre: 'Manzana', peso: '25kg', calidad: 'segunda calidad', color: 'verde' },
    { nombre: 'Pera', peso: '20kg', calidad: 'tercera calidad', color: 'amarilla' }

    // Otros productos...
  ];

  return <Matriz estantes={matrizEjemplo} productos={productos} />;
};

/*export const Stock=()=>{

  const matrizEjemplo = [
    // Estante 1
    [
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
    ],
    // Estante 2
    [
      ['G', 'H', 'I'],
      ['J', 'K', 'L'],
    ],
    // ... más estantes
  ];

  return <Matriz estantes={matrizEjemplo} />;
  

    return(
          <>
        <div className="TarjetaStock">
            {<TarjetaStock/> }

        </div>
          
          </>
    )
}
*/
/*numeroooo 2 
export const Stock = () => {
  const numEstantes = 2;
  const numFilas = 3;
  const numColumnas = 3;

  const matrizEjemplo = [];
  for (let i = 0; i < numEstantes; i++) {
    matrizEjemplo.push([]);
    for (let j = 0; j < numFilas; j++) {
      matrizEjemplo[i].push([]);
      for (let k = 0; k < numColumnas; k++) {
        matrizEjemplo[i][j].push(`${String.fromCharCode(65 + i)}${j + 1}${String.fromCharCode(65 + k)}`);
      }
    }
  }

  const productos = [
    { nombre: 'Frutilla', peso: '30kg', calidad: 'primera calidad', color: 'rojas' },
    { nombre: 'Manzana', peso: '25kg', calidad: 'segunda calidad', color: 'verde' },
    { nombre: 'Pera', peso: '20kg', calidad: 'tercera calidad', color: 'amarilla' },
  ];

  const ejemplo = [
    [0, null, 1],
    [null, 2, null],
  ];

  return (
    <>
      <h2>Stock Component</h2>
      <Matriz estantes={matrizEjemplo} productos={productos} ejemplo={ejemplo} />
    </>
  );
};
*/

