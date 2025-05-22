import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Ing. Carlos Mendoza',
      company: 'Industrias Alfa',
      text: 'Servicios Carutos desarrolló el sistema de refrigeración para nuestra nueva planta. El trabajo fue impecable, cumpliendo con todos los requisitos técnicos y entregando antes del plazo.',
      image: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    {
      id: 2,
      name: 'Dra. Laura Jiménez',
      company: 'Laboratorios Beta',
      text: 'Las piezas fabricadas por su equipo han superado nuestras expectativas en precisión y calidad. Son nuestro proveedor confiable para componentes mecánicos críticos.',
      image: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    {
      id: 3,
      name: 'Lic. Roberto Torres',
      company: 'Tecnologías Gamma',
      text: 'El diseño del sistema contra incendios que implementaron cumple perfectamente con las normas NFPA. Excelente servicio post-venta y asesoría técnica.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-gray-800 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <p className="text-gray-300">"{testimonial.text}"</p>
              <div className="flex mt-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;