import React, { useState, useEffect } from 'react';
import TarjetaProducto from "../Component/tarjetas/TarjetaProducto"
import Formularios from "../Component/formulario/Formulario";
import BotonIngresar from '../Component/botones/BotonIngresar';
import "./Producto.css";
import ProductoCard from '../Component/tarjetas/productocard'


export const Producto = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [files, setFiles] = useState([]);
  const [fileupdated, setFileupdated] = useState(false)



  useEffect(() => {
    fetch('http://localhost:3000/productos/get')
      .then(response => response.json())
      .then(response => {
        setFiles(response)
        console.log(response)
      })
      .catch(error => { console.error(error) })

    setFileupdated(false)
  }, [fileupdated])

  const handleAddProduct = () => {
    const formdata = new FormData()

    formdata.append('nombre', name)
    formdata.append('avatar', photo)
    /* const data = {
       nombre: JSON.stringify(name),
       avatar: avatarProcesado
     }*/

    if (!name || !photo) {
      alert('ERROR, Debes enviar tanto el nombre del producto como su foto')
      return
    } else {

      fetch('http://localhost:3000/saveProduct', {
        method: 'POST',

        body: formdata
      })
        .then(response => response.text())
        .then(response => {


          console.log(response)
          setFileupdated(true)

        })
        .catch(error => {
          console.error(error)
        })

      setName('');
      setPhoto('');
      document.getElementById("NOMBRE").value = ""
      document.getElementById("FOTO").value = null
      setShowForm(false);
    }
  };
  return (
    <>
      <div className="min-h-screen flex flex-col items-center pt-4">
        <div className="bg-gray-100 p-4 shadow-md w-full flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-red-700 text">Agregar Producto Aqui!</h2>
          <button
            className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
            onClick={() => setShowForm(true)}
            hidden={showForm? true:false}
          >
            Agregar
          </button>
        </div>
         {showForm && (
          <div className="flex flex-col items-center justify-center w-full mt-8">
            <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg">
              <form className="space-y-6 w-full">
                <div>
                  <label htmlFor="NOMBRE" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre de tu nuevo producto:
                  </label>
                  <input
                    id="NOMBRE"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="FOTO" className="block text-sm font-medium text-gray-700 mb-1">
                    Imagen:
                  </label>
                  <input
                    id="FOTO"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    type="file"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                </div>
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-full hover:bg-red-600 transition duration-300"
                    type="button"
                    onClick={handleAddProduct}
                    
                  >
                    Agregar
                  </button>
                  <button
                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded-full hover:bg-gray-400 transition duration-300"
                    type="button"
                    onClick={() => setShowForm(false)}
                  >
                    Salir
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <br />
        <ProductoCard files={files}/>
        


      </div>

    </>
  );


}


//aqui ant
/* const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const handleIngresarClick = () => {
    // Mostrar el formulario al hacer clic en "Ingresar"
    setMostrarFormulario(true);
  };

    
    return(
        <>
        <div className="TarjetaProduct">
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>
        <TarjetaProducto> </TarjetaProducto>

        </div>
        <div className="PosicionBottons">
          <BotonIngresar texto = "Agregar" onIngresarClick={handleIngresarClick} ></BotonIngresar>
          <BotonIngresar texto = "Editar"></BotonIngresar>
          <BotonIngresar texto = "Eliminar"></BotonIngresar>
        </div> aqui cierro*/

{/* Mostrar el formulario si mostrarFormulario es true */ }
/* aqui empieza {mostrarFormulario && <Formularios />}
</> aqui cierra 
 
)

<div className="contenedordefotos" style={{ display: 'flex',flexWrap:'wrap',margin:'10px' }}>
          {files.map((image) => (

            <img key={image} src={'http://localhost:3000/' + image} alt={image} style={{width:'25vw',height:'30vh', margin:'5px'}}/>


          ))}

        </div>*/