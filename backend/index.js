
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'

import config from './db_config.js'
import empRoutes from './emp.routes.js'
import authRoutes from './auth.routes.js'
import quoteRoutes from './quote.routes.js';


const PORT = config.port;
const MONGOURI = config.mongoUri;

mongoose.Promise = global.Promise;
mongoose.connect(MONGOURI, {
  dbName: "employeeDB",
}).catch((error) => {
  throw new Error(`unable to connect to database: ${MONGOURI}`);
});

mongoose.connection.on('error', (err) => {
  console.error(`Database connection error: ${err}`);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB successfully');
});

var app = express();

//applied CORS to multiple routes
app.use(/^\/(api\/emps|auth\/signin|api\/quotes|api\/quotes2)/, (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

const allowCORS = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
};

app.use('/api/emps', allowCORS);
app.use('/auth/signin', allowCORS);
app.use('/api/quotes', allowCORS);
app.use('/api/quotes2', allowCORS);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/', empRoutes)
app.use('/', authRoutes)
app.use('/', quoteRoutes)

app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({ "error": err.name + ": " + err.message })
  } else if (err) {
    res.status(400).json({ "error": err.name + ": " + err.message, "stack": err.stack })
    console.log(err)
  }
})

app.use(function ( req, res, next) {
    res.send('This page does not exist!')
});

app.listen(PORT, function () {
    console.log('Listening on http://localhost:'+PORT+'/');
});