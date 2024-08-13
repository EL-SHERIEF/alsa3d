import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'GET') {
    try {
      const filePath = path.resolve('src/locales/en/translation.json'); // Adjust path as necessary
      const data = fs.readFileSync(filePath, 'utf8');
      res.status(200).json(JSON.parse(data));
    } catch (error) {
      console.error('Error reading file:', error);
      res.status(500).json({ error: 'Failed to load data' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
