import React from 'react';

const LayoutHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-gray-800">Servicios Carutos</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 font-medium transition">Inicio</a>
          <a href="#servicios" className="text-gray-700 hover:text-blue-600 font-medium transition">Servicios</a>
          <a href="#contacto" className="text-gray-700 hover:text-blue-600 font-medium transition">Contacto</a>
        </nav>
        <button className="md:hidden focus:outline-none">
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default LayoutHeader;