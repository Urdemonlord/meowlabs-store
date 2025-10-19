import { supabaseAdmin } from './supabase';
import type { Request, Response, NextFunction } from 'express';

export async function requireAuth(req: Request, res: Response, next: NextFunction) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7) : null;

  if (!token) return res.status(401).json({ error: 'Missing bearer token' });

  const { data, error } = await supabaseAdmin.auth.getUser(token);
  if (error || !data.user) return res.status(401).json({ error: 'Invalid or expired token' });

  (req as any).user = data.user;
  next();
}
