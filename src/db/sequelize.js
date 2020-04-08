const DbConfig = require('../../config').db;
const { Sequelize } = require('sequelize');
const logger = require('debug')('SERVER:sequelize');
const UserModel = require('../models/user');


/**
 * DB connection setup
 */
const sequelize = new Sequelize(DbConfig.user, DbConfig.name, DbConfig.password, {
    host: DbConfig.host,
    port: DbConfig.port,
    dialect: DbConfig.dialect,
    define: {
        timestamps: false
    },
    logging: msg => logger(msg)
});


const User = UserModel(sequelize, Sequelize);

/**
 * Uncomment this in order to generate table
 */
// sequelize.sync().then(logger('DB is synced'));

module.exports = {User};