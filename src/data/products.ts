import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    title: 'Panduan Lengkap AI untuk Pemula',
    description: 'Ebook komprehensif tentang artificial intelligence, machine learning, dan implementasinya dalam bisnis modern.',
    price: 99000,
    category: 'ebook',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['200+ halaman', 'PDF & EPUB format', 'Studi kasus real', 'Bonus templates'],
    isDigital: true
  },
  {
    id: '2',
    title: 'Template Landing Page UMKM',
    description: 'Koleksi 10 template website modern untuk UMKM dan bisnis kecil. Responsive dan siap pakai.',
    price: 299000,
    category: 'template',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['10 template unik', 'Responsive design', 'Source code lengkap', 'Documentation'],
    isDigital: true
  },
  {
    id: '3',
    title: 'Bot WhatsApp Auto Reply',
    description: 'Source code bot WhatsApp dengan fitur auto reply, broadcast, dan integrasi database.',
    price: 499000,
    category: 'source-code',
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Node.js source code', 'Database integration', 'Admin dashboard', 'Setup guide'],
    isDigital: true
  },
  {
    id: '4',
    title: 'UI Kit Modern Dashboard',
    description: 'Koleksi komponen UI modern untuk dashboard admin dengan desain yang clean dan profesional.',
    price: 199000,
    category: 'template',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['50+ components', 'Figma & Sketch files', 'React components', 'Dark & light theme'],
    isDigital: true
  },
  {
    id: '5',
    title: 'Kaos MeowLabs Original',
    description: 'Kaos premium dengan desain eksklusif MeowLabs. Material cotton combed berkualitas tinggi.',
    price: 149000,
    category: 'merchandise',
    image: 'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Cotton combed 30s', 'Sablon premium', 'Size S-XXL', 'Desain eksklusif'],
    isDigital: false,
    printOnDemand: {
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      colors: ['Hitam', 'Putih', 'Abu-abu', 'Navy'],
      materials: ['Cotton Combed 30s', 'Cotton Combed 24s'],
      printAreas: ['Depan', 'Belakang', 'Depan + Belakang'],
      mockups: [
        'https://images.pexels.com/photos/8532616/pexels-photo-8532616.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/8532617/pexels-photo-8532617.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    seoTitle: 'Kaos MeowLabs Original - Premium Cotton Combed | MeowLabs Store',
    seoDescription: 'Kaos premium MeowLabs dengan desain eksklusif. Cotton combed 30s, sablon berkualitas tinggi. Tersedia size S-XXL.',
    seoKeywords: ['kaos programmer', 'merchandise tech', 'kaos developer', 'MeowLabs merchandise']
  },
  {
    id: '6',
    title: 'Mini SaaS Starter Kit',
    description: 'Boilerplate lengkap untuk membangun SaaS dengan authentication, billing, dan dashboard.',
    price: 799000,
    category: 'source-code',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Next.js + TypeScript', 'Stripe integration', 'User management', 'Email templates'],
    isDigital: true
  },
  {
    id: '7',
    title: 'Bisnis Digital Dari Nol',
    description: 'Panduan step-by-step membangun bisnis digital yang profitable dari nol hingga scale-up.',
    price: 129000,
    category: 'ebook',
    image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['150+ halaman', 'Case study success', 'Template bisnis plan', 'Video bonus'],
    isDigital: true
  },
  {
    id: '8',
    title: 'Tote Bag MeowLabs',
    description: 'Tote bag canvas premium dengan print desain MeowLabs yang stylish dan fungsional.',
    price: 89000,
    category: 'merchandise',
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Canvas premium', 'Print berkualitas tinggi', 'Ukuran 35x40cm', 'Eco-friendly'],
    isDigital: false,
    printOnDemand: {
      sizes: ['35x40cm', '40x45cm'],
      colors: ['Natural', 'Hitam', 'Navy'],
      materials: ['Canvas 12oz', 'Canvas 14oz'],
      printAreas: ['Satu sisi', 'Dua sisi'],
      mockups: [
        'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    seoTitle: 'Tote Bag MeowLabs Canvas Premium | MeowLabs Store',
    seoDescription: 'Tote bag canvas premium dengan print berkualitas tinggi. Eco-friendly, ukuran 35x40cm. Cocok untuk daily use.',
    seoKeywords: ['tote bag canvas', 'tas ramah lingkungan', 'merchandise developer', 'MeowLabs bag']
  },
  {
    id: '9',
    title: 'Mug MeowLabs Ceramic',
    description: 'Mug ceramic premium dengan desain MeowLabs yang unik. Perfect untuk coffee time para developer.',
    price: 79000,
    category: 'merchandise',
    image: 'https://images.pexels.com/photos/6347707/pexels-photo-6347707.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Ceramic premium', 'Dishwasher safe', 'Kapasitas 350ml', 'Print tahan lama'],
    isDigital: false,
    printOnDemand: {
      sizes: ['350ml', '450ml'],
      colors: ['Putih', 'Hitam', 'Biru'],
      materials: ['Ceramic Grade A'],
      printAreas: ['Wrap around', 'Satu sisi'],
      mockups: [
        'https://images.pexels.com/photos/6347707/pexels-photo-6347707.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6347708/pexels-photo-6347708.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    seoTitle: 'Mug MeowLabs Ceramic Premium - Coffee Mug Developer | MeowLabs Store',
    seoDescription: 'Mug ceramic premium MeowLabs untuk coffee time developer. Dishwasher safe, kapasitas 350ml, print berkualitas tinggi.',
    seoKeywords: ['mug programmer', 'coffee mug developer', 'ceramic mug', 'MeowLabs mug']
  },
  {
    id: '10',
    title: 'Sticker Pack MeowLabs',
    description: 'Set sticker vinyl premium dengan berbagai desain MeowLabs. Waterproof dan tahan lama.',
    price: 35000,
    category: 'merchandise',
    image: 'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800',
    features: ['Vinyl premium', 'Waterproof', '10 desain unik', 'Mudah ditempel'],
    isDigital: false,
    printOnDemand: {
      sizes: ['Small Pack (10pcs)', 'Large Pack (20pcs)'],
      colors: ['Full Color'],
      materials: ['Vinyl Premium', 'Vinyl Hologram'],
      printAreas: ['Die-cut custom'],
      mockups: [
        'https://images.pexels.com/photos/6069112/pexels-photo-6069112.jpeg?auto=compress&cs=tinysrgb&w=800',
        'https://images.pexels.com/photos/6069113/pexels-photo-6069113.jpeg?auto=compress&cs=tinysrgb&w=800'
      ]
    },
    seoTitle: 'Sticker Pack MeowLabs Vinyl Premium | MeowLabs Store',
    seoDescription: 'Set sticker vinyl premium MeowLabs. Waterproof, 10 desain unik, perfect untuk laptop dan gadget developer.',
    seoKeywords: ['sticker laptop', 'vinyl sticker', 'developer sticker', 'MeowLabs sticker pack']
  }
];