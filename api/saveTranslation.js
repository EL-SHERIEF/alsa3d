import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const filePath = path.join(process.cwd(), 'src/locales/en/translation.json');
      const updatedTranslations = JSON.stringify(req.body, null, 2);
      fs.writeFileSync(filePath, updatedTranslations, 'utf8');
      res.status(200).json({ message: 'File updated successfully' });
    } catch (error) {
      console.error('Error writing translation file:', error);
      res.status(500).json({ error: 'Failed to save translation file' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
