// seed.js
const mongoose = require('mongoose');
const Product = require('./models/Product');

mongoose.connect('mongodb://localhost:27017/debounce-demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected for seeding"));

async function seedProducts() {
  await Product.deleteMany({}); // Clear existing data
  await Product.insertMany([
    { name: 'Car Toy', category: 'Toys' },
    { name: 'Camera', category: 'Electronics' },
    { name: 'Cart', category: 'Groceries' },
    { name: 'Laptop', category: 'Electronics' },
    { name: 'Toy Train', category: 'Toys' },
  ]);
  console.log('Products Seeded');
  mongoose.disconnect();
}

seedProducts();
