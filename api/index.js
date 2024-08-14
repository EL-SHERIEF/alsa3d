const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const jsonFilePath = path.join(__dirname, '../src/locales/en/translation.json');

// Endpoint to get JSON data
app.get('/api/get-json', (req, res) => {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Error reading file', details: err.message });
    }
    try {
      const jsonData = JSON.parse(data);
      // Disable caching
      res.setHeader('Cache-Control', 'no-store');
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).json({ error: 'Error parsing JSON', details: parseError.message });
    }
  });
});

// Endpoint to save JSON data
app.post('/api/save-json', (req, res) => {
  fs.writeFile(jsonFilePath, JSON.stringify(req.body, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).json({ error: 'Error saving file', details: err.message });
    }
    // Return a JSON response
    res.json({ message: 'File saved successfully' });
  });
});

// Listen on port 3000 if not in production
if (process.env.NODE_ENV !== 'production') {
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
}

module.exports = app; // Export the app for Vercel
