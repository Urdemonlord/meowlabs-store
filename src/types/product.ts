export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'ebook' | 'template' | 'source-code' | 'merchandise';
  image: string;
  features: string[];
  preview?: string;
  downloadUrl?: string;
  isDigital: boolean;
  printOnDemand?: PrintOnDemandOptions;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string[];
}

export interface PrintOnDemandOptions {
  sizes: string[];
  colors: string[];
  materials: string[];
  printAreas: string[];
  mockups: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedOptions?: {
    size?: string;
    color?: string;
    material?: string;
  };
}