// models/index.js
const pg = require('pg');
const { Sequelize } = require('sequelize');
const UserModel = require('./userModel');
const MembershipModel = require('./membershipModel');
const TransactionModel = require('./transactionModel');
const HistoryPoinModel = require('./historyPoinModel');
const ItemModel = require('./itemModel');
const TierManagementModel = require('./tierManagementModel');

const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'rosie.db.elephantsql.com',
    port: 5432,
    database: 'kiyffqta',
    username: 'kiyffqta',
    password: 'IjQz9ovAfBqw4OfIOpObc5lNQvlL3z3a'
});

const User = UserModel(sequelize);
const Membership = MembershipModel(sequelize);
const Transaction = TransactionModel(sequelize);
const HistoryPoin = HistoryPoinModel(sequelize);
const Item = ItemModel(sequelize);
const TierManagement = TierManagementModel(sequelize);

module.exports = {
    sequelize,
    User,
    Membership,
    Transaction,
    HistoryPoin,
    Item,
    TierManagement
};
