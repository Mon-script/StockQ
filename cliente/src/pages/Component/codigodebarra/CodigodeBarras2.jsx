import React, { useState } from 'react';
import "./CodigodeBarra2.css";

const CodigodeBarras2 = ({estadoForm ,Texto, idEntrada}) => {
  const [codigoBarras, setCodigoBarras] = useState('');
  const [idEmpleado, setIdEmpleado] = useState('');

  const manejarCambioCodigoBarras = (event) => {
    setCodigoBarras(event.target.value);
  };

  const obtenerInformacionCodigoBarras = () => {
    if(!codigoBarras || !idEntrada || !idEmpleado){
      alert('Falta informacion para proceder')
    }
    //aqui va la peticion fetch para el DELETE de la tabla Entrada
    if (window.confirm('¿Está seguro de enviar este producto a salida?')) {
    fetch('url/' + idEntrada+'/'+ codigoBarras, {
        method: 'DELETE'
      })
        .then(resp => resp.text())
        .then(resp => {
          alert(resp);
         
        });
    } 
    //aqui va la peticion fetch para el post de la tabla SALIDA
    
    console.log('Código de barras escaneado:', codigoBarras, 'empleado: ', idEmpleado);
    estadoForm(false)
  };

  return (
    <div className='CodigoDeBarras2'>
      <label className= 'CodigoLabel2'htmlFor="codigoBarras">Ingrese el código de barras:</label>
      < input className='CodigoInput2'
        type="number"
        id="codigoBarras"
        value={codigoBarras}
        onChange={manejarCambioCodigoBarras}
      />
      < input className='CodigoInput2'
        type="number"
        id="codigoBarras"
        value={idEmpleado}
        onChange={(e)=>{setIdEmpleado(e.target.value)}}
      />
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
      <button className='CodigoButton2' onClick={obtenerInformacionCodigoBarras}>{Texto}</button>
      <button className='CodigoButton2' onClick={estadoForm(false)}>{Texto}</button>
      </div>
    </div>
  );
};

export default CodigodeBarras2;

{/*modificr implementacion:
  // TarjetaStock.jsx
import React, { useState } from 'react';
import CodigodeBarras2 from './CodigodeBarras2'; // Asegúrate de que la ruta sea correcta

const TarjetaStock = ({ producto }) => {
  const { nombre, peso, calidad, color } = producto;
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
      <button className="btn1" onClick={manejarSalida}>Salida</button>
      <div className="bar">
        <div className="emptybar"></div>
        <div className="filledbar"></div>
      </div>
      <div className='CodigosdeB'>
        {mostrarFormularioSalida && <CodigodeBarras2 estadoForm={setMostrarFormularioSalida} Texto="SALIDA" />}
      </div>
    </div>
  );
};

export default TarjetaStock;

// CodigodeBarras2.jsx
import React, { useState } from 'react';

const CodigodeBarras2 = ({ estadoForm, Texto }) => {
  const [codigoBarras, setCodigoBarras] = useState('');

  const manejarCambioCodigoBarras = (event) => {
    setCodigoBarras(event.target.value);
  };

  const obtenerInformacionCodigoBarras = () => {
    // Realiza acciones con el código de barras aquí
    estadoForm(false); // Oculta el formulario
    console.log('Código de barras escaneado:', codigoBarras);
  };

  return (
    <div className='CodigoDeBarras2'>
      <label className='CodigoLabel2' htmlFor="codigoBarras">Ingrese el código de barras:</label>
      <input
        className='CodigoInput2'
        type="number"
        id="codigoBarras"
        value={codigoBarras}
        onChange={manejarCambioCodigoBarras}
      />
      <button className='CodigoButton2' onClick={obtenerInformacionCodigoBarras}>{Texto}</button>
    </div>
  );
};

export default CodigodeBarras2;
 */ }
