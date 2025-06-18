import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white">
                Emprende<span className="text-orange-500">Colombia</span>
              </h3>
              <p className="text-gray-400 mt-4 leading-relaxed">
                Conectando emprendedores colombianos con el mundo. 
                Transformamos comunidades a través del comercio justo y sostenible.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 hover:bg-orange-500 p-3 rounded-full transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Productos</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Emprendedores</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Categorías</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Ofertas</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Blog</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Soporte</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Centro de Ayuda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Política de Devoluciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Términos y Condiciones</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Privacidad</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-500 transition-colors duration-200">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-orange-500" />
                <span className="text-gray-400">hola@emprendecolombia.co</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-orange-500" />
                <span className="text-gray-400">+57 (1) 234-5678</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-orange-500 mt-1" />
                <span className="text-gray-400">
                  Calle 123 #45-67<br />
                  Bogotá, Colombia
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="bg-gradient-to-r from-orange-500 to-blue-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">
              ¡Mantente al día con las últimas novedades!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Recibe ofertas exclusivas, nuevos productos y historias inspiradoras directamente en tu email.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 px-4 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-orange-600 font-semibold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-200">
                Suscribirse
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2024 EmprendeColombia. Todos los derechos reservados.
            </p>
            <div className="flex items-center text-gray-400">
              <span>Hecho con</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 fill-current" />
              <span>en Colombia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;