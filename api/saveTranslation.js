import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
        const filePath = path.join(process.cwd(), 'src/locales/en/translation.json');

      fs.writeFileSync(filePath, JSON.stringify(req.body, null, 2), 'utf8');
      
      // Send HTML response
      res.setHeader('Content-Type', 'text/html');
      res.status(200).send('<h3>Ahmed Alaa</h3>');
    } catch (error) {
      console.error('Error saving translation file:', error);
      res.status(500).send('<h3>Error saving translation file</h3>');
    }
  } else {
    res.status(405).end(`<h3>Method ${req.method} Not Allowed</h3>`);
  }
}
