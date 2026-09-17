import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import { handleApiRequest } from './src/server/apiRouter';

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Handle all /api requests FIRST
  app.use(async (req, res, next) => {
    if (req.url.startsWith('/api/')) {
      const handled = await handleApiRequest(req, res);
      if (handled) return;
    }
    next();
  });

  // Vite middleware for development vs static dist for production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

startServer();

