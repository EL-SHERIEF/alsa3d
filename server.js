const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON
app.use(express.json());

// API routes
app.get('/api/getTranslation', (req, res) => {
  const filePath = path.resolve('src/locales/en/translation.json'); // Adjust path as necessary
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Failed to load data' });
    }
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(JSON.parse(data));
  });
});

app.post('/api/saveTranslation', (req, res) => {
  const filePath = path.resolve('src/locales/en/translation.json'); // Adjust path as necessary
  fs.writeFile(filePath, JSON.stringify(req.body, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error writing file:', err);
      return res.status(500).json({ error: 'Failed to save data' });
    }
    res.status(200).json({ message: 'File updated successfully' });
  });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
