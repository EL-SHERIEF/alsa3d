import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// MongoDB connection URI
const uri = process.env.MONGODB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;

// Connect to MongoDB
client.connect().then(() => {
  console.log("Connected to MongoDB!");
  db = client.db("stfu"); // Replace with your database name
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// API route to get translation
app.get('/api/getTranslation', async (req, res) => {
  try {
    const translations = await db.collection('translations').findOne({ locale: 'en' });
    if (!translations) {
      return res.status(404).json({ error: 'Translations not found' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(translations);
  } catch (error) {
    console.error('Error fetching translations:', error);
    res.status(500).json({ error: 'Failed to fetch translations' });
  }
});

// API route to save translation
app.post('/api/saveTranslation', async (req, res) => {
  try {
    await db.collection('translations').updateOne(
      { locale: 'en' },
      { $set: req.body },
      { upsert: true }
    );
    res.status(200).json({ message: 'Translations updated successfully' });
  } catch (error) {
    console.error('Error saving translations:', error);
    res.status(500).json({ error: 'Failed to save translations' });
  }
});

// Export the Express app as a module for serverless function
export default app;

// Start the server if running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
