import express from 'express';
import customerRoutes from "./routes/customer-routes";
import itemRoutes from "./routes/item-routes";
// initialize express
const app = express();

app.get('/', (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, content-type');
  next();
});

// use express.json() to parse incoming requests with JSON payloads
app.use(express.json());
// use the customerRoutes
app.use('/customer', customerRoutes)
// use the itemRoutes
app.use('/item', itemRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


