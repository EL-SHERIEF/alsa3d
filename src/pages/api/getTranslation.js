import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();
    const translations = await db.collection('translations').findOne({ locale: 'en' });
    client.close();
    res.status(200).json(translations);
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
