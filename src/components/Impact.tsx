import React from 'react';
import { Users, DollarSign, MapPin, TrendingUp, Heart, Briefcase } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      value: "1,200+",
      label: "Empleos generados",
      description: "Trabajos directos e indirectos creados",
      color: "bg-blue-500"
    },
    {
      icon: DollarSign,
      value: "$2.8B",
      label: "Ventas totales",
      description: "Ingresos generados para emprendedores",
      color: "bg-green-500"
    },
    {
      icon: MapPin,
      value: "32",
      label: "Departamentos",
      description: "Presencia en todo el territorio nacional",
      color: "bg-orange-500"
    },
    {
      icon: TrendingUp,
      value: "85%",
      label: "Crecimiento anual",
      description: "Incremento en ventas de emprendedores",
      color: "bg-purple-500"
    },
    {
      icon: Heart,
      value: "1,500+",
      label: "Familias beneficiadas",
      description: "Hogares con mejores ingresos",
      color: "bg-red-500"
    },
    {
      icon: Briefcase,
      value: "500+",
      label: "Emprendedores activos",
      description: "Negocios en crecimiento constante",
      color: "bg-indigo-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Nuestro Impacto en Colombia
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada compra que realizas genera un impacto real en las comunidades colombianas. 
            Juntos estamos transformando vidas y fortaleciendo la economía local.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg group"
              >
                <div className={`${stat.color} w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-xl font-semibold text-gray-700 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600">
                  {stat.description}
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-orange-600 rounded-3xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-6">
            Sé Parte del Cambio
          </h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
            Con cada compra que realizas, estás apoyando el sueño de un emprendedor colombiano 
            y contribuyendo al desarrollo económico y social de nuestro país.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
              Comienza a comprar
            </button>
            <button className="border-2 border-white text-white font-semibold py-4 px-8 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-200">
              Únete como emprendedor
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;