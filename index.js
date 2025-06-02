import express from 'express';
const app = express();
app.listen(8080, () => {
  console.log('Server is started');
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
  res.send('31°C, Sunny');
});

app.get('/products', (req, res) => {
  const items = [
    { id: 1, name: 'Laptop', price: 1000 },
    { id: 2, name: 'Smartphone', price: 500 },
    { id: 3, name: 'Tablet', price: 300 }
  ];
  
  const productList = items.map(item => `${item.name} - $${item.price}`).join(', ');
  res.send(`Available products: ${productList}`);
});