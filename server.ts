import express from 'express';
const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World!');
  next();
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

