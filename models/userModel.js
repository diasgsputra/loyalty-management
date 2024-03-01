// models/user.js

const { Sequelize, DataTypes } = require('sequelize');
// const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
    const User = sequelize.define('users', {
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    });

    // Hash password before saving user
    // User.beforeCreate(async (user) => {
    //     const salt = await bcrypt.genSalt(10);
    //     user.password = await bcrypt.hash(user.password, salt);
    // });

    return User;
};
