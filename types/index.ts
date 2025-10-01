export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description?: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export interface AppContextType {
  products: Product[];
  cartItems: CartItem[];
  favoriteItems: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  toggleFavorite: (product: Product) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
}