const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config(); // Load environment variables from .env file

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
  db = client.db("your-database-name"); // Replace with your database name
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
});

// API route to get translation
app.get('/api/getTranslation', (req, res) => {
  const filePath = path.resolve('../src/locales/en/translation.json'); // Adjust path as necessary
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Failed to load data' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(JSON.parse(data));
  });
});

// API route to save translation
app.post('/api/saveTranslation', (req, res) => {
  const filePath = path.resolve('../src/locales/en/translation.json'); // Adjust path as necessary
  fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).json({ error: 'Failed to save data' });
    }
    res.status(200).json({ message: 'File updated successfully' });
  });
});

// Export the Express app as a module for serverless function
module.exports = app;

// Start the server if running locally
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
