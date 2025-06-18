import React from 'react';
import { Star, MapPin, Users, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import entrepreneur images
import mariaFernandes from '../assets/maria_fernandes.png';
import carlosMoreno from '../assets/carlos_moreno.png';
import anaGutierres from '../assets/ana_gutierres.png';

const Entrepreneurs = () => {
  const navigate = useNavigate();

  const entrepreneurs = [
    {
      id: 1,
      name: "María Fernández",
      business: "Wayuu Creaciones",
      location: "La Guajira",
      story: "Preservando la tradición Wayuu a través de bolsos únicos que representan nuestra cultura ancestral.",
      products: 15,
      rating: 4.9,
      reviews: 127,
      employees: 8,
      image: mariaFernandes,
      achievement: "Emprendedora del año 2023",
      category: "artesanias"
    },
    {
      id: 2,
      name: "Carlos Moreno",
      business: "Café de los Andes",
      location: "Huila",
      story: "Tres generaciones cultivando el mejor café colombiano con métodos sostenibles y comercio justo.",
      products: 8,
      rating: 4.8,
      reviews: 89,
      employees: 12,
      image: carlosMoreno,
      achievement: "Certificación Orgánica",
      category: "cafe"
    },
    {
      id: 3,
      name: "Ana Gutiérrez",
      business: "Textiles Santandereanos",
      location: "Santander",
      story: "Reviviendo técnicas ancestrales de tejido para crear hamacas y textiles de alta calidad.",
      products: 22,
      rating: 4.9,
      reviews: 64,
      employees: 15,
      image: anaGutierres,
      achievement: "Innovación Social",
      category: "textiles"
    }
  ];

  const handleViewProducts = (entrepreneur: any) => {
    navigate(`/catalogo?entrepreneur=${entrepreneur.id}&category=${entrepreneur.category}`);
  };

  const handleViewProfile = (entrepreneur: any) => {
    navigate(`/emprendedor/${entrepreneur.id}`);
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Conoce a Nuestros Emprendedores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias inspiradoras de personas que transforman sus comunidades 
            a través del emprendimiento y la innovación.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {entrepreneurs.map((entrepreneur) => (
            <div
              key={entrepreneur.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={entrepreneur.image}
                  alt={entrepreneur.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-full px-3 py-1 shadow-lg">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">
                        {entrepreneur.rating}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <Award className="w-4 h-4 inline mr-1" />
                    {entrepreneur.achievement}
                  </div>
                </div>
              </div>

              <div className="p-8">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {entrepreneur.location}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-1">
                  {entrepreneur.name}
                </h3>
                
                <p className="text-lg text-orange-600 font-semibold mb-4">
                  {entrepreneur.business}
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {entrepreneur.story}
                </p>

                <div className="grid grid-cols-3 gap-4 mb-6 pt-6 border-t border-gray-100">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {entrepreneur.products}
                    </div>
                    <div className="text-xs text-gray-500">Productos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {entrepreneur.employees}
                    </div>
                    <div className="text-xs text-gray-500">Empleados</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600 mb-1">
                      {entrepreneur.reviews}
                    </div>
                    <div className="text-xs text-gray-500">Reseñas</div>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleViewProducts(entrepreneur)}
                    className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:scale-105"
                  >
                    Ver productos
                  </button>
                  <button 
                    onClick={() => handleViewProfile(entrepreneur)}
                    className="px-4 py-3 border-2 border-blue-200 text-blue-700 font-semibold rounded-xl hover:bg-blue-50 transition-all duration-200"
                  >
                    <Users className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all duration-200 border-2 border-blue-100 hover:border-blue-200">
            Conoce más emprendedores
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneurs;