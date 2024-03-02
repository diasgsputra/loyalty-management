const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Membership = sequelize.define('membership', {
        member_no: {
            type: DataTypes.STRING,
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
        birth_date: {
            type: DataTypes.DATE,
        },
        address: {
            type: DataTypes.STRING,
        },
        join_date: {
            type: DataTypes.DATE,
        },
        referral: {
            type: DataTypes.STRING,
        },
        earned_point: {
            type: DataTypes.INTEGER,
        },
        redeemed_point: {
            type: DataTypes.INTEGER,
        },
        remained_point: {
            type: DataTypes.INTEGER,
        },
        status: {
            type: DataTypes.BOOLEAN,
        }
    });


    return Membership;
};
