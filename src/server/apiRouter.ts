import { IncomingMessage, ServerResponse } from 'http';
import {
  generateStudentHint,
  reviewSentenceGrammar,
  checkFullProject,
  generateTeacherAssessmentDraft,
  translateKoreanSentence,
  batchTranslateKoreanSentences
} from './geminiHandler';

export async function handleApiRequest(req: IncomingMessage, res: ServerResponse): Promise<boolean> {
  const url = req.url || '';

  if (!url.startsWith('/api/')) {
    return false;
  }

  // Set standard CORS & JSON headers
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    res.statusCode = 204;
    res.end();
    return true;
  }

  if (url === '/api/health' && req.method === 'GET') {
    const hasKey = !!process.env.GEMINI_API_KEY;
    res.statusCode = 200;
    res.end(JSON.stringify({ status: 'ok', hasGeminiKey: hasKey, timestamp: new Date().toISOString() }));
    return true;
  }

  if (req.method === 'POST') {
    let bodyStr = '';
    req.on('data', chunk => {
      bodyStr += chunk;
    });

    await new Promise<void>(resolve => {
      req.on('end', () => resolve());
    });

    let payload: any = {};
    try {
      if (bodyStr) {
        payload = JSON.parse(bodyStr);
      }
    } catch {
      res.statusCode = 400;
      res.end(JSON.stringify({ error: 'Invalid JSON body' }));
      return true;
    }

    try {
      if (url === '/api/gemini/hint') {
        const result = await generateStudentHint(payload);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
        return true;
      }

      if (url === '/api/gemini/grammar') {
        const result = await reviewSentenceGrammar(payload);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
        return true;
      }

      if (url === '/api/gemini/check') {
        const result = await checkFullProject(payload);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
        return true;
      }

      if (url === '/api/gemini/translate') {
        const result = await translateKoreanSentence(payload);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
        return true;
      }

      if (url === '/api/gemini/translate-all') {
        const result = await batchTranslateKoreanSentences(payload);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
        return true;
      }

      if (url === '/api/gemini/assessment') {
        const result = await generateTeacherAssessmentDraft(payload);
        res.statusCode = 200;
        res.end(JSON.stringify(result));
        return true;
      }

      res.statusCode = 404;
      res.end(JSON.stringify({ error: `Not found: ${url}` }));
      return true;
    } catch (err: any) {
      console.error(`API error for ${url}:`, err);
      res.statusCode = 500;
      res.end(JSON.stringify({ error: err?.message || 'Server error' }));
      return true;
    }
  }

  return false;
}
