require('dotenv').config();
const AppConfig = require('../config').app;
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const logger = require('debug')('SERVER:app:info');
const error = require('debug')('SERVER:app:error');
const helmet = require('helmet');
const cors = require("cors");
const app = express();


logger(`Server init`);

/**
 * Routes.
 */
const usersRouter = require('./routes/users');

/**
 * Express middleware.
 */
app.use(morgan('dev'));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors({
    origin: AppConfig.clientHost
}));
app.use('/api', usersRouter);

// app.use(errorHandler);
// function errorHandler(err, req, res, next) {
//     error(err);
//     res.status(500)
// }

function onStart(){
    logger(`Server running on port ${AppConfig.port}`);
}

app.listen(AppConfig.port, onStart);

module.exports = app;


