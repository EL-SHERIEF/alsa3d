const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

// Correct the file path to ensure it's accessible
const jsonFilePath = path.resolve(__dirname, '../src/locales/en/translation.json');

app.get('/api/getTranslation', (req, res) => {
  fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err);
      return res.status(500).json({ error: 'Error reading file', details: err.message });
    }
    try {
      const jsonData = JSON.parse(data);
      res.json(jsonData);
    } catch (parseError) {
      console.error('Error parsing JSON:', parseError);
      res.status(500).json({ error: 'Error parsing JSON', details: parseError.message });
    }
  });
});

app.post('/api/saveTranslation', (req, res) => {
  fs.writeFile(jsonFilePath, JSON.stringify(req.body, null, 2), 'utf8', (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).json({ error: 'Error saving file', details: err.message });
    }
    res.json({ message: 'File saved successfully' });
  });
});

module.exports = app;
