/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware for parsing large JSON payloads (scanned image base64 files can be large)
  app.use(express.json({ limit: '15mb' }));

  // Initialize Gemini API client on server-side only
  const apiKey = process.env.GEMINI_API_KEY;
  let ai: GoogleGenAI | null = null;

  if (apiKey) {
    ai = new GoogleGenAI({
      apiKey: apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        }
      }
    });
    console.log('Gemini client initialized with custom User-Agent.');
  } else {
    console.warn('GEMINI_API_KEY not defined in environment. Uploaded Panchangam feature will be unavailable.');
  }

  // --- API Routes ---

  // Health check endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', time: new Date().toISOString() });
  });

  // Extract Panchanga details using Gemini API via the server-side proxy
  app.post('/api/panchanga/extract', async (req, res) => {
    try {
      if (!ai) {
        return res.status(503).json({
          error: 'Gemini AI service is not initialized on the server. Please provide a valid GEMINI_API_KEY.'
        });
      }

      const { base64, mimeType, text } = req.body;
      const contentParts: any[] = [];

      // Construct prompt instructing the model to extract and map to Tamil parameters
      const systemPrompt = `You are an expert Hindu Panchangam (Ephemeris) parser specializing in Sri Vaishnava (Vadakalai) rituals like Yajur Upakarma (Avani Avittam) and Gayatri Japam.
Your task is to analyze the provided input (image, text, or document) and extract the exact 10 Vedic time parameters (Kala Vivarana) required for Sankalpam.

CRITICAL RULES:
1. Return the final output strictly in Tamil script.
2. The parameters MUST correspond to a single, consistent date (preferably the main Upakarma day or the Gayatri Japam day described).
3. Translate or transliterate Sanskrit technical terms into standard Tamil script as follows:
   - Samvatsara: e.g. "பராபவ", "பிலவங்க", "கீலக"
   - Ayana: e.g. "தக்ஷிணாயனே"
   - Ritu: e.g. "வர்ஷ" (or other ritu if mentioned)
   - Masa: e.g. "ஶ்ராவண" or "ஸிம்ஹ"
   - Paksha: e.g. "ஶுக்ல" or "க்ருஷ்ண"
   - Tithi: e.g. "பௌர்ணமாஸ்யாம்" or "ப்ரதமாயாம்"
   - Vara: e.g. "குரு", "ப்ருகு", "இந்து", "பௌம"
   - Nakshatra: e.g. "ஶ்ரவிஷ்டா", "ஶதபிஷக்", "ஶ்ரவண"
   - Yoga: e.g. "ஶோபன", "ஸுகர்ம", "வ்யாகாத", "ஸௌபாக்ய"
   - Karana: e.g. "பவ", "பாலவ", "வணிஜ", "விஷ்டி"
4. Do not include prefix/suffix phrases like "நாம ஸம்வத்ஸரே" or "ருதௌ" in the parsed values. Just return the core name (e.g. "பராபவ", "வர்ஷ").
5. Return the result strictly in JSON matching the specified schema.`;

      contentParts.push({ text: systemPrompt });

      if (base64 && mimeType) {
        // Send base64 image data
        contentParts.push({
          inlineData: {
            data: base64,
            mimeType: mimeType,
          }
        });
        contentParts.push({ text: "Please extract parameters from this uploaded calendar/sheet image." });
      } else if (text) {
        // Send text data
        contentParts.push({ text: `Extract parameters from the following description text:\n\n${text}` });
      } else {
        return res.status(400).json({ error: 'Invalid payload. Send either base64 image or description text.' });
      }

      console.log('Sending extraction query to Gemini 3.7 Flash...');
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.7-flash',
        contents: { parts: contentParts },
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              samvatsara: { type: Type.STRING, description: "Tamil name of the Samvatsara year, e.g. பராபவ, பிலவங்க" },
              ayana: { type: Type.STRING, description: "Ayana name, e.g. தக்ஷிணாயனே" },
              ritu: { type: Type.STRING, description: "Ritu name, e.g. வர்ஷ" },
              masa: { type: Type.STRING, description: "Masa name, e.g. ஶ்ராவண" },
              paksha: { type: Type.STRING, description: "Paksha name, e.g. ஶுக்ல or க்ருஷ்ண" },
              tithi: { type: Type.STRING, description: "Tithi name, e.g. பௌர்ணமாஸ்யாம், ப்ரதமாயாம்" },
              vara: { type: Type.STRING, description: "Vara name (weekday name), e.g. குரு, ப்ருகு, இந்து, பௌம" },
              nakshatra: { type: Type.STRING, description: "Nakshatra name, e.g. ஶ்ரவிஷ்டா, ஶதபிஷக், ஶ்ரவண" },
              yoga: { type: Type.STRING, description: "Yoga name, e.g. ஶோபன, ஸுகர்ம, வ்யாகாத" },
              karana: { type: Type.STRING, description: "Karana name, e.g. பவ, பாலவ, வணிஜ, விஷ்டி" },
            },
            required: ["samvatsara", "ayana", "ritu", "masa", "paksha", "tithi", "vara", "nakshatra", "yoga", "karana"]
          }
        }
      });

      const resultText = response.text;
      if (!resultText) {
        throw new Error('Gemini returned an empty response.');
      }

      const parsedPanchanga = JSON.parse(resultText.trim());
      console.log('Successfully extracted Panchanga values:', parsedPanchanga);

      res.json({ panchanga: parsedPanchanga });
    } catch (error: any) {
      console.error('Gemini extraction handler error:', error);
      res.status(500).json({ error: error.message || 'Error occurred during extraction.' });
    }
  });

  // --- Vite Asset / SPA Middleware ---

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
    console.log('Vite middleware mounted for Development Mode.');
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
    console.log('Static server mounted for Production Mode.');
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start full-stack server:', err);
});
