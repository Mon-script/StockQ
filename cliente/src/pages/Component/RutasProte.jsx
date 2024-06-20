// RutasProtegidas.js
import React from 'react';
import { Outlet} from 'react-router-dom';
import Login1 from './Login/log';
import { useState, useEffect } from 'react';



  function parseJWT(token) {
    if (!token) return false;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );

    return JSON.parse(jsonPayload);
  }

  

function RutasProtegidas() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const token = localStorage.getItem('token');
    const tokenExistAndStillValid = token && parseJWT(token).exp * 1000 > Date.now();
    {tokenExistAndStillValid ? setIsAuthenticated(true):setIsAuthenticated(false)}
  }, []);

  if (!isAuthenticated) {
    
    return <Login1/>;
  }

  return <Outlet />;
}

export default RutasProtegidas;





/*import React from 'react';
import { Outlet } from 'react-router-dom';
import Login1 from './Login/log';
import { Root } from './Root';

function parseJWT(token) {
    if (!token) return false;
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
        atob(base64)
            .split('')
            .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
            .join('')
    );

    return JSON.parse(jsonPayload);
}

export const RutasProtegidas = () => {
    const token = localStorage.getItem('token');
    const tokenExistAndStillValid = token && parseJWT(token).exp * 1000 > Date.now();

    return <>{tokenExistAndStillValid ? <Root /> : <Login1 />}</>;
}

export default RutasProtegidas;*/
