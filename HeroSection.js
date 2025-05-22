import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="relative bg-gray-900 text-white py-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Soluciones en Ingeniería Mecánica</h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8">Diseño, simulación y fabricación de precisión para tus proyectos industriales</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition">
          Contactar Ahora
        </button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default HeroSection;