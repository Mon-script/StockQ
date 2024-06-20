import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-red-600">
      <header className="bg-red-600 py-6">
        <div className="container mx-auto flex justify-between items-center px-6">
          <h1 className="text-white text-center text-3xl font-bold">Quillen Berries</h1>
          
        </div>
      </header>
      <main className="flex-grow">
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(https://www.shutterstock.com/image-photo/strawberry-field-on-fruit-farm-600nw-1666668379.jpg)' }}>

          <div className="bg-black bg-opacity-50 h-full flex items-center">
            <div className="container mx-auto text-center text-white">
              <h2 className="text-4xl sm:text-6xl font-bold mb-4">Bienvenidos a Quillen Berries</h2>
              <p className="text-lg sm:text-2xl mb-8">Productos frescos y de alta calidad</p>
              <a href="#productos" className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded">Descubre más</a>
            </div>
          </div>
        </section>
        <section id="productos" className="py-16 bg-red-600">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-12">Nuestros Productos</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Frutos Congelados</h3>
                <p className="text-gray-600">Descubre nuestra variedad de frutos congelados de alta calidad.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Mermeladas</h3>
                <p className="text-gray-600">Prueba nuestras deliciosas mermeladas hechas con fruta fresca.</p>
              </div>
              <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Jaleas</h3>
                <p className="text-gray-600">Disfruta de nuestras pulpas naturales, perfectas para cualquier ocasión.</p>
              </div>
            </div>
          </div>
        </section>
        
      </main>
      <footer className="bg-red-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>Derechos de autor © 2024 Quillen Berries. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;

