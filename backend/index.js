
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import config from './db_config.js'
import empRoutes from './emp.routes.js'
import authRoutes from './auth.routes.js'


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

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.use('/', empRoutes)
app.use('/', authRoutes)


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