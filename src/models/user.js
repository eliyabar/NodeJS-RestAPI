module.exports = (sequelize, type) => {
    return sequelize.define('User', {
        id: {
            type: type.BIGINT(20),
            primaryKey: true,
            autoIncrement: true
        },
        firstName: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                min: {
                    args: 2,
                },
                max: {
                    args: 50,
                }
            }
        },
        lastName: {
            type: type.STRING(50),
            allowNull: false,
            validate: {
                min: {
                    args: 2,
                },
                max: {
                    args: 50,
                }
            }
        },
        address: {
            type: type.STRING(150),
            validate: {
                max: {
                    args: 150,
                }
            }
        },
        email: {
            type: type.STRING(60),
            validate: {
                isEmail: true
            }
        }
    })
};

