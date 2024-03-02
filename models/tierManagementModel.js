const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const TierManagement = sequelize.define('tier_management', {
        tier_name: {
            type: DataTypes.STRING,
        },
        min_poin: {
            type: DataTypes.INTEGER,
        },
        max_poin: {
            type: DataTypes.INTEGER,
        }
    });


    return TierManagement;
};
