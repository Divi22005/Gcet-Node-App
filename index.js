import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

const userSchema = new mongoose.Schema({
  name: String,
});
const User = mongoose.model('User', userSchema);

const productList = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 500 },
  { id: 3, name: 'Tablet', price: 300 }
];

app.get('/products', (req, res) => {
  res.json(productList);
});

app.listen(PORT, () => {
  mongoose.Connect('mongodb://localhost:27017/gcet');
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello Vignesh, Welcome to the world of Node.js');
}); 

app.get('/greet', (req, res) => {
  res.send('Greetings from the server!');
});

app.get('/name', (req, res) => {
  res.send('Vignesh Kumar');
});

app.get('/weather', (req, res) => {
  res.json({ temp: "31°C", condition: "Sunny" });
});

app.post('/register', async (req, res) => {
  const { name } = req.query;
  const result = await User.insertOne({ name: 'jhon' });
  res.json(result);
});
