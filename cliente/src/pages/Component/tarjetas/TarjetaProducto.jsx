import React from 'react';
import './TarjetaProducto.css';
import Logo from '../img/Logo.jpg'

const TarjetaProducto = ({ avatar, title, peso, calidad, details }) => {
  return (
    <div className="cards1">
      <div className="cards1-details">
        <p className="text-title"></p>
        <img src={'http://localhost:3000/'+avatar} alt="" className='w-[180px] h-[150px] border rounded p-1' />
        <p className="text-body"></p>
        <p className="text-body"></p>
        <p className="text-body"></p>
      </div>
    </div>
  );
}

export default TarjetaProducto;