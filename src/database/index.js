const Sequelize = require('sequelize');
const DBOptions = require('../config/database');
const User = require('../models/User');
const Item = require('../models/Item');
const Repo = require('../models/Repo');
const ItemConfigs = require('../models/ItemConfigs');
const UserRepoItem = require('../models/UserRepoItem');
const Home = require('../models/Home');


const connection = new Sequelize(DBOptions);

User.init(connection);
Repo.init(connection);
Item.init(connection);
ItemConfigs.init(connection);
UserRepoItem.init(connection);
Home.init(connection);

User.associate(connection.models);
Repo.associate(connection.models);
Item.associate(connection.models);
ItemConfigs.associate(connection.models);
UserRepoItem.associate(connection.models);
Home.associate(connection.models);

module.exports = connection;