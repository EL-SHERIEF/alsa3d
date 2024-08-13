import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db();
      const translations = await db.collection('translations').findOne({ locale: 'en' });
      client.close();
      if (!translations) {
        return res.status(404).json({ error: 'Translations not found' });
      }
      res.status(200).json(translations);
    } catch (error) {
      console.error('Error fetching translations:', error);
      res.status(500).json({ error: 'Failed to fetch translations' });
    }
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
