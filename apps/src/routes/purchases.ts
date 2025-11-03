import { Router } from 'express';
import { requireAuth } from '../authMiddleware';

const r = Router();

/** GET /api/purchases  -> contoh data user-locked */
r.get('/', requireAuth, async (req, res) => {
  const user = (req as any).user; // dari middleware supabase
  // TODO: ambil dari DB kamu berdasarkan user.id
  // contoh dummy:
  const purchases = [
    {
      id: '1',
      userId: user.id,
      items: [
        {
          productId: '1',
          productTitle: 'Panduan Lengkap AI untuk Pemula',
          productImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
          price: 99000,
          quantity: 1,
          isDigital: true
        }
      ],
      total: 99000,
      status: 'completed',
      paymentMethod: 'QRIS',
      purchaseDate: '2025-01-15T10:30:00Z',
      downloadLinks: [
        {
          productId: '1',
          url: 'https://download.meowlabs.store/ai-guide.pdf',
          expiresAt: '2025-02-15T10:30:00Z',
          downloadCount: 2,
          maxDownloads: 5
        }
      ]
    }
  ];
  res.json({ purchases });
});

export default r;
