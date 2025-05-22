import React from 'react';

const ServicesSection = () => {
  const serviceCategories = [
    {
      title: 'Diseño e Ingeniería',
      services: [
        'Diseños en SolidWorks', 
        'Planos técnicos', 
        'Simulaciones CFD', 
        'Simulaciones de carga', 
        'Animaciones técnicas'
      ]
    },
    {
      title: 'Fabricación',
      services: [
        'Impresión 3D', 
        'Torneado y fresado', 
        'Router CNC', 
        'Prototipado rápido'
      ]
    },
    {
      title: 'Automatización',
      services: [
        'Programación de PLCs', 
        'Instalación de sistemas', 
        'Control de procesos'
      ]
    },
    {
      title: 'Sistemas Especiales',
      services: [
        'Diseño de cuartos fríos', 
        'Sistemas contra incendio NFPA', 
        'Refrigeración industrial'
      ]
    },
    {
      title: 'Soporte Técnico',
      services: [
        'Instalación de software', 
        'SolidWorks, AutoCAD', 
        'Suite Office', 
        'Soluciones antivirus'
      ]
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">{category.title}</h3>
              <ul className="space-y-2">
                {category.services.map((service, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;