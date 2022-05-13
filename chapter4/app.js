const express = require('express');
const app = express();
const port = 3000;
const morgan = require('morgan');
const router = require('./routes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

app.use(express.json());
app.use(morgan('dev'));
app.use(router);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen(port, ()=> `app listen on port : ${port}`);