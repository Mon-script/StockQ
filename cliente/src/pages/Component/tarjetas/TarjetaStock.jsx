// TarjetaStock.js
import React, { useState } from 'react';
import './TarjetaStock.css'; // Asegúrate de importar tu archivo de estilos
import Logo from '../img/Logo.jpg';
import CodigodeBarras2 from '../codigodebarra/CodigodeBarras2';

const TarjetaStock = ({ producto }) => {
  const { nombre, peso, calidad, color, idEntrada } = producto;
  const [mostrarFormularioSalida, setMostrarFormularioSalida] = useState(false);

  const manejarSalida = () => {
    setMostrarFormularioSalida(true);
  };

  return (
    <div className="cards">
      <div className="title-1">{nombre}</div>
      <img src={Logo} alt="" className='w-[250px] h-[250px] border rounded p-6' />
      <div className="content">
        peso: {peso} <br />
        calidad: {calidad} <br />
        color: {color}
      </div>
      <button className="btnp" onClick={manejarSalida}>Salida</button>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
      {/* Mostrar el formulario si mostrarFormularioSalida es true */}
      <div className='CodigosdeB'>
        {mostrarFormularioSalida && (
          <CodigodeBarras2
            estadoForm={setMostrarFormularioSalida}
            Texto="SALIDA"
            idEntrada={idEntrada}
          />
        )}
      </div>
    </div>
  );
};

export default TarjetaStock;




