import express from 'express';
import cors from 'cors';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/book';

const app = express();

app.use(cors());
app.use(bodyParser.json());

//mongoose.connect('mongodb://localhost/books');
mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

app.use('/api', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));