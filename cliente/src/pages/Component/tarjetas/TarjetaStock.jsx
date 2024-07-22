import React, { useState } from 'react';
import './TarjetaStock.css'; // Asegúrate de importar tu archivo de estilos
import Logo from '../img/Logo.jpg'
import CodigodeBarra2 from '../codigodebarra/CodigodeBarras2';
import CodigodeBarras1 from '../codigodebarra/CodigodeBarra1';

const TarjetaStock = ({ producto }) => {
  const { nombre, peso, calidad, color,idEntrada } = producto;
  {/*const [mostrarFormulario, setMostrarFormulario] = useState(false);*/}
  const [mostrarFormularioSalida, setMostrarFormularioSalida] = useState(false);

  
    const manejarSalida = () => {
      setMostrarFormularioSalida(true);}

  return (
    <div className="cards">
      <div className="title-1">{nombre}</div>
      <img src={Logo} alt="" className='w-[250px] h-[250px] border rounded p-6' />
      <div className="content">
        peso:{peso} <br></br>
        calidad:{calidad} <br></br>
        color:{color}
      </div>
      {/*<button className="btn" onClick={handleIngresarClick} >Entrada</button>*/}
      <button className="btn1" onClick={manejarSalida}>Salida</button>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
      {/* Mostrar el formulario si mostrarFormulario es true */}
      <div className='CodigosdeB'>
      {mostrarFormulario && <CodigodeBarras1 Texto="INGRESAR"></CodigodeBarras1>}
      {mostrarFormularioSalida && <CodigodeBarra2 estadoForm={setMostrarFormularioSalida} Texto="SALIDA"></CodigodeBarra2>}
      </div>
    </div>
  );
};


export default TarjetaStock;



