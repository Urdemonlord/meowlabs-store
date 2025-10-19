import { Router } from 'express';
import { requireAuth } from '../authMiddleware';

const router = Router();

router.get('/public', (_req, res) => res.json({ message: 'Public OK' }));

router.get('/me', requireAuth, (req, res) => {
  res.json({ user: (req as any).user });
});

export default router;
