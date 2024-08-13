const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config(); // Make sure to install dotenv and add it here

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// MongoDB URI from environment variable
const uri = process.env.MONGODB_URI;

// Create a MongoClient
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Connect to MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

// Ensure MongoDB is connected before starting the server
connectToMongo();

app.get('/api/getTranslation', async (req, res) => {
  try {
    const db = client.db('your_database_name');
    const collection = db.collection('translations');
    const data = await collection.findOne({});
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(data || {});
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Failed to load data' });
  }
});

app.post('/api/saveTranslation', async (req, res) => {
  try {
    const db = client.db('your_database_name');
    const collection = db.collection('translations');
    await collection.updateOne({}, { $set: req.body }, { upsert: true });
    res.status(200).json({ message: 'Data updated successfully' });
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
