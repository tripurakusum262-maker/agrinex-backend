const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// MongoDB Cloud Connection String (পরবর্তীতে MongoDB Atlas URL বসাবেন)
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/agrinex';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Agrinex DB Connected!'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Test Route
app.get('/', (req, res) => {
  res.send('Agrinex Backend API is Running Live!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Agrinex MVP Server running on port ${PORT}`);
});
