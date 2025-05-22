import React from 'react';
import ServiceDetail from './ServiceDetail';

const DetailedServices = () => {
  const services = [
    {
      title: 'Diseño en SolidWorks',
      description: 'Creación de modelos 3D paramétricos, ensamblajes complejos y planos técnicos detallados para fabricación.',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: [
        'Modelado de piezas y ensamblajes',
        'Generación de planos técnicos',
        'Análisis de interferencias',
        'Documentación técnica completa',
        'Renderizados fotorrealistas'
      ]
    },
    {
      title: 'Fabricación CNC',
      description: 'Mecanizado de piezas en tornos y fresadoras CNC con los más altos estándares de calidad y precisión.',
      image: 'https://images.unsplash.com/photo-1581094794329-aa0113f5422a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: [
        'Torneado CNC de precisión',
        'Fresado de piezas complejas',
        'Materiales: acero, aluminio, plásticos',
        'Tolerancias hasta ±0.01mm',
        'Acabados superficiales controlados'
      ]
    },
    {
      title: 'Sistemas de Refrigeración',
      description: 'Diseño y cálculo de sistemas de refrigeración industrial para cuartos fríos y cavas según normas internacionales.',
      image: 'https://images.unsplash.com/photo-1631729371254-42c2892fbc16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80',
      features: [
        'Cálculo de carga térmica',
        'Selección de equipos óptimos',
        'Diseño de aislamientos',
        'Sistemas de control automatizado',
        'Mantenimiento preventivo'
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">Nuestros Servicios en Detalle</h2>
        <div className="space-y-12 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ServiceDetail 
              key={index}
              title={service.title}
              description={service.description}
              image={service.image}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedServices;