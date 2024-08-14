import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const filePath = path.join(process.cwd(), 'src/locales/en/translation.json');
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(fileContents);
      res.status(200).json(data);
    } catch (error) {
      console.error('Error reading translation file:', error);
      res.status(500).json({ error: 'Failed to read translation file' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
