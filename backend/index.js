import path from "path";
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser'
import config from './db_config.js'
import empRoutes from './emp.routes_unsecured.js'


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
app.use(function ( req, res, next) {
    res.send('This page does not exist!')
});

app.listen(PORT, function () {
    console.log('Listening on http://localhost:'+PORT+'/');
});