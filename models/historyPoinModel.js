const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const HistoryPoin = sequelize.define('history_poin', {
        transaction_id: {
            type: DataTypes.STRING,
        },
        transaction_date: {
            type: DataTypes.DATE,
        },
        type: {
            type: DataTypes.STRING,
        },
        poin: {
            type: DataTypes.INTEGER,
        },
        member_no: {
            type: DataTypes.INTEGER,
        }
    });


    return HistoryPoin;
};
