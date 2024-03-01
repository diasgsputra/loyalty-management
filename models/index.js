// models/index.js

const { Sequelize } = require('sequelize');
const UserModel = require('./userModel');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'rosie.db.elephantsql.com',
    port: 5432,
    database: 'kiyffqta',
    username: 'kiyffqta',
    password: 'IjQz9ovAfBqw4OfIOpObc5lNQvlL3z3a'
});

const User = UserModel(sequelize);

module.exports = {
    sequelize,
    User
};
