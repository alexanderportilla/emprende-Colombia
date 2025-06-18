import React from 'react';
import { Coffee, Shirt, Home, Palette, Utensils, Gift } from 'lucide-react';

const Categories = () => {
  const categories = [
    {
      id: 1,
      name: "Alimentos & Bebidas",
      icon: Coffee,
      count: 340,
      color: "bg-orange-500",
      bgColor: "bg-orange-50",
      hoverColor: "hover:bg-orange-100"
    },
    {
      id: 2,
      name: "Moda & Accesorios",
      icon: Shirt,
      count: 180,
      color: "bg-purple-500",
      bgColor: "bg-purple-50",
      hoverColor: "hover:bg-purple-100"
    },
    {
      id: 3,
      name: "Hogar & Decoración",
      icon: Home,
      count: 220,
      color: "bg-blue-500",
      bgColor: "bg-blue-50",
      hoverColor: "hover:bg-blue-100"
    },
    {
      id: 4,
      name: "Arte & Artesanías",
      icon: Palette,
      count: 150,
      color: "bg-green-500",
      bgColor: "bg-green-50",
      hoverColor: "hover:bg-green-100"
    },
    {
      id: 5,
      name: "Gastronomía",
      icon: Utensils,
      count: 95,
      color: "bg-red-500",
      bgColor: "bg-red-50",
      hoverColor: "hover:bg-red-100"
    },
    {
      id: 6,
      name: "Regalos Únicos",
      icon: Gift,
      count: 120,
      color: "bg-yellow-500",
      bgColor: "bg-yellow-50",
      hoverColor: "hover:bg-yellow-100"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explora por Categorías
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Encuentra exactamente lo que buscas entre nuestra amplia selección 
            de productos artesanales y únicos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className={`${category.bgColor} ${category.hoverColor} rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-lg group`}
              >
                <div className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-gray-700">
                  {category.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {category.count} productos
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-orange-50 to-blue-50 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contáctanos y te ayudaremos a encontrar el producto perfecto o 
            conectarte directamente con emprendedores especializados.
          </p>
          <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
            Solicitar producto personalizado
          </button>
        </div>
      </div>
    </section>
  );
};

export default Categories;