import React from 'react';
import { Star, Quote } from 'lucide-react';

// Import profile images
import sofiaProfile from '../assets/maria_fernandes.png';
import diegoProfile from '../assets/carlos_moreno.png';
import carmenProfile from '../assets/ana_gutierres.png';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sofía Martínez",
      role: "Cliente frecuente",
      city: "Bogotá",
      content: "EmprendeColombia me ha permitido descubrir productos únicos que no encuentro en ningún otro lugar. Cada compra es una experiencia especial y sé que estoy apoyando familias colombianas.",
      rating: 5,
      image: sofiaProfile
    },
    {
      id: 2,
      name: "Diego Herrera",
      role: "Emprendedor",
      city: "Medellín",
      content: "Gracias a esta plataforma, mi negocio de productos artesanales ha crecido exponencialmente. He podido llegar a clientes de todo el país y generar empleo en mi comunidad.",
      rating: 5,
      image: diegoProfile
    },
    {
      id: 3,
      name: "Carmen Rodríguez",
      role: "Compradora corporativa",
      city: "Cali",
      content: "Nuestra empresa ha encontrado en EmprendeColombia el aliado perfecto para nuestros regalos corporativos. Los productos son de excelente calidad y tienen un valor agregado increíble.",
      rating: 5,
      image: carmenProfile
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Lo que Dicen Nuestros Usuarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de personas que han transformado su experiencia de compra 
            y han encontrado productos únicos que marcan la diferencia.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 relative transform hover:-translate-y-2"
            >
              <div className="absolute top-6 right-6">
                <Quote className="w-8 h-8 text-orange-200" />
              </div>
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-orange-600 font-medium">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.city}
                  </p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Quieres compartir tu experiencia?
          </h3>
          <p className="text-gray-600 mb-6">
            Nos encantaría conocer tu historia y cómo EmprendeColombia ha impactado tu vida.
          </p>
          <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Enviar testimonio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;