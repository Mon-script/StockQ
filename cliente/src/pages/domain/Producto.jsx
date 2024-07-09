import React, { useState, useEffect } from 'react';
import "./Producto.css";
import Modal from 'react-modal';




export const Producto = () => {
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [files, setFiles] = useState([]);
  const [fileupdated, setFileupdated] = useState(false)
  const [modalAbierto, setModalAbierto] = useState(false)
  const [imagenActual, setIamgenActual] = useState(null)



  useEffect(() => {

    Modal.setAppElement('body')
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
  const manejadorModal = (estaAbierto, imagenActual) => {
    setModalAbierto(estaAbierto)
    setIamgenActual(imagenActual)
  }

  const manejarBorrar = () => {
    // tira un alert para confirmar- cambiar estetica luego
    if (window.confirm('¿Está seguro de borrar este producto?')) {
      let id = imagenActual.split('-');
      id = parseInt(id[0]);

      fetch('http://localhost:3000/producto/delete/' + id, {
        method: 'DELETE'
      })
        .then(resp => resp.text())
        .then(resp => {
          console.log(resp);
          setModalAbierto(false);
          setFileupdated(true);
        });
    } else {
      setModalAbierto(false);
    }
  }

  return (
    <>
      <div className="min-h-screen flex flex-col items-center pt-4">
        <div className="bg-gray-100 p-4 shadow-md w-full flex justify-between items-center">
          <h2 className="text-3xl font-semibold text-red-700 text">Agregar Producto Aqui!</h2>
          <button
            className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600 transition duration-300"
            onClick={() => setShowForm(true)}
            hidden={showForm ? true : false}
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
                  <label htmlFor="codigo" className="block text-sm font-medium text-gray-700 mb-1">
                    Intruducir codigo de barra:
                  </label>
                  <input
                    id="codigo"
                    className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                    type="number"
                    required
                    
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
        {/*aquirenderizaproductos*/}
        <div className="container mx-auto mt-6">
          <div className="flex flex-wrap justify-center">
            {files.map((imagen, index) => (
              <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
                <img src={'http://localhost:3000/' + imagen} alt="producto" className="w-full" style={{ height: '30vh', width: '30vw' }} />
                <div className="px-6 py-4">
                  <button
                    onClick={() => manejadorModal(true, imagen)}
                    className="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition duration-300"
                  >
                    Detalle
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>




      </div>

      <Modal className="modal" style={{ content: { right: '20%', left: '20%' } }} isOpen={modalAbierto} onRequestClose={() => manejadorModal(false, null)}>
        <div className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mt-10 border border-gray-300 rounded-lg">
          <div className="card">
            <img src={'http://localhost:3000/' + imagenActual} alt="producto" className="w-full h-64 object-cover rounded-t-lg" />
            <div className="card-body flex justify-between px-4 py-2">
              <button
                onClick={manejarBorrar}
                className="bg-red-500 text-white p-2 rounded-md mt-2"
              >
                Borrar Producto
              </button>
            </div>
          </div>
        </div>
      </Modal>


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