const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const router = require('./routes');

app.use(express.json());
app.use(morgan('dev'));
app.use(router);

app.listen(port, ()=> `app listen on port : ${port}`);