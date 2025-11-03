import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes/example';
import purchases from './routes/purchases';


const app = express();

const allowed = (process.env.ALLOWED_ORIGINS ?? '')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

app.use(cors({ origin: allowed.length ? allowed : true, credentials: true }));
app.use(express.json());

app.get('/healthz', (_req, res) => res.json({ ok: true }));
app.use('/api', routes);
app.use('/api/purchases', purchases);


const PORT = Number(process.env.PORT ?? 8787);
app.listen(PORT, () => {
  console.log(`[backend] running on http://localhost:${PORT}`);
  console.log(`[backend] allowed origins:`, allowed);
});
