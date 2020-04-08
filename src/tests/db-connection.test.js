require('dotenv').config();
const {Sequelize} = require('sequelize');
const DbConfig = require('../../config').db;


let sequelize;

describe('DB Testing', ()=>{
    test('Testing db connection', async (done) => {
        sequelize= new Sequelize(DbConfig.user, DbConfig.name, DbConfig.password, {
            host: DbConfig.host,
            port: DbConfig.port,
            dialect: DbConfig.dialect,
            define: {
                timestamps: false
            }
        });
        expect(await testDBConnection()).toBe(true);
        done();
    });
});

afterAll(async done => {
    // Closing the DB connection allows Jest to exit successfully.
    sequelize.close();
    done();
});


async function testDBConnection() {
    try {
        await sequelize.authenticate();
    } catch (e) {
        return false;
    }
    return true;
}