import React from 'react';
import { ArrowRight, Sparkles, Heart } from 'lucide-react';
// Importamos la imagen local
import emprendedoresImage from '../assets/emprendedores.png';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-orange-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse delay-500"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="lg:col-span-6">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-orange-100 text-orange-800 border border-orange-200">
                <Sparkles className="w-4 h-4 mr-2" />
                Apoyando el talento colombiano
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Descubre productos
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-blue-600">
                {' '}únicos{' '}
              </span>
              de emprendedores colombianos
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Conectamos a emprendedores locales con compradores que valoran la calidad, 
              la innovación y el impacto social. Cada compra genera empleos y fortalece comunidades.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Explorar productos
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all duration-200 border-2 border-blue-100 hover:border-blue-200">
                <Heart className="mr-2 w-5 h-5" />
                Conoce las historias
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-sm text-gray-600">Emprendedores</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">2,000+</div>
                <div className="text-sm text-gray-600">Productos únicos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">1,200+</div>
                <div className="text-sm text-gray-600">Empleos generados</div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-6 mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-3xl transform rotate-3 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <img
                  src={emprendedoresImage}
                  alt="Emprendedores colombianos trabajando"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">+1,500 familias</div>
                      <div className="text-xs text-gray-500">beneficiadas</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;