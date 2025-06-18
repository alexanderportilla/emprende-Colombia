import React, { useState } from 'react';
import { Star, MapPin, Award, Filter, Search } from 'lucide-react';

// Import entrepreneur images
import mariaFernandes from '../assets/maria_fernandes.png';
import carlosMoreno from '../assets/carlos_moreno.png';
import anaGutierres from '../assets/ana_gutierres.png';

const Entrepreneurs = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const entrepreneurs = [
    {
      id: 1,
      name: "María Fernández",
      location: "La Guajira",
      category: "Artesanías",
      rating: 4.9,
      reviews: 127,
      products: 15,
      achievement: "Emprendedor Destacado",
      description: "Artesana wayuu con más de 10 años de experiencia en la elaboración de mochilas y accesorios tradicionales.",
      image: mariaFernandes
    },
    {
      id: 2,
      name: "Carlos Moreno",
      location: "Huila",
      category: "Café",
      rating: 4.8,
      reviews: 89,
      products: 8,
      achievement: "Productor Premium",
      description: "Cultivador de café orgánico con certificación internacional y compromiso con prácticas sostenibles.",
      image: carlosMoreno
    },
    {
      id: 3,
      name: "Ana Gutiérrez",
      location: "Santander",
      category: "Textiles",
      rating: 4.9,
      reviews: 64,
      products: 12,
      achievement: "Maestra Artesana",
      description: "Especialista en tejidos tradicionales y diseño contemporáneo de hamacas y textiles artesanales.",
      image: anaGutierres
    }
  ];

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'artesanias', name: 'Artesanías' },
    { id: 'cafe', name: 'Café' },
    { id: 'textiles', name: 'Textiles' },
    { id: 'alimentos', name: 'Alimentos' },
    { id: 'moda', name: 'Moda' }
  ];

  const filteredEntrepreneurs = entrepreneurs.filter(entrepreneur => {
    const matchesSearch = entrepreneur.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         entrepreneur.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || entrepreneur.category.toLowerCase() === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestros Emprendedores
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce a los talentosos emprendedores colombianos que están transformando 
            sus comunidades a través de sus productos únicos y sostenibles.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar emprendedores..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Entrepreneurs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEntrepreneurs.map((entrepreneur) => (
            <div
              key={entrepreneur.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
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

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {entrepreneur.location}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {entrepreneur.name}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {entrepreneur.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{entrepreneur.products} productos</span>
                  <span>{entrepreneur.reviews} reseñas</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredEntrepreneurs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No se encontraron emprendedores
            </h3>
            <p className="text-gray-600">
              Intenta con otros términos de búsqueda o categorías
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Entrepreneurs; 