const config = {
    db: {
        host: process.env.DB_HOST || 'host',
        name: process.env.DB_NAME || 'dbName',
        user: process.env.DB_USER || 'username',
        password: process.env.DB_PASS || '1234',
        port: process.env.DB_PORT || '3306',
        dialect: process.env.DB_DIALECT || 'mysql'
    },
    app: {
        port: process.env.port || '3001',
        clientHost: process.env.CLIENT_HOST || 'http://localhost:3000',
    },
};

module.exports = config;