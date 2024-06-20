import React, { useState } from 'react';
import './Matrix.css';
import TarjetaStock from './TarjetaStock';


const Matrix = ({ data }) => {
  return (
    <div className="container">
      {data.map((item, index) => (
        <TarjetaStock key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Matrix;