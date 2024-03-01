// models/index.js

const { Sequelize } = require('sequelize');
const UserModel = require('./userModel');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
    username: 'postgres',
    password: 'admin'
});

const User = UserModel(sequelize);

module.exports = {
    sequelize,
    User
};
