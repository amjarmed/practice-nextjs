export type Product = {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: string[];
  category: string;
  tags: string[];
  features: string[];
  specifications: Record<string, string>;
  stock: number;
  ratings: {
    average: number;
    count: number;
  };
  reviews: Review[];
  relatedProducts: string[];
  createdAt: string;
  updatedAt: string;
};

export type Review = {
  id: string;
  userId: string;
  userName: string;
  rating: number;
  title: string;
  comment: string;
  helpful: number;
  createdAt: string;
};

export type Category = {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  featured: boolean;
  parentId?: string;
  subCategories?: string[];
};

export type CartItem = {
  productId: string;
  quantity: number;
  price: number;
  name: string;
  image: string;
};

export type Cart = {
  items: CartItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
};

export type User = {
  id: string;
  name: string;
  email: string;
  image?: string;
  addresses: Address[];
  orders: Order[];
  wishlist: string[];
};

export type Address = {
  id: string;
  fullName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  isDefault: boolean;
};

export type Order = {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  shippingAddress: Address;
  paymentMethod: string;
  createdAt: string;
};

export type LogLevel = 'info' | 'warn' | 'error' | 'debug';

export type LogEntry = {
  level: LogLevel;
  message: string;
  timestamp: string;
  context?: Record<string, unknown>;
};
