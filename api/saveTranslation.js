import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const filePath = path.resolve(__dirname, '../src/locales/en/translation.json');

      fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2), 'utf8');
      res.status(200).json({ message: 'File saved successfully' });
    } catch (error) {
      console.error('Error saving translation file:', error);
      res.status(500).json({ error: 'Failed to save translation file' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
