const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Transaction = sequelize.define('transaction', {
        member_no: {
            type: DataTypes.INTEGER,
        },
        name: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phone_no: {
            type: DataTypes.STRING,
        },
        total_amount: {
            type: DataTypes.INTEGER,
        },
        transaction_date: {
            type: DataTypes.DATE,
        },
        transaction_id: {
            type: DataTypes.STRING,
        }
    });


    return Transaction;
};
