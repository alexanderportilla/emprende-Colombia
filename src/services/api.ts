// Simulación de API REST para productos
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  entrepreneur: {
    id: number;
    name: string;
    business: string;
    location: string;
    rating: number;
    avatar: string;
  };
  rating: number;
  reviews: number;
  inStock: boolean;
  tags: string[];
  specifications?: Record<string, string>;
}

// Importar imágenes locales
import BolsoWayuu from '../assets/Bolso Artesanal Wayuu.png';
import CafeOrganico from '../assets/Café Orgánico Premium.png';
import HamacaTejida from '../assets/Hamaca Tejida a Mano.png';
import MielAbeja from '../assets/Miel de Abeja Pura.png';

export interface ApiResponse<T> {
  data: T;
  total?: number;
  page?: number;
  limit?: number;
}

export interface ProductFilters {
  category?: string;
  location?: string;
  priceRange?: [number, number];
  rating?: number;
  inStock?: boolean;
  search?: string;
}

// Datos simulados
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Bolso Artesanal Wayuu Tradicional",
    description: "Hermoso bolso tejido a mano por artesanas Wayuu de La Guajira. Cada pieza es única y representa siglos de tradición cultural. Elaborado con hilos de algodón de alta calidad y técnicas ancestrales transmitidas de generación en generación.",
    price: 89000,
    originalPrice: 120000,
    images: [BolsoWayuu],
    category: "moda",
    entrepreneur: {
      id: 1,
      name: "María Fernández",
      business: "Wayuu Creaciones",
      location: "La Guajira",
      rating: 4.9,
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    rating: 4.9,
    reviews: 127,
    inStock: true,
    tags: ["artesanal", "wayuu", "tradicional", "único"],
    specifications: {
      "Material": "Algodón 100%",
      "Dimensiones": "30cm x 25cm x 15cm",
      "Peso": "300g",
      "Origen": "La Guajira, Colombia"
    }
  },
  {
    id: 2,
    name: "Café Orgánico Premium de Altura",
    description: "Café de especialidad cultivado en las montañas del Huila a más de 1,800 metros sobre el nivel del mar. Proceso de tostado artesanal que resalta las notas frutales y el aroma característico de nuestros granos arábica.",
    price: 32000,
    originalPrice: 45000,
    images: [CafeOrganico],
    category: "alimentos",
    entrepreneur: {
      id: 2,
      name: "Carlos Moreno",
      business: "Café de los Andes",
      location: "Huila",
      rating: 4.8,
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    rating: 4.8,
    reviews: 89,
    inStock: true,
    tags: ["orgánico", "premium", "altura", "artesanal"],
    specifications: {
      "Peso": "500g",
      "Tipo": "Arábica",
      "Tostado": "Medio",
      "Altitud": "1,800 msnm"
    }
  },
  {
    id: 3,
    name: "Hamaca Tejida a Mano Santandereana",
    description: "Hamaca tradicional elaborada con técnicas ancestrales de Santander. Perfecta para descansar y decorar espacios. Resistente y cómoda, ideal para uso interior y exterior.",
    price: 156000,
    originalPrice: 200000,
    images: [HamacaTejida],
    category: "hogar",
    entrepreneur: {
      id: 3,
      name: "Ana Gutiérrez",
      business: "Textiles Santandereanos",
      location: "Santander",
      rating: 4.9,
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    rating: 4.9,
    reviews: 64,
    inStock: true,
    tags: ["hamaca", "textil", "tradicional", "santander"],
    specifications: {
      "Material": "Algodón y Fique",
      "Dimensiones": "200cm x 150cm",
      "Capacidad": "120kg",
      "Origen": "Santander, Colombia"
    }
  },
  {
    id: 4,
    name: "Miel de Abeja Pura de Montaña",
    description: "Miel 100% natural extraída de colmenas ubicadas en las montañas de Boyacá. Sin procesos industriales, conserva todas sus propiedades nutritivas y medicinales.",
    price: 28000,
    originalPrice: 35000,
    images: [MielAbeja],
    category: "alimentos",
    entrepreneur: {
      id: 4,
      name: "Jorge Ramírez",
      business: "Apiarios Boyacá",
      location: "Boyacá",
      rating: 4.7,
      avatar: "https://images.pexels.com/photos/1552058/pexels-photo-1552058.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    rating: 4.7,
    reviews: 152,
    inStock: true,
    tags: ["miel", "natural", "montaña", "boyacá"],
    specifications: {
      "Peso": "500g",
      "Tipo": "Multifloral",
      "Origen": "Boyacá, Colombia",
      "Pureza": "100%"
    }
  }
];

// Simular delay de red
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const api = {
  // Obtener productos con filtros y paginación
  async getProducts(
    filters: ProductFilters = {},
    page: number = 1,
    limit: number = 12
  ): Promise<ApiResponse<Product[]>> {
    await delay(500); // Simular latencia de red
    
    let filteredProducts = [...mockProducts];
    
    // Aplicar filtros
    if (filters.category) {
      filteredProducts = filteredProducts.filter(p => p.category === filters.category);
    }
    
    if (filters.location) {
      filteredProducts = filteredProducts.filter(p => 
        p.entrepreneur.location.toLowerCase().includes(filters.location!.toLowerCase())
      );
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filteredProducts = filteredProducts.filter(p => p.price >= min && p.price <= max);
    }
    
    if (filters.rating) {
      filteredProducts = filteredProducts.filter(p => p.rating >= filters.rating!);
    }
    
    if (filters.inStock !== undefined) {
      filteredProducts = filteredProducts.filter(p => p.inStock === filters.inStock);
    }
    
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      filteredProducts = filteredProducts.filter(p =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.description.toLowerCase().includes(searchTerm) ||
        p.entrepreneur.name.toLowerCase().includes(searchTerm) ||
        p.entrepreneur.business.toLowerCase().includes(searchTerm) ||
        p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
      );
    }
    
    // Paginación
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
    
    return {
      data: paginatedProducts,
      total: filteredProducts.length,
      page,
      limit
    };
  },

  // Obtener producto por ID
  async getProduct(id: number): Promise<Product | null> {
    await delay(300);
    return mockProducts.find(p => p.id === id) || null;
  },

  // Búsqueda inteligente con sugerencias
  async searchProducts(query: string): Promise<Product[]> {
    await delay(200);
    
    if (!query.trim()) return [];
    
    const searchTerm = query.toLowerCase();
    return mockProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm) ||
      p.entrepreneur.name.toLowerCase().includes(searchTerm) ||
      p.entrepreneur.business.toLowerCase().includes(searchTerm) ||
      p.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    ).slice(0, 5); // Limitar a 5 sugerencias
  },

  // Obtener categorías disponibles
  async getCategories(): Promise<string[]> {
    await delay(100);
    const categories = [...new Set(mockProducts.map(p => p.category))];
    return categories;
  },

  // Obtener ubicaciones disponibles
  async getLocations(): Promise<string[]> {
    await delay(100);
    const locations = [...new Set(mockProducts.map(p => p.entrepreneur.location))];
    return locations;
  }
};