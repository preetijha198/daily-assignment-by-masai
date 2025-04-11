// server.js
const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/Product');

const app = express();
const PORT = 3000;
const DEBOUNCE_TIME = 500; // ms

const pendingSearches = new Map(); // queue for debounce

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/debounce-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Search endpoint with server-side debounce
app.get('/search', (req, res) => {
  const searchTerm = req.query.q?.trim() || '';
  const clientKey = req.ip + '|' + searchTerm;

  // Clear any previous timeout for this client+search
  if (pendingSearches.has(clientKey)) {
    clearTimeout(pendingSearches.get(clientKey).timeout);
  }

  // Set a new timeout
  const timeout = setTimeout(async () => {
    try {
      const results = await Product.find({
        name: { $regex: searchTerm, $options: 'i' }
      });

      // Send result only if client still exists in map
      if (pendingSearches.has(clientKey)) {
        pendingSearches.get(clientKey).res.json(results);
        pendingSearches.delete(clientKey);
      }
    } catch (error) {
      if (pendingSearches.has(clientKey)) {
        pendingSearches.get(clientKey).res.status(500).json({ error: 'Server error' });
        pendingSearches.delete(clientKey);
      }
    }
  }, DEBOUNCE_TIME);

  // Store timeout + res in the map
  pendingSearches.set(clientKey, { timeout, res });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
