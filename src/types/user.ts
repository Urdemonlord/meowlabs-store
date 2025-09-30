export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: string;
  isVerified: boolean;
}

export interface PurchaseHistory {
  id: string;
  userId: string;
  items: PurchaseItem[];
  total: number;
  status: 'pending' | 'completed' | 'failed' | 'refunded';
  paymentMethod: string;
  purchaseDate: string;
  downloadLinks?: DownloadLink[];
}

export interface PurchaseItem {
  productId: string;
  productTitle: string;
  productImage: string;
  price: number;
  quantity: number;
  isDigital: boolean;
}

export interface DownloadLink {
  productId: string;
  url: string;
  expiresAt: string;
  downloadCount: number;
  maxDownloads: number;
}