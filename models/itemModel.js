const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Item = sequelize.define('item', {
        name: {
            type: DataTypes.STRING,
        },
        price: {
            type: DataTypes.INTEGER,
        },
        quantity: {
            type: DataTypes.INTEGER,
        },
        sub_total: {
            type: DataTypes.INTEGER,
        },
        transaction_id: {
            type: DataTypes.STRING,
        },

    });


    return Item;
};
