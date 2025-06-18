import React from 'react';
import { Star, Heart, ShoppingCart, MapPin } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Import images
import bolsoWayuu from '../assets/Bolso Artesanal Wayuu.png';
import cafeOrganico from '../assets/Café Orgánico Premium.png';
import hamaca from '../assets/Hamaca Tejida a Mano.png';
import miel from '../assets/Miel de Abeja Pura.png';

const FeaturedProducts = () => {
  const { dispatch } = useCart();
  
  const products = [
    {
      id: 1,
      name: "Bolso Artesanal Wayuu",
      entrepreneur: "María Fernández",
      location: "La Guajira",
      price: 89000,
      originalPrice: 120000,
      rating: 4.9,
      reviews: 127,
      image: bolsoWayuu,
      badge: "Bestseller"
    },
    {
      id: 2,
      name: "Café Orgánico Premium",
      entrepreneur: "Carlos Moreno",
      location: "Huila",
      price: 32000,
      originalPrice: 45000,
      rating: 4.8,
      reviews: 89,
      image: cafeOrganico,
      badge: "Orgánico"
    },
    {
      id: 3,
      name: "Hamaca Tejida a Mano",
      entrepreneur: "Ana Gutiérrez",
      location: "Santander",
      price: 156000,
      originalPrice: 200000,
      rating: 4.9,
      reviews: 64,
      image: hamaca,
      badge: "Artesanal"
    },
    {
      id: 4,
      name: "Miel de Abeja Pura",
      entrepreneur: "Jorge Ramírez",
      location: "Boyacá",
      price: 28000,
      originalPrice: 35000,
      rating: 4.7,
      reviews: 152,
      image: miel,
      badge: "Natural"
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const addToCart = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        entrepreneur: product.entrepreneur
      }
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Productos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre los productos más populares de nuestros emprendedores. 
            Cada compra apoya directamente a una familia colombiana.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white rounded-full p-2 shadow-lg hover:bg-gray-50 transition-colors duration-200">
                    <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4 mr-1" />
                  {product.location}
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors duration-200">
                  {product.name}
                </h3>
                
                <p className="text-sm text-gray-600 mb-3">
                  por {product.entrepreneur}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 ml-2">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}% OFF
                  </span>
                </div>

                <button 
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>Agregar al carrito</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="inline-flex items-center px-8 py-4 rounded-full text-lg font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 transition-all duration-200 border-2 border-blue-100 hover:border-blue-200">
            Ver todos los productos
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;