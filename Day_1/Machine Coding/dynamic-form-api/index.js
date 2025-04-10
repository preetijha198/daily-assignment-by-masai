const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const formRoutes = require('./controllers/formController');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/forms', formRoutes);

// Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
