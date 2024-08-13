import { MongoClient } from 'mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = await MongoClient.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db();
    const { locale, translations } = req.body;
    await db.collection('translations').updateOne({ locale }, { $set: { translations } }, { upsert: true });
    client.close();
    res.status(200).json({ message: 'File updated successfully' });
  } else {
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
